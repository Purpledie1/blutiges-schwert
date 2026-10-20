// Web Audio API Procedural Rain Sound Generator
// Realistic ambient rainfall synthesis with zero external audio assets

class RainAudioEngine {
  private ctx: AudioContext | null = null;
  private noiseSource: AudioBufferSourceNode | null = null;
  private masterGain: GainNode | null = null;
  private filterLow: BiquadFilterNode | null = null;
  private filterHigh: BiquadFilterNode | null = null;
  private isPlaying: boolean = false;
  private volume: number = 0.45; // Default 45% volume

  private init() {
    if (!this.ctx) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtxClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Create 3 seconds of pink noise buffer
  private createPinkNoiseBuffer(): AudioBuffer | null {
    if (!this.ctx) return null;
    const bufferSize = this.ctx.sampleRate * 3;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.76160 * b5 - white * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.14;
      b6 = white * 0.115926;
    }
    return buffer;
  }

  public setVolume(newVolume: number) {
    this.volume = Math.max(0, Math.min(1, newVolume));
    if (this.ctx && this.masterGain) {
      const now = this.ctx.currentTime;
      // Map linear slider to smooth audio response
      const targetGain = this.isPlaying ? Math.pow(this.volume, 1.8) * 0.35 : 0.0001;
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.linearRampToValueAtTime(targetGain, now + 0.05);
    }
    if (newVolume > 0 && !this.isPlaying) {
      this.start();
    } else if (newVolume === 0 && this.isPlaying) {
      this.stop();
    }
  }

  public getVolume(): number {
    return this.volume;
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      if (this.volume === 0) this.volume = 0.45;
      this.start();
      return true;
    }
  }

  public start() {
    this.init();
    if (!this.ctx) return;
    if (this.isPlaying) return;

    const now = this.ctx.currentTime;
    const noiseBuffer = this.createPinkNoiseBuffer();
    if (!noiseBuffer) return;

    this.noiseSource = this.ctx.createBufferSource();
    this.noiseSource.buffer = noiseBuffer;
    this.noiseSource.loop = true;

    // Filters to shape rushing rain sound
    this.filterLow = this.ctx.createBiquadFilter();
    this.filterLow.type = 'lowpass';
    this.filterLow.frequency.setValueAtTime(950, now);
    this.filterLow.Q.setValueAtTime(1.2, now);

    this.filterHigh = this.ctx.createBiquadFilter();
    this.filterHigh.type = 'highpass';
    this.filterHigh.frequency.setValueAtTime(180, now);

    // Master Gain
    this.masterGain = this.ctx.createGain();
    const targetGain = Math.pow(this.volume, 1.8) * 0.35;
    this.masterGain.gain.setValueAtTime(0.001, now);
    this.masterGain.gain.linearRampToValueAtTime(targetGain, now + 0.6);

    // Routing
    this.noiseSource.connect(this.filterHigh);
    this.filterHigh.connect(this.filterLow);
    this.filterLow.connect(this.masterGain);
    this.masterGain.connect(this.ctx.destination);

    this.noiseSource.start(now);
    this.isPlaying = true;
  }

  public stop() {
    if (!this.ctx || !this.masterGain || !this.isPlaying) return;

    const now = this.ctx.currentTime;
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.4);

    setTimeout(() => {
      try {
        this.noiseSource?.stop();
        this.noiseSource?.disconnect();
        this.filterLow?.disconnect();
        this.filterHigh?.disconnect();
        this.masterGain?.disconnect();
      } catch {
        // ignore cleanup
      }
      this.isPlaying = false;
    }, 450);
  }
}

export const rainAudio = new RainAudioEngine();
