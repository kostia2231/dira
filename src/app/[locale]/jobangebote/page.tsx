'use client'

import ButtonSecond from "../../../../components/ButtonSecond"
import Footer from "../../../../components/Footer"
import TextAnimation from "../../../../components/TextAnimation"

export default function Jobangebote() {
  return (
    <>
      <section className="text-[rgba(44,67,102,1)]">
        <div>

          <div className="border-b p-5">
            <TextAnimation>
              <p className="text-[75px] leading-[80px]">Dein Weg zum Job beginnt hier – und wir gehen ihn gemeinsam.</p>
            </TextAnimation>
          </div>


          <div className="grid grid-cols-2 text-2xl">
            <div></div>
            <div className="border-l text-gray-500">
              <div className="p-5">
                <TextAnimation>
                  <p>Du suchst nicht irgendeinen Job, sondern eine Aufgabe mit Perspektive? <br />Wir bringen dich mit Arbeitgebern zusammen, die genau dich suchen.</p>
                </TextAnimation>
              </div>

              <div className="p-5 border-t">
                <TextAnimation>
                  <p className="text-[16px] leading-[24px]">Ob <span className="important-word">Lager</span>, <span className="important-word">Pflege</span>, <span className="important-word">Büro</span>, <span className="important-word">Technik</span> oder <span className="important-word">Gastronomie</span> – unsere Stellenangebote sind vielfältig, aktuell und auf deine Qualifikation abgestimmt.
                    Mit persönlicher Beratung, Bewerbungscoaching und gezielter Vorbereitung begleiten wir dich auf dem Weg zur passenden Stelle.
                    <br /> <br />Schau regelmäßig vorbei – dein neuer Job könnte schon morgen hier stehen.</p>
                </TextAnimation>
              </div>

              <div className="p-5">
                <ButtonSecond btnText="Beratung erhalten" />
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
