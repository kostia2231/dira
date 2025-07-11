'use client'

import ButtonSecond from "../components/ButtonSecond"
import TextAnimation from "../components/TextAnimation"
import Footer from "../components/Footer";


export default function UberUns() {
  return (
    <>
      <section className="text-[rgba(10,33,61,1)]">
        <div className="grid">
          <TextAnimation>
            <p className="text-[75px] leading-[80px] border-b p-5">Weil Arbeit mehr ist als nur ein Job.</p>
          </TextAnimation>
          <div className="grid grid-cols-2 text-2xl">
            <TextAnimation>
              <p className="p-5 underline underline-offset-10 decoration-2">Über Uns</p>
            </TextAnimation>

            <TextAnimation>
              <p className="border-l p-5 text-[rgba(110,110,115,1)]">
                <span>
                  Stell dir vor, du stehst an einem Bahnsteig. In der Hand: dein Koffer voller Erfahrungen, Fähigkeiten und Hoffnungen. Du wartest auf den Zug in Richtung Zukunft – aber welcher ist der richtige? Und wo fährt er überhaupt hin?
                </span>

                <br />
                <span>
                  <br />
                  Genau hier kommen wir ins Spiel.
                </span>

                <span>
                  <br />
                  Wir sind <span className="important-word">eine private Arbeitsvermittlungsagentur</span> – mit offenen Ohren, klarem Kompass und jeder Menge Erfahrung. <br /> <br />Seit über 20 Jahren begleiten wir Menschen wie dich auf ihrem Weg in eine neue berufliche Zukunft. Egal, ob du Arbeit suchst, ein Unternehmen führen willst oder bereits einen Job hast, aber Unterstützung brauchst: <span className="important-word">Wir stehen an deiner Seite.</span>
                </span>
              </p>
            </TextAnimation>

          </div>

          <TextAnimation>
            <p className="text-[75px] leading-[80px] p-5 border-t">Persönlich. Engagiert. Zielgerichtet.</p>
          </TextAnimation>

          <div className="grid grid-cols-2 text-2xl border-t">
            <TextAnimation>
              <p className="p-5 underline underline-offset-10 decoration-2">Was wir für Arbeitssuchende tun</p>
            </TextAnimation>

            <TextAnimation>
              <p className="border-l p-5 text-[rgba(110,110,115,1)]">
                Ganz einfach: <span className="important-word">Wir machen Chancen sichtbar.</span> <br />
                Ob du gerade erst in Deutschland angekommen bist oder schon länger suchst – wir holen dich genau dort ab, wo du stehst.
                <br />
                <span><br />Gemeinsam entwickeln wir ein klares Profil, das zeigt, was dich ausmacht. Wir helfen dir, Bewerbungen zu schreiben, Vorstellungsgespräche zu meistern und die passende Stelle zu finden. Aber nicht irgendeine – <span className="important-word">eine, die wirklich zu dir passt.</span>
                </span>
                <br />
                <span> <br />Und weil Wissen Türen öffnet, beraten wir dich auch zu Weiterbildungen und Qualifizierungen. Du willst gründen? Auch gut! Mit unserem <span className="important-word">Existenzgründungscoaching</span> machen wir aus deiner Idee ein tragfähiges Geschäft.</span>
              </p>
            </TextAnimation>

          </div>

          <div className="grid grid-cols-2 text-2xl border-t">
            <TextAnimation>
              <p className="p-5 underline underline-offset-10 decoration-2">Was wir für Unternehmen tun</p>
            </TextAnimation>

            <TextAnimation>
              <p className="border-l p-5 text-[rgba(110,110,115,1)]">
                Sie suchen Mitarbeiter:innen, die wirklich passen? Die nicht nur den Lebenslauf erfüllen, sondern auch ins Team und zur Unternehmenskultur?
                Dann sind Sie bei uns genau richtig.
                <br /> <span><br />
                  Wir bieten <span className="important-word">maßgeschneiderte Personalvermittlung</span> – schnell, effizient und individuell. Kein Massenversand, keine Karteileichen. Sondern gezielte Vorauswahl, direkte Kommunikation und Bewerber:innen mit Perspektive.
                </span>
                <br /> <span><br />
                  Und wenn es in Ihrem Unternehmen gerade hakt – sei es bei der Integration neuer Mitarbeitender, bei Umstrukturierungen oder Personalentwicklung – stehen wir Ihnen mit unserer <span className="important-word">Unternehmensberatung</span> und unseren <span className="important-word">Coachings</span> zur Seite.
                </span>
              </p>
            </TextAnimation>

          </div>

          <div className="grid grid-cols-2 text-2xl border-t">
            <TextAnimation>
              <p className="p-5 underline underline-offset-10 decoration-2">Und was ist mit Coaching</p>
            </TextAnimation>

            <div className="border-l text-[rgba(110,110,115,1)]">
              <TextAnimation>
                <p className="p-5">
                  Manchmal braucht es nicht den nächsten Job – sondern den nächsten Schritt im Kopf.
                  In unseren <span className="important-word">individuellen Coaching-Programmen</span> begleiten wir Menschen in ganz verschiedenen Lebensphasen:
                </p>
              </TextAnimation>
              <TextAnimation>
                <p className="p-5 border-t"><span className="important-word">• Für Gründer:innen</span>, die ihr eigenes Business aufbauen wollen.</p>
              </TextAnimation>
              <TextAnimation>
                <p className="p-5 border-t"><span className="important-word">• Für Berufseinsteiger:innen</span> und Rückkehrer:innen, die Orientierung suchen.</p>
              </TextAnimation>
              <TextAnimation>
                <p className="p-5 border-t"><span className="important-word">• Für Menschen im Job</span>, die Stabilität, Selbstsicherheit und Klarheit gewinnen möchten.</p>
              </TextAnimation>
              <TextAnimation>
                <p className="p-5 border-t">Unser Coaching ist keine Schablone – sondern ein Kompass, den wir gemeinsam entwickeln. Damit du wieder in deine Kraft kommst und deinen Weg mit Überzeugung gehst.</p>
              </TextAnimation>
            </div>
          </div>

          <div className="grid grid-cols-2 text-2xl border-t">
            <TextAnimation>
              <p className="p-5 underline underline-offset-10 decoration-2">Wem wir helfen</p>
            </TextAnimation>
            <div className="border-l text-[rgba(110,110,115,1)]">
              <TextAnimation>
                <p className="p-5">
                  Unser Herz schlägt besonders für Menschen aus dem osteuropäischen Raum – aber bei uns sind <span className="important-word">alle Nationen</span>, <span className="important-word">alle Altersgruppen</span>, <span className="important-word">alle Lebensgeschichten</span> willkommen. Vielfalt ist kein Schlagwort für uns, sondern gelebte Realität.
                </p>
              </TextAnimation>

            </div>
          </div>
          <TextAnimation>
            <p className="text-[75px] leading-[80px] p-5 border-t">Wir glauben an Potenzial. Auch dort, wo andere es übersehen.</p>
          </TextAnimation>

          <div className="grid grid-cols-2 text-2xl border-t">
            <TextAnimation>
              <p className="p-5 underline underline-offset-10 decoration-2">Was uns ausmacht</p>
            </TextAnimation>

            <div className="border-l text-[rgba(110,110,115,1)]">
              <TextAnimation>
                <p className="p-5"><span className="important-word">• Echte Menschen statt automatisierter Abläufe.</span></p>
              </TextAnimation>
              <TextAnimation>
                <p className="p-5 border-t"><span className="important-word">• Tiefe Gespräche statt oberflächlicher Beratung.</span></p>
              </TextAnimation>
              <TextAnimation>
                <p className="p-5 border-t"><span className="important-word">• Lösungen mit Substanz statt schneller Versprechen.</span></p>
              </TextAnimation>
              <TextAnimation>
                <p className="p-5 border-t">Mit unseren starken Netzwerken, unserem breiten Know-how und einem offenen Herzen schaffen wir nicht nur <span className="important-word">Zugang zum Arbeitsmarkt</span>, sondern auch <span className="important-word">Zugang zu neuen Lebenswegen.</span>
                  <br /> <span><br />
                    Denn: Ein erfüllender Beruf verändert nicht nur den Kontostand – sondern das ganze Leben.
                  </span>
                </p>
              </TextAnimation>
            </div>
          </div>

          <TextAnimation>
            <p className="text-[75px] leading-[80px] p-5 border-t border-b">Ihr Erfolg ist unser Ziel.</p>
          </TextAnimation>
          <div className="grid grid-cols-2">
            <div></div>
            <div className="border-l p-5 grid pb-0">

              <TextAnimation>
                <p className="text-2xl text-[rgba(110,110,115,1)]">Bei uns beginnt alles mit einem Gespräch.
                  <br />
                  <span className="important-word">Komm vorbei. Ruf uns an. Schreib uns. </span>
                  Und dann gehen wir den Weg gemeinsam.</p>
              </TextAnimation>
              <div className="pt-10 pb-5">
                <ButtonSecond btnText="Kostenlose Erstberatung" />
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
