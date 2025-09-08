'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Revealer() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setShow(false), 600)
    return () => clearTimeout(timeout)
  }, [])

  if (!show) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="origin-bottom fixed bottom-0 left-0 w-full h-full bg-[#FFFAF0] z-999"
    />
  )
}
