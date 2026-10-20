import React, { useEffect, useRef } from 'react';

interface BloodRainProps {
  enabled?: boolean;
}

interface Drop {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  width: number;
  color: string;
}

interface Splash {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  color: string;
}

export const BloodRain: React.FC<BloodRainProps> = ({ enabled = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Deep gothic blood color palette
    const bloodColors = [
      'rgba(185, 28, 28, ',   // Deep blood red
      'rgba(220, 38, 38, ',   // Crimson
      'rgba(127, 29, 29, ',   // Dark coagulated blood
      'rgba(153, 27, 27, ',   // Arterial red
      'rgba(255, 40, 70, ',   // Fresh drop highlight
    ];

    // Initialize drops
    const dropCount = Math.min(130, Math.floor(width / 10));
    const drops: Drop[] = [];
    const splashes: Splash[] = [];

    for (let i = 0; i < dropCount; i++) {
      drops.push({
        x: Math.random() * (width + 200) - 100,
        y: Math.random() * height,
        length: Math.random() * 28 + 14,
        speed: Math.random() * 14 + 10,
        opacity: Math.random() * 0.55 + 0.2,
        width: Math.random() * 1.5 + 0.6,
        color: bloodColors[Math.floor(Math.random() * bloodColors.length)],
      });
    }

    const angle = 0.18; // Slight diagonal wind drift (~10 degrees)
    const sinAngle = Math.sin(angle);
    const cosAngle = Math.cos(angle);

    const render = () => {
      // Clear with slight trailing blend for visceral motion blur
      ctx.clearRect(0, 0, width, height);

      // Draw subtle atmospheric blood mist at bottom
      const gradient = ctx.createLinearGradient(0, height - 160, 0, height);
      gradient.addColorStop(0, 'rgba(50, 0, 5, 0)');
      gradient.addColorStop(1, 'rgba(70, 0, 8, 0.18)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, height - 160, width, 160);

      // Update & Draw Rain Drops
      ctx.lineCap = 'round';

      for (let i = 0; i < drops.length; i++) {
        const d = drops[i];

        // Draw drop streak with slight taper
        ctx.beginPath();
        const startX = d.x;
        const startY = d.y;
        const endX = d.x - d.length * sinAngle;
        const endY = d.y + d.length * cosAngle;

        ctx.strokeStyle = `${d.color}${d.opacity})`;
        ctx.lineWidth = d.width;
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Move drop
        d.x -= d.speed * sinAngle;
        d.y += d.speed * cosAngle;

        // Reset if reached floor or offscreen
        if (d.y > height || d.x < -100) {
          // Trigger subtle blood ripple
          if (Math.random() > 0.4 && splashes.length < 25) {
            splashes.push({
              x: d.x,
              y: Math.min(height - 2, d.y),
              radius: 1,
              maxRadius: Math.random() * 8 + 4,
              opacity: d.opacity * 0.8,
              color: d.color,
            });
          }

          d.y = -d.length - Math.random() * 50;
          d.x = Math.random() * (width + 200) - 50;
          d.speed = Math.random() * 14 + 10;
        }
      }

      // Update & Draw Splashes
      for (let i = splashes.length - 1; i >= 0; i--) {
        const s = splashes[i];
        ctx.beginPath();
        ctx.ellipse(s.x, s.y, s.radius * 2, s.radius * 0.6, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `${s.color}${s.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        s.radius += 0.4;
        s.opacity -= 0.035;

        if (s.opacity <= 0 || s.radius >= s.maxRadius) {
          splashes.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20 select-none mix-blend-screen opacity-75"
      style={{ willChange: 'transform' }}
    />
  );
};
