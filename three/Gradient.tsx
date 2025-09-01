'use client'

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Gradient() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const geometry = new THREE.PlaneGeometry(2, 2, 256, 256);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        varying float vNoise;
        uniform float time;

        float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }

        float noise(vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);

          float a = random(i);
          float b = random(i + vec2(1.0, 0.0));
          float c = random(i + vec2(0.0, 1.0));
          float d = random(i + vec2(1.0, 1.0));

          vec2 u = f*f*(3.0-2.0*f);

          return mix(a, b, u.x) +
                 (c - a)* u.y * (1.0 - u.x) +
                 (d - b) * u.x * u.y;
        }

        void main() {
          vUv = uv;
          float n1 = noise(uv * 2.0 + time * 0.1);
          float n2 = noise(uv * 4.0 - time * 0.2);
          float n = n1 * 0.9 + n2 * 1.0;

          vNoise = n;

          vec3 pos = position + vec3(0.0, 0.0, n * 0.2);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,

      fragmentShader: `
             varying vec2 vUv;
             varying float vNoise;

             void main() {
               vec3 colorBlue = vec3(0.36, 0.57, 1.0);
               // vec3 colorBlue = vec3(0.172, 0.267, 0.4);
               vec3 colorWhite = vec3(0.980, 0.965, 0.929);

               float t = pow(vNoise, 0.1);
               vec3 color = mix(colorBlue, colorWhite, t);

               gl_FragColor = vec4(color,1.0);
             }
           `,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const start = Date.now();
    const animate = () => {
      requestAnimationFrame(animate);
      material.uniforms.time.value = (Date.now() - start) * 0.001;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10" />
  );
}
