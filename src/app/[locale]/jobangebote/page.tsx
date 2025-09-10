import { useTranslations } from "next-intl"
import ButtonSecond from "../../../../components/ButtonSecond"
import CardCarousel from "../../../../components/CardCarousel"
import Footer from "../../../../components/Footer"
import TextAnimation from "../../../../components/TextAnimation"
import Header from "../../../../components/HeaderSecond"
import JustGradient from "../../../../three/JustGradient"
import Revealer from "../../../../components/Revealer"

export default function Jobangebote() {
  const t = useTranslations("vacancies")
  const btn = useTranslations("buttons")

  return (
    <>
      <Revealer />
      <Header />
      <section className="text-[rgba(44,67,102,1)] max-[600px]:mt-[73px]">
        <div className="p-5 relative w-full max-[600px]:p-2.5">
          <div className="relative flex flex-col">

            <div className="absolute inset-0 -z-10">
              <JustGradient />
            </div>

            <div className="text-[rgba(255,250,240,1)] text-[24px] leading-[32px] p-5 pb-0 max-[600px]:text-[16px] max-[600px]:leading-[24px]">
              {t("titel1")}<br className="max-[600px]:hidden" />{t("titel2")}
            </div>

            <CardCarousel />
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

export async function generateStaticParams() {
  return [{ locale: 'de' }, { locale: 'ru' }, { locale: 'ua' }];
}
