'use client';

import { ParallaxProvider } from 'react-scroll-parallax';
// import { ReactLenis } from 'lenis/react'


export function Providers({ children }: { children: React.ReactNode }) {
  // const lenis = useLenis((lenis) => {
  //   console.log(lenis)
  // })
  // console.log(lenis)
  return <>
    {/*<ReactLenis root />*/}
    <ParallaxProvider scrollAxis="vertical">
      {children}
    </ParallaxProvider>
  </>
}
