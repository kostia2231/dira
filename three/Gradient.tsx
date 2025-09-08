'use client'

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useRef, useState } from "react";
import { vertexShader } from "./shaders/vertex";
import { fragmentShader } from "./shaders/fragment";
import * as THREE from "three";
import Header from "../components/Header";
import TextAnimation from "../components/TextAnimation";
import DownArrow from "../components/icons/ArrowUp"
// import { useTranslations } from "next-intl";
gsap.registerPlugin(ScrollToPlugin);

export default function Gradient() {
  // const tBtn = useTranslations("buttons");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const slogans = ["zur neuen Anstellung", "zur Weiterbildung", "zum passenden Job"] as const;
  const [index, setIndex] = useState(0);

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
      vertexShader,
      fragmentShader,
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


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % slogans.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slogans.length]);

  return (
    <div>
      <Header />

      <div className="flex flex-col gap-5 absolute h-full w-fit z-11 left-10 text-[rgba(255,250,240,1)] text-[75px] leading-[80px]">
        <div className="flex flex-col justify-end h-full">
          <span>
            Ihr Weg
          </span>
          <TextAnimation key={index}>
            <span>{slogans[index]}</span>
          </TextAnimation>
        </div>

        <div className="h-full mb-auto text-[24px] leading-[32px] w-fit bottom-50 z-11 text-[rgba(255,250,240,1)] font-semibold cursor-pointer"
        >
          <p className="lineunder-light absolute opacity-70 hover:opacity-100 pb-[6px]">
            Kostenlose Erstberatung
          </p>

        </div>
      </div>

      <div
        className="w-fit absolute bottom-10 z-11 left-10 text-[rgba(255,250,240,1)] font-semibold opacity-70 cursor-default">
        © 2005
      </div>
      <div
        className="items-center gap-2.5 flex w-fit absolute bottom-10 z-11 left-1/2 -translate-x-1/2 text-[rgba(255,250,240,1)] font-semibold opacity-70 cursor-pointer hover:opacity-100"
        onClick={() => {
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: window.innerHeight },
            ease: "power2.inOut",
          });
        }}
      >
        <p>
          Weiter scrollen
        </p>
        <div className="rotate-135">
          <DownArrow />
        </div>
      </div>
      <div className="relative p-5 h-screen w-full">
        <canvas
          ref={canvasRef}
          className="block w-full h-full rounded-[15px]"
        />
        {/*<div className="flex w-full absolute top-10 left-10 pointer-events-none z-10"></div>*/}
      </div>
    </div>
  );
}
