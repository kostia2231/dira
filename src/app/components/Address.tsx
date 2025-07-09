"use client"

import ButtonSecond from "./ButtonSecond"
// import Image from "next/image"

export default function Address() {
  const onClick = () => {
    window.open("https://maps.app.goo.gl/UkCYnsXmVeph74zq8")
  }
  return (
    <>
      <div className="border-t mt-10 grid grid-cols-2 h-full">
        <div className="">
          <div className="flex justify-between text-[rgba(10,33,61,1)]">
            <p className="p-5 text-[80px] leading-[80px]">Adresse</p>
            {/* <div className="m-5 h-3.5 w-3.5 rounded-full bg-[rgb(14,41,94)]"></div> */}
          </div>
          <div className="w-full">
            {/* <Image src="/Map.png" alt="Map" width={800} height={600} className="object-contain w-full pr-5 pt-5 h-auto" /> */}
          </div>
        </div>
        <div className="text-2xl p-5 pr-0 border-l grid gap-5 pb-0 h-fit text-[rgba(110,110,115,1)]">
          <p className="important-word">Schöneberger Str. 6,<br />
            12103 Berlin-Tempelhof</p>
          <p className="mb-5">
            Anfahrt mit den öffentlichen Verkehrsmitteln
            Sie erreichen und mit folgenden öffentlichen Verkehrsmitteln:
            <br />
            — U-Bahn: U6 (U-Bahnhof Alt-Tempelhof)
            <br />
            — Bus: M46, 140, 246 (Berlinickeplatz)
          </p>
          <ButtonSecond onClick={onClick} btnText="auf der Karte" />
        </div>
      </div>
    </>
  )
}
