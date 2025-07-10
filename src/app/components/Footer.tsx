"use client"

import ButtonSecond from "./ButtonSecond"
// import Image from "next/image"

export default function Footer() {
  const onClick = () => {
    window.open("https://maps.app.goo.gl/H1SEHTy8N4ME7sVX7")
  }
  return (
    <>
      <div className="border-t grid grid-cols-2 border-b">
        <div className="">
          <div className="flex justify-between text-[rgba(10,33,61,1)]">
            <p className="p-5 text-[80px] leading-[80px]">Kontakte</p>
            {/* <div className="m-5 h-3.5 w-3.5 rounded-full bg-[rgb(14,41,94)]"></div> */}
          </div>

        </div>
        <div className="text-2xl  flex flex-col gap-5  text-[rgba(110,110,115,1)]  border-l">
          <div className="">
            <p className="p-5 border-b"><span className="important-word">Adresse</span> <br /><span className="">Schöneberger Str. 6, 12103 Berlin-Tempelhof</span></p>
            <p className="my-5 text-[16px] leading-[24px] pl-5">
              Anfahrt mit den öffentlichen Verkehrsmitteln
              Sie erreichen und mit folgenden öffentlichen Verkehrsmitteln:
              <br />
              • U-Bahn: U6 (U-Bahnhof Alt-Tempelhof)
              <br />
              • Bus: M46, 140, 246 (Berlinickeplatz)
            </p>
          </div>
          <div className="px-5">
            <ButtonSecond onClick={onClick} btnText="auf der Karte" />
          </div>

          <div className="p-5 pb-0 border-t">
            <p className="important-word">Telefon</p>
            <a href="tel:+4917621146010">+49 ( 176 ) 21 14 6010</a>
          </div>

          <div className="p-5 pb-0 border-t">
            <p className="important-word">Coaching</p>
            <a href="mailto:team.coaching@avbr.de">team.coaching@avbr.de</a>
          </div>

          <div className="p-5 pb-5 border-t">
            <p className="important-word">Arbeitsvermittlung</p>
            <a href="mailto:job.vermittlung@avbr.de">job.vermittlung@avbr.de</a>
          </div>
        </div>

      </div>
      <div className="grid grid-cols-2 text-[12px]">
        <div className="p-5 flex gap-5">
          <p>Über Uns</p>
          <p>Coaching</p>
          <p>Für Unternehmer</p>
          <p>Jobangebote</p>
          <p>Kontakte</p>
        </div>
        <div className="border-l p-5  flex justify-between">
          <div className="flex gap-5">
            <p>Leitbild</p>
            <p>Impressum & Datenschutz</p>
          </div>
          <div>
            <p className="ml-auto">© 2025</p>
          </div>
        </div>
      </div>
    </>
  )
}
