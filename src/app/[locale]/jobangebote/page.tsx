'use client'

import { useTranslations } from "next-intl"
import { useRef, useState } from "react";
import ButtonSecond from "../../../../components/ButtonSecond"
import Card from "../../../../components/Card"
import Footer from "../../../../components/Footer"
import TextAnimation from "../../../../components/TextAnimation"
import Header from "../../../../components/HeaderSecond"
import JustGradient from "../../../../three/JustGradient"

export default function Jobangebote() {

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX);
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);

  const t = useTranslations("vacancies")
  const btn = useTranslations("buttons")

  const jobs = [
    { id: 1, title: "IT & Webdesign", description: "ab ca. pro Stunde", price: "18" },
    { id: 2, title: "Büro & Verwaltung", description: "ab ca. pro Stunde", price: "16" },
    { id: 3, title: "Lohn- und Finanzbuchhaltung", description: "ab ca. pro Stunde", price: "15" },
    { id: 4, title: "Verkauf & Dienstleistungen", description: "ab ca. pro Stunde", price: "15" },
    { id: 5, title: "Handwerk & Technik", description: "ab ca. pro Stunde", price: "15" },
    { id: 6, title: "Lager & Logistik", description: "ab ca. pro Stunde", price: "14" },
    { id: 7, title: "Pflege & Gesundheit", description: "ab ca. pro Stunde", price: "16" },
    { id: 8, title: "Gastronomie & Küche", description: "ab ca. pro Stunde", price: "14" },
  ] as const;

  const sortedJobs = [...jobs].sort(
    (b, a) => parseInt(b.price) - parseInt(a.price)
  );

  return (
    <>
      <Header />
      <section className="text-[rgba(44,67,102,1)] max-[600px]:mt-[73px]">
        <div className="p-5 relative w-full">
          <div className="relative flex flex-col">

            <div className="absolute inset-0 -z-10">
              <JustGradient />
            </div>

            <div className="text-[rgba(255,250,240,1)] text-[24px] leading-[32px] p-5 pb-0">
              Wir vermitteln regelmäßig attraktive Stellen <br />in folgenden Bereichen:
            </div>

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
                      <div className="cursor-default opacity-70">{j.description}</div>
                      <div className="text-[72px] leading-[80px] cursor-default">€{j.price}</div>
                    </div>
                    <div className="grow"></div>
                    <div className="text-[24px] leading-[32px] cursor-default">{j.title}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="border-y p-5">
          <TextAnimation>
            <p className="text-[75px] leading-[80px] max-[600px]:text-[28px] max-[600]:leading-[36px]">{t("title")}</p>
          </TextAnimation>
        </div>

        <div>
          <div className="grid grid-cols-2 text-2xl max-[600px]:grid-cols-1 max-[600px]:text-[16px] max-[600px]:leading-[24px]">
            <div></div>
            <div className="border-l text-gray-500">
              <div className="p-5">
                <TextAnimation>
                  <p>{t("sectionText1")} <br /><span className="important-word">{t("sectionText2")}</span></p>
                </TextAnimation>
              </div>

              <div className="p-5 border-t">
                <TextAnimation>
                  <p className="text-[16px] leading-[24px]" dangerouslySetInnerHTML={{ __html: t.raw("sectionText3") }}></p>
                </TextAnimation>
              </div>

              <div className="p-5">
                <ButtonSecond btnText={`${btn("titleAdvise")}`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
