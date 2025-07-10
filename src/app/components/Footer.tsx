"use client"

import ButtonSecond from "./ButtonSecond"
import TextAnimation from "./TextAnimation"
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
            <TextAnimation>
              <p className="p-5 text-[75px] leading-[80px]">Kontakte</p>
            </TextAnimation>

            {/* <div className="m-5 h-3.5 w-3.5 rounded-full bg-[rgb(14,41,94)]"></div> */}
          </div>

        </div>
        <div className="text-2xl  flex flex-col gap-5  text-[rgba(110,110,115,1)]  border-l">
          <div className="">
            <TextAnimation>
              <p className="p-5 border-b"><span className="important-word">Adresse</span> <br /><span className="">Schöneberger Str. 6, 12103 Berlin-Tempelhof</span></p>
            </TextAnimation>

            <TextAnimation>
              <p className="my-5 text-[16px] leading-[24px] pl-5">
                Anfahrt mit den öffentlichen Verkehrsmitteln
                Sie erreichen und mit folgenden öffentlichen Verkehrsmitteln:
                <br />
                • U-Bahn: U6 (U-Bahnhof Alt-Tempelhof)
                <br />
                • Bus: M46, 140, 246 (Berlinickeplatz)
              </p>
            </TextAnimation>

          </div>
          <div className="px-5">
            <ButtonSecond onClick={onClick} btnText="auf der Karte" />
          </div>

          <div className="p-5 pb-0 border-t">
            <TextAnimation>
              <p>
                <span className="important-word">Telefon</span>
                <br />
                <span>
                  <a href="tel:+4917621146010" className="underline-animation">+49 ( 176 ) 21 14 6010</a>
                </span></p>
            </TextAnimation>
          </div>

          <div className="p-5 pb-0 border-t">
            <TextAnimation>
              <p>
                <span className="important-word">Coaching</span>
                <br />
                <span>
                  <a href="mailto:team.coaching@avbr.de" className="underline-animation">team.coaching@avbr.de</a>
                </span></p>
            </TextAnimation>

          </div>
          <TextAnimation>
            <div className="p-5 pb-5 border-t">
              <p>
                <span className="important-word">Arbeitsvermittlung</span>
                <br />
                <span>
                  <a href="mailto:job.vermittlung@avbr.de" className="underline-animation">job.vermittlung@avbr.de</a>
                </span></p>
            </div>
          </TextAnimation>
        </div>

      </div>
      <div className="grid grid-cols-2 text-[12px] text-[rgba(10,33,61,1)]">
        <div className="p-5 flex gap-5">
          <p className="underline-animation cursor-pointer">Über Uns</p>
          <p className="underline-animation cursor-pointer">Coaching</p>
          <p className="underline-animation cursor-pointer">Für Unternehmer</p>
          <p className="underline-animation cursor-pointer">Jobangebote</p>
          <p className="underline-animation cursor-pointer">Kontakte</p>
        </div>
        <div className="border-l p-5  flex justify-between">
          <div className="flex gap-5">
            <p className="underline-animation cursor-pointer">Leitbild</p>
            <p className="underline-animation cursor-pointer">Impressum & Datenschutz</p>
          </div>
          <div className="flex justify-center items-center">
            <p className="ml-auto">© 2025</p>
          </div>
        </div>
      </div>
    </>
  )
}
