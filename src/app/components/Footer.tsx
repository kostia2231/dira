export default function Footer() {
  return <>
    <footer className="p-5 pb-0 pr-0 min-h-screen grid grid-rows-2 text-color-light">
      <div></div>
      <div className="bg-dira-blue p-5 flex flex-col justify-between">
        <div className="grid grid-cols-3 gap-10">
          <div>
            <p>D.I.R.A. — Arbeitsvermittlung.</p>
            <p>Inh. Dipl.-Ing. Gennadi Rouditser</p>
          </div>
          <div>
            <p>Coaching</p>
            <p>team.coaching@avbr.de</p>
          </div>
          <div>
            <p>Telefon</p>
            <p>+49 ( 176 ) 21 14 6010</p>
          </div>
          <div>
            Adresse
            Schöneberger Str. 6, <br />
            12103 Berlin-Tempelhof NL
          </div>
          <div>
            <p>Arbeitsvermittlung</p>
            <p>job.vermittlung@avbr.de</p>
          </div>
        </div>
        <div>
          <div className="text-[11px] grid gap-5">
            <p>© 2025</p>
            <div>
              <p>Sitemap:</p>
              <div className="flex justify-between">
                <p>Über Uns | Coaching | Für Unternehmer | Jobangebote  | Partner | Kontakt</p>
                <p>Impressum & Datenschutz</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer >
  </>
}
