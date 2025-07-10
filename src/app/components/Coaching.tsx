"use client";
import ButtonSecond from "./ButtonSecond"
import ParallaxImageOne from "./ParallaxImageOne"

export default function Coaching() {
  return <>
    <div className="border-t">
      <ParallaxImageOne imageUrl="/images/12_sm.webp" speed={-10} />
    </div>
    <div className="border-t grid grid-cols-2">
      <div className="p-5 pb-0 flex flex-col justify-between h-full">
        <div className="flex justify-between text-[rgba(10,33,61,1)]">
          <p className="text-[80px] leading-[80px]">Coaching</p>
          {/* <div className="h-3.5 w-3.5 rounded-full bg-[rgb(14,41,94)]"></div> */}
        </div>
        {/* <DownArrow /> */}
      </div>
      <div className="border-l">
        <div className="text-2xl text-[rgba(10,33,61,1)]">
          <p className="border-b p-5">• Für Menschen, die gründen wollen.</p>
          <p className="border-b p-5">• Für mehr Stabilität am Arbeitsplatz.</p>
          <p className="border-b p-5">• Für Klarheit in beruflichen Umbruchphasen.</p>
        </div>
        <div className="p-5 pr-0 flex gap-5 flex-col">
          {/* <div className="h-3.5 w-3.5 rounded-full bg-[rgba(72,72,72,1)]"></div> */}
          <div className="pr-5 mb-5 text-[rgba(110,110,115,1)]">Unser Schwerpunkt liegt auf Bewerber:innen aus Osteuropa — aber <span className="important-word">wir sind offen für alle</span>, die in Deutschland beruflich Fuß fassen wollen.</div>
          <div className="flex flex-col gap-5 pr-5">
            <ButtonSecond btnText="Mehr erfahren" />
            <ButtonSecond btnText="ZU DEN Jobangebote" />

          </div>
        </div>
      </div>
    </div >
  </>
}
