'use client'
import { useEffect, useRef } from "react"
import { vertexShader } from "./shaders/vertex"
import { fragmentShader } from "./shaders/fragment"
import * as THREE from "three"

export default function JustGradient() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const requestRef = useRef<number | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
    camera.position.z = 1

    const geometry = new THREE.PlaneGeometry(2, 2, 128, 128)
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(canvas.clientWidth, canvas.clientHeight) },
      },
      vertexShader,
      fragmentShader,
      side: THREE.DoubleSide,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const updateSize = () => {
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      renderer.setSize(width, height, false)
      material.uniforms.resolution.value.set(width, height)
    }

    updateSize()

    const start = Date.now()
    const animate = () => {
      material.uniforms.time.value = (Date.now() - start) * 0.001
      renderer.render(scene, camera)
      requestRef.current = requestAnimationFrame(animate)
    }
    animate()

    const resizeObserver = new ResizeObserver(updateSize)
    resizeObserver.observe(canvas)

    const handleResize = () => updateSize()
    window.addEventListener("resize", handleResize)

    return () => {
      if (requestRef.current !== null) cancelAnimationFrame(requestRef.current)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      resizeObserver.disconnect()
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="block w-full h-full rounded-[15px]"
    />
  )
}
