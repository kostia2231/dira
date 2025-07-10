'use client';

import { ParallaxProvider } from 'react-scroll-parallax';

export function Providers({ children }: { children: React.ReactNode }) {
  return <ParallaxProvider scrollAxis="vertical">
    {children}
  </ParallaxProvider>;
}
