import ButtonSecond from "../components/ButtonSecond"

export default function Jobangebote() {
  return (
    <>
      <section className="text-[rgba(10,33,61,1)]">
        <div>
          <p className="text-[80px] leading-[80px] border-b p-5">Dein Weg zum Job beginnt hier – und wir gehen ihn gemeinsam.</p>
          <div className="grid grid-cols-2 text-2xl ">
            <div>
              <p className="p-5 underline underline-offset-10 decoration-1"></p>
            </div>
            <div className="border-l text-[rgba(110,110,115,1)]">
              <p className="p-5">Du suchst nicht irgendeinen Job, sondern eine Aufgabe mit Perspektive? <br />Wir bringen dich mit Arbeitgebern zusammen, die genau dich suchen.</p>
              <p className="text-[16px] leading-[24px] p-5 border-t">Ob <span className="important-word">Lager</span>, <span className="important-word">Pflege</span>, <span className="important-word">Büro</span>, <span className="important-word">Technik</span> oder <span className="important-word">Gastronomie</span> – unsere Stellenangebote sind vielfältig, aktuell und auf deine Qualifikation abgestimmt.
                Mit persönlicher Beratung, Bewerbungscoaching und gezielter Vorbereitung begleiten wir dich auf dem Weg zur passenden Stelle.
                <br /> <br />Schau regelmäßig vorbei – dein neuer Job könnte schon morgen hier stehen.</p>
              <div className="p-5">

                <ButtonSecond btnText="Beratung erhalten" />
              </div>
            </div>
          </div>
          {/* <div className="grid grid-cols-2 text-2xl border-t">
            <div>
              <p className="p-5 underline underline-offset-10 decoration-1">Für Arbeitgeber</p>
            </div>
            <div className="border-l text-[rgba(110,110,115,1)]">
              <p className="p-5">Sie suchen verlässliche Mitarbeiter:innen? Wir vermitteln qualifizierte Bewerber:innen schnell, passend und persönlich.</p>
            </div>
          </div> */}
          {/* <p className="text-[80px] leading-[80px]  p-5 border-t">Schau regelmäßig vorbei – dein neuer Job könnte schon morgen hier stehen.</p> */}

        </div>
      </section>
    </>
  )
}
