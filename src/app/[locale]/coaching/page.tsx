'use client'

import ButtonSecond from "../../../../components/ButtonSecond"
import Footer from "../../../../components/Footer"
import TextAnimation from "../../../../components/TextAnimation"
import { useTranslations } from "next-intl"

export default function CoachingPage() {
  const t = useTranslations("coachingPage")
  const btn = useTranslations("buttons")

  return (
    <div className="">
      <section className="text-[rgba(44,67,102,1)] max-[600px]:mt-[73px]">
        <div>

          <div className="border-b p-5">
            <TextAnimation>
              <p className="text-[80px] leading-[80px] max-[600px]:text-[28px] max-[600]:leading-[36px]">{t("headline")}</p>
            </TextAnimation>
          </div>


          <div className="grid grid-cols-2 text-2xl max-[600px]:text-[16px] max-[600px]:leading-[24px] max-[600px]:grid-cols-1">

            <div className="p-5">
              <TextAnimation>
                <p className="underline underline-offset-10 decoration-2 important-word">{t("section1Title")}</p>
              </TextAnimation>
            </div>

            <div className="border-l p-5">
              <TextAnimation>
                <p className=" text-gray-500" dangerouslySetInnerHTML={{ __html: t.raw("section1Text") }}>
                </p>
              </TextAnimation>
              <TextAnimation>
                <p className=" text-gray-500" dangerouslySetInnerHTML={{ __html: t.raw("section1Text1") }}>
                </p>
              </TextAnimation>
            </div>

          </div>

          <div className="grid grid-cols-2 text-2xl border-t max-[600px]:grid-cols-1 max-[600px]:text-[16px] max-[600px]:leading-[24px]">

            <div className="p-5">
              <TextAnimation>
                <p className="underline underline-offset-10 decoration-2 important-word">{t("section2Title")}</p>
              </TextAnimation>
            </div>

            <div className="border-l p-5">
              <TextAnimation>
                <p className="text-gray-500" dangerouslySetInnerHTML={{ __html: t.raw("section2Text") }}>
                </p>
              </TextAnimation>
            </div>

          </div>

          <div className="grid grid-cols-2 text-2xl border-t max-[600px]:grid-cols-1 max-[600px]:text-[16px] max-[600px]:leading-[24px]">

            <div className="p-5">
              <TextAnimation>
                <p className="underline underline-offset-10 decoration-2 important-word">{t("section3Title")}</p>
              </TextAnimation>
            </div>


            <div className="border-l  text-gray-500">
              <div className="p-5">
                <TextAnimation>
                  <p>
                    {t("section3Intro")}
                  </p>
                </TextAnimation>
              </div>
              <div className="p-5 border-t">
                <TextAnimation>
                  <p dangerouslySetInnerHTML={{ __html: t.raw("advice") }}>
                  </p>
                </TextAnimation>
              </div>

              <div className="p-5 border-t">
                <TextAnimation>
                  <p dangerouslySetInnerHTML={{ __html: t.raw("education") }}>
                  </p>
                </TextAnimation>
              </div>


              <div className="p-5 border-t">
                <TextAnimation>
                  <p dangerouslySetInnerHTML={{ __html: t.raw("application") }}>
                  </p>
                </TextAnimation>
              </div>

              <div className="p-5 border-t">
                <TextAnimation>
                  <p dangerouslySetInnerHTML={{ __html: t.raw("internship") }}>
                  </p>
                </TextAnimation>
              </div>

              <div className="p-5 border-t">
                <TextAnimation>
                  <p dangerouslySetInnerHTML={{ __html: t.raw("support") }}>
                  </p>
                </TextAnimation>
              </div>

              <div className="p-5 border-t">
                <TextAnimation>
                  <p dangerouslySetInnerHTML={{ __html: t.raw("founders") }}>
                  </p>
                </TextAnimation>
              </div>

              <div className="p-5 border-t">
                <TextAnimation>
                  <p dangerouslySetInnerHTML={{ __html: t.raw("stabilization") }}>
                  </p>
                </TextAnimation>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 text-2xl border-t border-b max-[600px]:text-[16px] max-[600px]:leading-[24px] max-[600px]:grid-cols-1">

            <div className="p-5">
              <TextAnimation>
                <p className="underline underline-offset-10 decoration-2 important-word">{t("section4Title")}</p>
              </TextAnimation>
            </div>

            <div className="border-l p-5">
              <TextAnimation>
                <p className="text-gray-500" dangerouslySetInnerHTML={{ __html: t.raw("section4Text") }}>
                </p>
              </TextAnimation>
            </div>
          </div>

          <div className="border-b p-5">
            <TextAnimation>
              <p className="text-[75px] leading-[80px] max-[600px]:text-[28px] max-[600]:leading-[36px]">{t("quote")}</p>
            </TextAnimation>
          </div>

          <div className="grid grid-cols-2 text-2xl max-[600px]:grid-cols-1 max-[600px]:text-[16px] max-[600px]:leading-[24px]">
            <div></div>
            <div className="border-l">
              <div className="p-5">
                <TextAnimation>
                  <p className="text-gray-500" dangerouslySetInnerHTML={{ __html: t.raw("finalMessage") }}>
                  </p>
                </TextAnimation>
              </div>

              <div className="p-5 pb-5">
                <ButtonSecond btnText={`${btn("titleAdvise")}`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
