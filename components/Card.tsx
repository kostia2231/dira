"use client";

import { ReactNode, useRef } from "react";
type CardProps = {
  children?: ReactNode;
};

export default function Card({ children }: CardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    const X = (e.clientX - rect.left) / w;
    const Y = (e.clientY - rect.top) / h;

    const rX = -(X - 0.5) * 15;
    const rY = (Y - 0.5) * 15;

    el.style.setProperty("--r-x", `${rX}deg`);
    el.style.setProperty("--r-y", `${rY}deg`);
    el.style.setProperty("--x", `${100 * X}%`);
    el.style.setProperty("--y", `${100 * Y}%`);
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--r-x", `0deg`);
    el.style.setProperty("--r-y", `0deg`);
    el.style.setProperty("--x", `50%`);
    el.style.setProperty("--y", `50%`);
  };

  return (
    <div
      ref={cardRef}
      className="card relative w-[350px] h-[400px] shrink-0"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card__wrapper">
        <div className="card__3d">
          <div className="h-full card__layer1 p-10 text-[rgba(255,250,240,1)]">{children}</div>
        </div>
      </div>
    </div>
  );
}
