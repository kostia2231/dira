import React from 'react'
import { motion, Variants } from 'framer-motion';

type CurveProps = {
  height: number | null;
};

export default function Curve({ height }: CurveProps) {
  if (height === null) return null;

  const controlX = 50;
  const controlY = height / 3;

  const initialPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q${-controlX} ${controlY} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q${controlX} ${controlY} 100 0`;


  const curve: Variants = {
    initial: {
      d: initialPath
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
  }

  return (
    <svg className={"svgCurve"}>
      <motion.path variants={curve} initial="initial" animate="enter" exit="exit" filter="url(#blurFilter)"
      ></motion.path>
    </svg>
  )
}
