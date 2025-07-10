'use client';

import { ParallaxProvider } from 'react-scroll-parallax';
import { ReactLenis, useLenis } from 'lenis/react'

export function Providers({ children }: { children: React.ReactNode }) {
  console.log(ReactLenis, useLenis)
  return <ParallaxProvider scrollAxis="vertical">
    {children}
  </ParallaxProvider>;
}
