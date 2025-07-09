// import DownArrow from "./icons/DownArrow"


export default function Footer() {
  return <>
    <footer className="pb-0 pr-0 min-h-screen grid grid-rows-2 text-color-light">
      <div className="border-black ml-5 border-l flex">
        <div className="mt-auto -scale-y-100 -scale-x-100 mb-5 mr-5  ml-auto">
          {/* <DownArrow /> */}
        </div>
      </div>
      <div className="bg-dira-blue p-5 flex flex-col justify-between">
        <div className="grid grid-cols-3 gap-10">
          <div>
            <p>D.I.R.A. — Arbeitsvermittlung</p>
            <p>Inh. Dipl.-Ing. Gennadi Rouditser</p>
          </div>
          <div>
            <p className="font-bold">
              Adresse
            </p>
            Schöneberger Str. 6, <br />
            12103 Berlin-Tempelhof NL
          </div>
          <div>
            <p className="font-bold">Telefon</p>
            <a href="tel:+4917621146010">+49 ( 176 ) 21 14 6010</a>
          </div>
          <div></div>
          <div>
            <p className="font-bold">Arbeitsvermittlung</p>
            <a href="mailto:job.vermittlung@avbr.de">job.vermittlung@avbr.de</a>
          </div>
          <div>
            <p className="font-bold">Coaching</p>
            <a href="mailto:team.coaching@avbr.de">team.coaching@avbr.de</a>
          </div>
        </div>
        <div>
          <div className="text-[12px] grid gap-2.5">
            <p className="opacity-50">© 2025
              <br />
              All rights reserved
            </p>
            <div className="">
              <p className="font-bold">Sitemap</p>
              <div className="flex justify-between">
                <p >Über Uns | Coaching | Für Unternehmer | Jobangebote  | Partner | Kontakt</p>
                <p>Impressum & Datenschutz</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer >
  </>
}
