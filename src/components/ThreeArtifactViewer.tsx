import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Rotate3d, Eye, Box, Sparkles, Compass, Shield } from 'lucide-react';
import { sfx } from '../utils/sfx';

export const ThreeArtifactViewer: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [wireframe, setWireframe] = useState<boolean>(false);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [polyCount, setPolyCount] = useState<number>(0);
  const [coords, setCoords] = useState<{ x: string; y: string; z: string }>({ x: '0.00', y: '0.00', z: '0.00' });

  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const materialsRef = useRef<THREE.Material[]>([]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 480;

    // 1. Scene & Camera setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x050507, 0.04);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // 2. Renderer setup with capped pixel ratio per threejs-creative-3d skill
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // 3. Multi-point Dark Gothic Lighting Setup
    const ambientLight = new THREE.AmbientLight(0x0a0a0f, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xe2e8f0, 2.5); // Sharp silver edge highlight
    dirLight1.position.set(5, 8, 4);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x334155, 1.5); // Cool pewter fill
    dirLight2.position.set(-5, -3, -4);
    scene.add(dirLight2);

    const bloodPointLight = new THREE.PointLight(0xdc2626, 4.0, 12); // Arterial crimson glow
    bloodPointLight.position.set(0, 0, 2);
    scene.add(bloodPointLight);

    // 4. Procedural Geometry Construction for "Das Blutige Schwert"
    const swordGroup = new THREE.Group();
    scene.add(swordGroup);

    const materials: THREE.Material[] = [];
    const geometries: THREE.BufferGeometry[] = [];

    // Metallic Obsidian Steel Material for blade
    const bladeMaterial = new THREE.MeshStandardMaterial({
      color: 0x18181c,
      metalness: 0.95,
      roughness: 0.2,
      wireframe: false,
    });
    materials.push(bladeMaterial);

    // Crimson Blood Inset Material
    const bloodGrooveMaterial = new THREE.MeshStandardMaterial({
      color: 0x991b1b,
      emissive: 0x7f1d1d,
      emissiveIntensity: 0.6,
      metalness: 0.8,
      roughness: 0.3,
      wireframe: false,
    });
    materials.push(bloodGrooveMaterial);

    // Dark Pewter Hardware for Crossguard & Pommel
    const hardwareMaterial = new THREE.MeshStandardMaterial({
      color: 0x475569,
      metalness: 0.85,
      roughness: 0.4,
      wireframe: false,
    });
    materials.push(hardwareMaterial);

    // Distressed Leather Material for Handle
    const gripMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f0f12,
      metalness: 0.1,
      roughness: 0.85,
      wireframe: false,
    });
    materials.push(gripMaterial);

    materialsRef.current = materials;

    // --- BLADE GEOMETRY ---
    // Upper Main Blade
    const bladeGeo = new THREE.BoxGeometry(0.32, 3.8, 0.05);
    geometries.push(bladeGeo);
    const bladeMesh = new THREE.Mesh(bladeGeo, bladeMaterial);
    bladeMesh.position.y = 1.4;
    swordGroup.add(bladeMesh);

    // Blade Tip (Pyramid/Cone)
    const tipGeo = new THREE.ConeGeometry(0.24, 0.9, 4);
    geometries.push(tipGeo);
    const tipMesh = new THREE.Mesh(tipGeo, bladeMaterial);
    tipMesh.rotation.y = Math.PI / 4;
    tipMesh.position.y = 3.75;
    swordGroup.add(tipMesh);

    // Blood Fuller (Central Channel)
    const fullerGeo = new THREE.BoxGeometry(0.08, 3.2, 0.06);
    geometries.push(fullerGeo);
    const fullerMesh = new THREE.Mesh(fullerGeo, bloodGrooveMaterial);
    fullerMesh.position.y = 1.35;
    swordGroup.add(fullerMesh);

    // --- CROSSGUARD GEOMETRY (Winged Gargoyle Quillons) ---
    const guardCenterGeo = new THREE.BoxGeometry(0.7, 0.24, 0.3);
    geometries.push(guardCenterGeo);
    const guardCenterMesh = new THREE.Mesh(guardCenterGeo, hardwareMaterial);
    guardCenterMesh.position.y = -0.5;
    swordGroup.add(guardCenterMesh);

    // Left Wing Quillon
    const wingLGeo = new THREE.CylinderGeometry(0.06, 0.16, 1.4, 6);
    geometries.push(wingLGeo);
    const wingLMesh = new THREE.Mesh(wingLGeo, hardwareMaterial);
    wingLMesh.position.set(-0.85, -0.4, 0);
    wingLMesh.rotation.z = Math.PI / 2.8;
    swordGroup.add(wingLMesh);

    // Right Wing Quillon
    const wingRGeo = new THREE.CylinderGeometry(0.06, 0.16, 1.4, 6);
    geometries.push(wingRGeo);
    const wingRMesh = new THREE.Mesh(wingRGeo, hardwareMaterial);
    wingRMesh.position.set(0.85, -0.4, 0);
    wingRMesh.rotation.z = -Math.PI / 2.8;
    swordGroup.add(wingRMesh);

    // --- GRIP & POMMEL ---
    const gripGeo = new THREE.CylinderGeometry(0.1, 0.12, 1.2, 12);
    geometries.push(gripGeo);
    const gripMesh = new THREE.Mesh(gripGeo, gripMaterial);
    gripMesh.position.y = -1.2;
    swordGroup.add(gripMesh);

    // Silver Grip Wire Ring Bands
    for (let r = 0; r < 4; r++) {
      const ringGeo = new THREE.TorusGeometry(0.12, 0.015, 6, 16);
      geometries.push(ringGeo);
      const ringMesh = new THREE.Mesh(ringGeo, hardwareMaterial);
      ringMesh.rotation.x = Math.PI / 2;
      ringMesh.position.y = -0.8 - r * 0.24;
      swordGroup.add(ringMesh);
    }

    // Heavy Obsidian Pommel Jewel
    const pommelGeo = new THREE.DodecahedronGeometry(0.26, 0);
    geometries.push(pommelGeo);
    const pommelMesh = new THREE.Mesh(pommelGeo, hardwareMaterial);
    pommelMesh.position.y = -1.95;
    swordGroup.add(pommelMesh);

    // --- 3D ORBITAL BLOOD EMBERS & RUNE PARTICLES ---
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    for (let p = 0; p < particleCount; p++) {
      const theta = Math.random() * Math.PI * 2;
      const radius = 1.2 + Math.random() * 2.2;
      particlePos[p * 3] = Math.cos(theta) * radius;
      particlePos[p * 3 + 1] = (Math.random() - 0.5) * 6;
      particlePos[p * 3 + 2] = Math.sin(theta) * radius;
      particleSpeeds[p] = 0.01 + Math.random() * 0.02;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    geometries.push(particleGeo);

    const particleMat = new THREE.PointsMaterial({
      color: 0xdc2626,
      size: 0.055,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    materials.push(particleMat);

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Count vertices
    let totalVerts = 0;
    geometries.forEach((g) => {
      totalVerts += g.attributes.position.count;
    });
    setPolyCount(totalVerts);

    // 5. Interactive Mouse Orbit & Physics
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let targetRotationY = 0;
    let targetRotationX = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      // Update light tracking
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      bloodPointLight.position.x = normX * 3;
      bloodPointLight.position.y = normY * 3;

      if (!isDragging) return;

      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      targetRotationY += deltaX * 0.012;
      targetRotationX += deltaY * 0.012;
      targetRotationX = Math.max(-Math.PI / 4, Math.min(Math.PI / 4, targetRotationX));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      if (e.cancelable) e.preventDefault(); // Prevent accidental scroll when dragging 3D object

      const touch = e.touches[0];
      const deltaX = touch.clientX - previousMousePosition.x;
      const deltaY = touch.clientY - previousMousePosition.y;

      targetRotationY += deltaX * 0.014;
      targetRotationX += deltaY * 0.014;
      targetRotationX = Math.max(-Math.PI / 4, Math.min(Math.PI / 4, targetRotationX));

      previousMousePosition = { x: touch.clientX, y: touch.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.style.touchAction = 'none'; // Essential for touch drag in WebGL
    domElement.addEventListener('mousedown', onMouseDown);
    domElement.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('touchcancel', onTouchEnd);

    // Responsive Resize Listener
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 480;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // 6. Animation Loop with Lerp & Particle Swirl
    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Auto-rotation when not dragging
      if (autoRotate && !isDragging) {
        targetRotationY += 0.008;
      }

      // Smooth damping (lerp) toward target
      swordGroup.rotation.y += (targetRotationY - swordGroup.rotation.y) * 0.08;
      swordGroup.rotation.x += (targetRotationX - swordGroup.rotation.x) * 0.08;

      // Subtle levitation breath
      swordGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.12;

      // Swirl particles in 3D
      particles.rotation.y = -elapsedTime * 0.15;
      const positions = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        let py = positions[i * 3 + 1];
        py += particleSpeeds[i];
        if (py > 3.5) py = -3.5;
        positions[i * 3 + 1] = py;
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Update technical coordinates
      setCoords({
        x: swordGroup.rotation.x.toFixed(2),
        y: swordGroup.rotation.y.toFixed(2),
        z: swordGroup.position.y.toFixed(2),
      });

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // 7. Cleanup per threejs-creative-3d skill
    return () => {
      cancelAnimationFrame(animationId);
      domElement.removeEventListener('mousedown', onMouseDown);
      domElement.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('touchcancel', onTouchEnd);
      window.removeEventListener('resize', onResize);

      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());
      renderer.dispose();

      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
    };
  }, [autoRotate]);

  // Wireframe toggle handler
  const handleToggleWireframe = () => {
    sfx.playClick();
    const newWireframe = !wireframe;
    setWireframe(newWireframe);
    materialsRef.current.forEach((mat) => {
      if ('wireframe' in mat) {
        mat.wireframe = newWireframe;
      }
    });
  };

  const handleToggleAutoRotate = () => {
    sfx.playClick();
    setAutoRotate((prev) => !prev);
  };

  return (
    <div className="w-full border-b border-hairline bg-obsidian-950 relative overflow-hidden font-mono">
      {/* 3D Viewport Title Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/5">
        <div>
          <div className="flex items-center space-x-2">
            <span className="font-gothic text-2xl text-blood-500">Das Schwert</span>
            <span className="text-xs text-neutral-400">// REAL-TIME 3D ARTIFACT VAULT</span>
          </div>
          <p className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">
            INTERACTIVE THREE.JS RELIC // DRAG CURSOR TO ROTATE 360° // DYNAMIC SPECULAR SHIFT
          </p>
        </div>

        {/* 3D View Controls */}
        <div className="flex items-center space-x-2 text-[10px]">
          <button
            onClick={handleToggleWireframe}
            className={`px-2.5 py-1 border transition-all flex items-center space-x-1.5 ${
              wireframe
                ? 'bg-blood-900 border-blood-500 text-white'
                : 'bg-obsidian-900 border-white/10 text-neutral-400 hover:text-white'
            }`}
          >
            <Box className="w-3 h-3" />
            <span>{wireframe ? 'SOLID MODE' : 'WIREFRAME'}</span>
          </button>

          <button
            onClick={handleToggleAutoRotate}
            className={`px-2.5 py-1 border transition-all flex items-center space-x-1.5 ${
              autoRotate
                ? 'bg-steel-200 text-obsidian-950 font-bold border-white'
                : 'bg-obsidian-900 border-white/10 text-neutral-400 hover:text-white'
            }`}
          >
            <Rotate3d className="w-3 h-3" />
            <span>ORBIT: {autoRotate ? 'AUTO' : 'MANUAL'}</span>
          </button>
        </div>
      </div>

      {/* 3D Canvas Container */}
      <div className="relative w-full h-[380px] sm:h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none">
        {/* Canvas DOM Target */}
        <div ref={mountRef} className="w-full h-full" />

        {/* Corner HUD Overlay */}
        <div className="absolute top-4 left-4 pointer-events-none text-[10px] space-y-1 text-neutral-500 bg-obsidian-950/80 p-2.5 border border-white/5 backdrop-blur-xs">
          <div className="text-white font-bold flex items-center">
            <Compass className="w-3 h-3 mr-1 text-blood-500" />
            3D VECTOR TELEMETRY
          </div>
          <div>ROTATION_X: {coords.x} rad</div>
          <div>ROTATION_Y: {coords.y} rad</div>
          <div>ELEVATION_Z: {coords.z} units</div>
          <div className="text-blood-400 pt-1 border-t border-white/5">
            VERTS: {polyCount} POLYGONS
          </div>
        </div>

        <div className="absolute bottom-4 right-4 pointer-events-none text-[10px] text-right space-y-1 text-neutral-500 bg-obsidian-950/80 p-2.5 border border-white/5 backdrop-blur-xs">
          <div className="text-neutral-300 font-bold flex items-center justify-end">
            <Shield className="w-3 h-3 mr-1 text-neutral-400" />
            MATERIAL COMPOSITION
          </div>
          <div>BLADE: OBSIDIAN STEEL (MET: 0.95)</div>
          <div>CHANNEL: ARTERIAL BLOOD CORE</div>
          <div>QUiLLONS: SWEPT WING ALLOY</div>
          <div className="text-emerald-400 pt-1 border-t border-white/5">
            RENDER: WEBGL2 / 60 FPS
          </div>
        </div>

        {/* Floating Instruction */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none text-[10px] text-neutral-500 bg-black/60 px-3 py-1 border border-white/10 uppercase tracking-widest hidden sm:block">
          HOLD & DRAG TO ROTATE ARTIFACT // MOVE MOUSE TO CONTROL BLOOD LIGHT
        </div>
      </div>
    </div>
  );
};
