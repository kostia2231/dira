'use client';
import { ParallaxBanner } from 'react-scroll-parallax';

type ParallaxImageOneProps = {
  imageUrl: string;
  speed?: number;
};

export default function ParallaxImageOne({
  imageUrl,
  speed,
}: ParallaxImageOneProps) {
  return (
    <ParallaxBanner
      layers={[
        {
          image: imageUrl,
          speed: speed,
        },
      ]}
      className={`w-full h-[70vh] will-change-transform`}
    />
  );
}
