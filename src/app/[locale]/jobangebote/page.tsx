'use client'

import ButtonSecond from "../../../../components/ButtonSecond"
import Card from "../../../../components/Card"
import Footer from "../../../../components/Footer"
import TextAnimation from "../../../../components/TextAnimation"
import { useTranslations } from "next-intl"

export default function Jobangebote() {

  const t = useTranslations("vacancies")
  const btn = useTranslations("buttons")

  return (
    <>
      <section className="text-[rgba(44,67,102,1)] max-[600px]:mt-[73px]">

        <div className="flex justify-center items-center">
          <div className="grid-cols-3 grid p-10 border-b gap-5 max-[600px]:grid-cols-1">
            <Card>Bäckereiverkäufer/in</Card >
            <Card />
            <Card />
          </div>
        </div>


        <div>

          <div className="border-b p-5">
            <TextAnimation>
              <p className="text-[75px] leading-[80px] max-[600px]:text-[28px] max-[600]:leading-[36px]">{t("title")}</p>
            </TextAnimation>
          </div>


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
          {/* <div className="grid grid-cols-2 text-2xl border-t">
            <div>
              <p className="p-5 underline underline-offset-10 decoration-1">Für Arbeitgeber</p>
            </div>
            <div className="border-l text-gray-500">
              <p className="p-5">Sie suchen verlässliche Mitarbeiter:innen? Wir vermitteln qualifizierte Bewerber:innen schnell, passend und persönlich.</p>
            </div>
          </div> */}
          {/* <p className="text-[80px] leading-[80px]  p-5 border-t">Schau regelmäßig vorbei – dein neuer Job könnte schon morgen hier stehen.</p> */}

        </div>
      </section>

      <Footer />
    </>
  )
}
