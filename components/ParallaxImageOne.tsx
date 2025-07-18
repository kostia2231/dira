'use client'

import { ParallaxBanner } from 'react-scroll-parallax'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

type ParallaxImageOneProps = {
  imageUrl: string
  speed?: number
}

export default function ParallaxImageOne({ imageUrl, speed = -20 }: ParallaxImageOneProps) {
  const [loaded, setLoaded] = useState(false)
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (loaded && bannerRef.current) {
      gsap.fromTo(
        bannerRef.current,
        { autoAlpha: 0, scale: 1.02 },
        { autoAlpha: 1, scale: 1, duration: 2, ease: 'power4.out' }
      )
    }
  }, [loaded])

  return (
    <div className="relative w-full h-[70vh] max-[600px]:h-[300px]  overflow-hidden">
      <div ref={bannerRef} className="w-full h-full opacity-0">
        <ParallaxBanner
          layers={[
            {
              image: imageUrl,
              speed,
            },
          ]}
          className="w-full h-full will-change-transform"
        />
      </div>

      <div className="hidden">
        <Image
          src={imageUrl}
          alt="preload"
          width={1}
          height={1}
          priority
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  )
}
