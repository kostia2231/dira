export default function Footer() {
  return <>
    <footer className="pl-5 pb-0 pr-0 min-h-screen grid grid-rows-2 text-color-light">
      <div className="border-black border-l"></div>
      <div className="bg-dira-blue p-5 flex flex-col justify-between">
        <div className="grid grid-cols-3 gap-10">
          <div>
            <p>D.I.R.A. — Arbeitsvermittlung.</p>
            <p>Inh. Dipl.-Ing. Gennadi Rouditser</p>
          </div>
          <div>
            <p className="font-bold">Coaching</p>
            <p>team.coaching@avbr.de</p>
          </div>
          <div>
            <p className="font-bold">Telefon</p>
            <p>+49 ( 176 ) 21 14 6010</p>
          </div>
          <div>
            Adresse
            Schöneberger Str. 6, <br />
            12103 Berlin-Tempelhof NL
          </div>
          <div>
            <p className="font-bold">Arbeitsvermittlung</p>
            <p>job.vermittlung@avbr.de</p>
          </div>
        </div>
        <div>
          <div className="text-[11px] grid gap-5 pb-5">
            <p>D.I.R.A © 2025</p>
            <div>
              <p className="font-bold">Sitemap</p>
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
