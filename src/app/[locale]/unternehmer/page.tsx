import ButtonSecond from "../../../../components/ButtonSecond"
import Footer from "../../../../components/Footer"
import TextAnimation from "../../../../components/TextAnimation"
import { useTranslations } from "next-intl"
import Header from "../../../../components/HeaderSecond"
import Revealer from "../../../../components/Revealer"

export default function UnternehmerPage() {
  const t = useTranslations("coachingPage")
  const btn = useTranslations("buttons")

  return (
    <>
      <Revealer />
      <Header />
      <div className="">
        <section className="text-[rgba(44,67,102,1)] max-[600px]:mt-[73px]">
          <div>

            <div className="border-b p-5">
              <TextAnimation>
                <p className="text-[80px] leading-[80px] max-[600px]:text-[28px] max-[600]:leading-[36px]">
                  Sie suchen Mitarbeitende, die nicht nur fachlich, sondern auch menschlich zu Ihrem Team passen?                </p>
              </TextAnimation>
            </div>


            <div className="grid grid-cols-2 text-2xl max-[600px]:text-[16px] max-[600px]:leading-[24px] max-[600px]:grid-cols-1">
              <div></div>

              <div className="border-l p-5">
                <TextAnimation>
                  <p className=" text-gray-500">
                    Dann sind Sie bei uns genau richtig. Wir sind keine gewöhnliche Arbeitsvermittlung – wir sind Ihre Partner für nachhaltige Personalgewinnung und individuelle Lösungen.
                  </p>
                </TextAnimation>
              </div>

            </div>

            <div className="grid grid-cols-2 text-2xl border-t max-[600px]:grid-cols-1 max-[600px]:text-[16px] max-[600px]:leading-[24px]">
              <div className="p-5">
                <TextAnimation>
                  <p className="relative w-fit lineunder important-word">
                    Passende Kandidaten
                  </p>
                </TextAnimation>
              </div>

              <div className="border-l p-5">
                <TextAnimation>
                  <p className="text-gray-500">
                    Wir glauben an Qualität statt Quantität. Bei uns erhalten Sie keine beliebigen Profile – sondern gezielt ausgewählte Fach- und Hilfskräfte, die zu Ihrem Anforderungsprofil und zu Ihrer Unternehmenskultur passen.
                  </p>
                </TextAnimation>
                <br />
                <TextAnimation>
                  <p className="text-gray-500">
                    Ob gewerbliche Hilfskräfte, kaufmännische Mitarbeiter oder Fachkräfte mit IT- oder Pflegehintergrund – wir finden die richtigen Menschen für Ihre offenen Stellen.
                  </p>
                </TextAnimation>
              </div>
            </div>

            <div className="grid grid-cols-2 text-2xl border-t max-[600px]:grid-cols-1 max-[600px]:text-[16px] max-[600px]:leading-[24px]">
              <div className="p-5">
                <TextAnimation>
                  <p className="relative w-fit lineunder important-word">
                    Direkt. Persönlich. Transparent.
                  </p>
                </TextAnimation>
              </div>


              <div className="border-l  text-gray-500">
                <div className="p-5">
                  <TextAnimation>
                    <p>
                      Wir begleiten Sie durch den gesamten Vermittlungsprozess: vom ersten Gespräch bis zur erfolgreichen Einarbeitung Ihrer neuen Mitarbeitenden.
                    </p>
                  </TextAnimation>
                  <br />
                  <TextAnimation>
                    <p>
                      Schnell, verbindlich, immer auf Augenhöhe. Sie haben immer einen festen Ansprechpartner – keine Warteschleifen, keine Umwege.
                    </p>
                  </TextAnimation>
                </div>
              </div>
            </div>

            <div className="border-y p-5">
              <TextAnimation>
                <p className="text-[75px] leading-[80px] max-[600px]:text-[28px] max-[600]:leading-[36px]">
                  Wir denken Personalentwicklung weiter.
                </p>
              </TextAnimation>
            </div>

            <div className="grid grid-cols-2 text-2xl border-b max-[600px]:grid-cols-1 max-[600px]:text-[16px] max-[600px]:leading-[24px]">
              <div></div>

              <div className="border-l  text-gray-500">
                <div className="p-5">
                  <div>
                    <TextAnimation>
                      <p>
                        Veränderungen im Unternehmen? Neue Teams? Interne Herausforderungen?
                      </p>
                    </TextAnimation>
                    <br />
                    <TextAnimation>
                      <p>
                        Mit unserer praxisnahen Unternehmensberatung unterstützen wir Sie auch über die Vermittlung hinaus:
                      </p>
                    </TextAnimation>
                  </div>
                </div>
              </div>
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
    </>
  )
}

export async function generateStaticParams() {
  return [{ locale: 'de' }, { locale: 'ru' }, { locale: 'ua' }];
}
