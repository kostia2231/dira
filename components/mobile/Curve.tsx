import React from 'react'
import { motion, Variants } from 'framer-motion'

type CurveProps = {
  height: number | null
}

export default function Curve({ height }: CurveProps) {
  if (height === null) return null

  const controlX = 50
  const controlY = height / 3

  const initialPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q${-controlX} ${controlY} 100 0`
  const targetPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q${controlX} ${controlY} 100 0`


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
    <svg
      className={"svgCurve"}
      viewBox="0 0 200 400"
      width="200"
      height={height}
      preserveAspectRatio="none"
    >
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
        fill="#FFFAF0"
      ></motion.path>
    </svg>
  )
}
