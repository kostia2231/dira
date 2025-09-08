'use client'

import Card from "./Card"
import { useRef, useState } from "react"

export default function CardCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
  }

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !carouselRef.current) return
    e.preventDefault()
    const x = e.pageX - carouselRef.current.offsetLeft
    const walk = (x - startX)
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  const onMouseLeave = () => setIsDragging(false)
  const onMouseUp = () => setIsDragging(false)

  const jobs = [
    { id: 1, title: "IT & Webdesign", description: "ab ca. pro Stunde", price: "18" },
    { id: 2, title: "Büro & Verwaltung", description: "ab ca. pro Stunde", price: "16" },
    { id: 3, title: "Lohn- und Finanzbuchhaltung", description: "ab ca. pro Stunde", price: "15" },
    { id: 4, title: "Verkauf & Dienstleistungen", description: "ab ca. pro Stunde", price: "15" },
    { id: 5, title: "Handwerk & Technik", description: "ab ca. pro Stunde", price: "15" },
    { id: 6, title: "Lager & Logistik", description: "ab ca. pro Stunde", price: "14" },
    { id: 7, title: "Pflege & Gesundheit", description: "ab ca. pro Stunde", price: "16" },
    { id: 8, title: "Gastronomie & Küche", description: "ab ca. pro Stunde", price: "14" },
  ] as const

  const sortedJobs = [...jobs].sort(
    (b, a) => parseInt(b.price) - parseInt(a.price)
  )
  return (
    <>
      <div
        ref={carouselRef}
        className="flex gap-10 overflow-x-auto scrollbar-hide p-10 cursor-grab"
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {sortedJobs.map((j) => (
          <Card key={j.id}>
            <div className="flex flex-col h-full">
              <div className="flex flex-col">
                <div className="opacity-50">{j.description}</div>
                <div className="text-[72px] leading-[80px]">€{j.price}</div>
              </div>
              <div className="grow"></div>
              <div className="text-[24px] leading-[32px]">{j.title}</div>
            </div>
          </Card>
        ))}
      </div>
    </>
  )
}
