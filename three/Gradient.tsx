'use client'

import * as THREE from "three"
import { vertexShader } from "./shaders/vertex"
import { fragmentShader } from "./shaders/fragment"
import { useEffect, useRef } from "react"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
gsap.registerPlugin(ScrollToPlugin)
import gsap from "gsap"
import Header from "../components/Header"
import GradientText from "../components/GradientText"

export default function Gradient() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
    camera.position.z = 1

    const geometry = new THREE.PlaneGeometry(2, 2, 256, 256)
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
      },
      vertexShader,
      fragmentShader,
      side: THREE.DoubleSide,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const start = Date.now()
    const animate = () => {
      requestAnimationFrame(animate)
      material.uniforms.time.value = (Date.now() - start) * 0.001
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      window.removeEventListener("resize", handleResize)
    }
  }, [])


  return (
    <div>
      <Header />
      <GradientText />
      <div className="relative p-5 h-screen w-full">
        <canvas
          ref={canvasRef}
          className="block w-full h-full rounded-[15px]"
        />
      </div>
    </div>
  )
}
