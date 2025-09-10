'use client'

import { useState, useEffect } from "react"
import TextAnimation from "./TextAnimation"
import { useTranslations } from "next-intl"

export default function Slogans() {
  const t = useTranslations("welcome")
  const slogan = useTranslations("slogan")
  const sloganKeys = ["first", "second", "third"] as const
  const [index, setIndex] = useState(0)


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % sloganKeys.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [sloganKeys.length])

  return (
    <>
      <div className="flex flex-col justify-end h-full">
        <span>
          {t("path")}
        </span>
        <TextAnimation key={index}>
          <span>{slogan(sloganKeys[index])}</span>
        </TextAnimation>
      </div>
    </>
  )
}
