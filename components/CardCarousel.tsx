'use client'

import Card from "./Card"
import { useRef, useState, useEffect } from "react"
import { useTranslations } from "next-intl"

export default function CardCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const progressBarRef = useRef<HTMLDivElement | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const t = useTranslations("card")

  const jobs = [
    { id: 1, key: "it", price: "18" },
    { id: 2, key: "office", price: "16" },
    { id: 3, key: "finance", price: "15" },
    { id: 4, key: "sales", price: "15" },
    { id: 5, key: "craft", price: "15" },
    { id: 6, key: "logistics", price: "14" },
    { id: 7, key: "health", price: "16" },
    { id: 8, key: "kitchen", price: "14" },
  ] as const

  const sortedJobs = [...jobs].sort((b, a) => parseInt(b.price) - parseInt(a.price))

  const updateProgressBar = (scrollLeftValue?: number) => {
    const el = carouselRef.current
    const progressBar = progressBarRef.current
    if (!el || !progressBar) return

    const currentScrollLeft = scrollLeftValue !== undefined ? scrollLeftValue : el.scrollLeft
    const maxScroll = el.scrollWidth - el.clientWidth
    const progress = maxScroll > 0 ? (currentScrollLeft / maxScroll) * 100 : 0

    progressBar.style.width = `${Math.max(0, Math.min(100, progress))}%`
  }

  const isMobile = typeof window !== "undefined" && /Mobi|Android/i.test(navigator.userAgent)

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !carouselRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
    document.body.style.userSelect = "none"
  }

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !isDragging || !carouselRef.current) return
    e.preventDefault()

    const x = e.pageX - carouselRef.current.offsetLeft
    const walk = x - startX
    const el = carouselRef.current
    const newScrollLeft = scrollLeft - walk

    el.scrollLeft = newScrollLeft
    updateProgressBar(newScrollLeft)
  }

  const onMouseUpOrLeave = () => {
    setIsDragging(false)
    document.body.style.userSelect = ""
  }

  const handleScroll = () => {
    if (!carouselRef.current) return
    requestAnimationFrame(() => {
      updateProgressBar()
    })
  }

  useEffect(() => {
    updateProgressBar()
  }, [])

  return (
    <div className="grid">
      <div
        ref={carouselRef}
        className="flex gap-10 max-[600px]:gap-5 overflow-x-auto scrollbar-hide p-10 pb-2.5 cursor-grab max-[600px]:px-5"
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseUpOrLeave}
        onMouseUp={onMouseUpOrLeave}
        onMouseMove={onMouseMove}
        onScroll={handleScroll}
      >
        {sortedJobs.map((j) => (
          <Card key={j.id}>
            <div className="flex flex-col h-full">
              <div className="flex flex-col">
                <div className="opacity-50">{t(`jobs.${j.key}.description`)}</div>
                <div className="max-[600px]:text-[58px] max-[600px]:leading-[66px] text-[75px] leading-[80px]">
                  €{j.price}
                </div>
              </div>
              <div className="grow"></div>
              <div className="text-[24px] leading-[32px] max-[600px]:text-[16px] max-[600px]:leading-[24px] font-semibold">
                {t(`jobs.${j.key}.title`)}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="p-5 px-10 pt-3 max-[600px]:px-5">
        <div className="bottom-2.5 w-full h-3 bg-[rgba(255,250,240,0.3)] rounded-full overflow-hidden backdrop-blur-2xl brightness-1.1">
          <div
            ref={progressBarRef}
            className="h-3 bg-[rgba(255,250,240,1)]"
            style={{ width: "0%" }}
          />
        </div>
      </div>
    </div>
  )
}
