// исправить тут дивы в параграфах
'use client'

import TextAnimation from "../../../../components/TextAnimation"
import ButtonSecond from "../../../../components/ButtonSecond"
import Footer from "../../../../components/Footer"
import { useTranslations } from "next-intl"

export default function UberUns() {

  const t = useTranslations("aboutUs")
  const btn = useTranslations("buttons")

  return (
    <>
      <section className="text-[rgba(44,67,102,1)] max-[600px]:mt-[73px]">
        <div className="grid">
          <div className="border-b p-5">
            <TextAnimation>
              <p className="text-[75px] leading-[80px] max-[600px]:text-[28px] max-[600]:leading-[36px]">{t("why")}</p>
            </TextAnimation>
          </div>
          <div className="grid grid-cols-2 max-[600px]:grid-cols-1 text-2xl max-[600px]:text-[16px] max-[600px]:leading-[24px]">
            <div className="p-5">
              <TextAnimation>
                <p className="relative w-fit lineunder important-word">{t("about")}</p>
              </TextAnimation>
            </div>

            <div className="border-l p-5">
              <TextAnimation>
                <p className="text-gray-500">
                  <span>
                    {t("about1")}
                  </span>

                  <br />
                  <span>
                    <br />
                    {t("about2")}
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: t.raw("about3") }}>
                  </span>
                </p>
              </TextAnimation>
            </div>


          </div>

          <div className="p-5 border-t">
            <TextAnimation>
              <p className="text-[75px] leading-[80px] max-[600px]:text-[28px] max-[600]:leading-[36px]">{t("how")}</p>
            </TextAnimation>
          </div>

          <div className="grid grid-cols-2 text-2xl border-t max-[600px]:grid-cols-1 max-[600px]:text-[16px] max-[600px]:leading-[24px]">
            <div className="p-5">
              <TextAnimation>
                <p className="relative w-fit lineunder important-word">{t("what")}</p>
              </TextAnimation>
            </div>

            <div className="border-l p-5">
              <TextAnimation>
                <p className="text-gray-500" dangerouslySetInnerHTML={{ __html: t.raw("what1") }}>
                </p>
              </TextAnimation>
            </div>
          </div>

          <div className="grid grid-cols-2 text-2xl border-t max-[600px]:grid-cols-1 max-[600px]:text-[16px] max-[600px]:leading-[24px]">
            <div className="p-5">
              <TextAnimation>
                <p className="relative w-fit lineunder important-word">{t("whatB")}</p>
              </TextAnimation>
            </div>

            <div className="border-l p-5">
              <TextAnimation>
                <p className="text-gray-500">
                  {t("whatB1")}
                  <br /> <span dangerouslySetInnerHTML={{ __html: t.raw("whatB2") }}>
                  </span>
                  <br /> <span dangerouslySetInnerHTML={{ __html: t.raw("whatB3") }}>
                  </span>
                </p>
              </TextAnimation>
            </div>

          </div>

          <div className="grid grid-cols-2 text-2xl border-t max-[600px]:grid-cols-1 max-[600px]:text-[16px] max-[600px]:leading-[24px]">
            <div className="p-5">
              <TextAnimation>
                <p className="relative w-fit lineunder important-word">{t("coaching")}</p>
              </TextAnimation>
            </div>

            <div className="border-l text-gray-500">
              <TextAnimation>
                <p className="p-5" dangerouslySetInnerHTML={{ __html: t.raw("coaching1") }}>
                </p>
              </TextAnimation>
              <div className="p-5 border-t">
                <TextAnimation>
                  <p dangerouslySetInnerHTML={{ __html: t.raw("coaching2") }}></p>
                </TextAnimation>
              </div>

              <div className="p-5 border-t">
                <TextAnimation>
                  <p dangerouslySetInnerHTML={{ __html: t.raw("coaching3") }}></p>
                </TextAnimation>
              </div>

              <div className="p-5 border-t">
                <TextAnimation>
                  <p dangerouslySetInnerHTML={{ __html: t.raw("coaching4") }}></p>
                </TextAnimation>
              </div>

              <div className="p-5 border-t">
                <TextAnimation>
                  <p>{t("coaching5")}</p>
                </TextAnimation>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 text-2xl border-t max-[600px]:grid-cols-1 max-[600px]:text-[16px] max-[600px]:leading-[24px]">
            <div className="p-5">
              <TextAnimation>
                <p className="relative w-fit lineunder important-word">{t("who")}</p>
              </TextAnimation>
            </div>
            <div className="border-l text-gray-500">
              <TextAnimation>
                <p className="p-5" dangerouslySetInnerHTML={{ __html: t.raw("who1") }}>
                </p>
              </TextAnimation>

            </div>
          </div>

          <div className="p-5 border-t">
            <TextAnimation>
              <p className="text-[75px] leading-[80px] max-[600px]:text-[28px] max-[600]:leading-[36px]">{t("pot")}</p>
            </TextAnimation>
          </div>

          <div className="grid grid-cols-2 text-2xl border-t max-[600px]:grid-cols-1 max-[600px]:text-[16px] max-[600px]:leading-[24px]">
            <div className="p-5">
              <TextAnimation>
                <p className="relative w-fit lineunder important-word">{t("potWhat")}</p>
              </TextAnimation>
            </div>

            <div className="border-l text-gray-500">
              <TextAnimation>
                <p className="p-5"><span className="important-word">{t("potWhat1")}</span></p>
              </TextAnimation>

              <div className="p-5 border-t">
                <TextAnimation>
                  <p><span className="important-word">{t("potWhat2")}</span></p>
                </TextAnimation>
              </div>

              <div className="p-5 border-t">
                <TextAnimation>
                  <p><span className="important-word">{t("potWhat3")}</span></p>
                </TextAnimation>
              </div>

              <div className="p-5 border-t">
                <TextAnimation>
                  <p dangerouslySetInnerHTML={{ __html: t.raw("potWhat4") }}>
                  </p>
                </TextAnimation>
              </div>

            </div>
          </div>

          <div className="p-5 border-t border-b">
            <TextAnimation>
              <p className="text-[75px] leading-[80px] max-[600px]:text-[28px] max-[600]:leading-[36px]">{t("suc")}</p>
            </TextAnimation>
          </div>

          <div className="grid grid-cols-2  max-[600px]:grid-cols-1">
            <div></div>
            <div className="border-l p-5 grid pb-0">

              <TextAnimation>
                <p className="text-2xl text-gray-500 max-[600px]:text-[16px] max-[600px]:leading-[24px]" dangerouslySetInnerHTML={{ __html: t.raw("suc1") }}></p>
              </TextAnimation>
              <div className="pt-10 pb-5">
                <ButtonSecond btnText={`${btn("titleAdvise")}`} />
              </div>
              <div></div>

            </div>

          </div>

        </div>
      </section >

      <Footer />
    </>
  )
}
