'use client'
import { useEffect, useRef } from "react";
import { vertexShader } from "./shaders/vertex";
import { fragmentShader } from "./shaders/fragment";
import * as THREE from "three";

export default function JustGradient() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const geometry = new THREE.PlaneGeometry(2, 2, 256, 256);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
      },
      vertexShader,
      fragmentShader,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const updateSize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      renderer.setSize(width, height, false);
    };

    updateSize();

    const start = Date.now();
    const animate = () => {
      requestAnimationFrame(animate);
      material.uniforms.time.value = (Date.now() - start) * 0.001;
      renderer.render(scene, camera);
    };
    animate();

    // ResizeObserver для отслеживания изменений размера canvas
    const resizeObserver = new ResizeObserver(() => {
      updateSize();
    });
    resizeObserver.observe(canvas);

    // Fallback на window resize
    const handleResize = () => {
      updateSize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="block w-full h-full rounded-[15px]"
    />
  );
}
