"use client";
import ButtonSecond from "./ButtonSecond"
import ParallaxImageOne from "./ParallaxImageOne"
import TextAnimation from "./TextAnimation";

export default function Coaching() {
  return <>
    <div className="border-t">
      <ParallaxImageOne imageUrl="/images/12_sm.webp" speed={-10} />
    </div>
    <div className="border-t grid grid-cols-2">
      <div className="p-5 pb-0 flex flex-col justify-between h-full">
        <div className="flex justify-between text-[rgba(44,67,102,1)]">
          <TextAnimation>
            <p className="text-[75px] leading-[80px]">Coaching</p>
          </TextAnimation>
          {/* <div className="h-3.5 w-3.5 rounded-full bg-[rgb(14,41,94)]"></div> */}
        </div>
        {/* <DownArrow /> */}
      </div>
      <div className="border-l">
        <div className="text-2xl text-[rgba(44,67,102,1)]">

          <div className="border-b p-5">
            <TextAnimation>
              <p >• Für Menschen, die gründen wollen.</p>
            </TextAnimation>
          </div>

          <div className="border-b p-5">
            <TextAnimation>
              <p>• Für mehr Stabilität am Arbeitsplatz.</p>
            </TextAnimation>
          </div>

          <div className="border-b p-5">
            <TextAnimation>
              <p>• Für Klarheit in beruflichen Umbruchphasen.</p>
            </TextAnimation>
          </div>
        </div>
        <div className="p-5 pr-0 flex gap-5 flex-col">
          {/* <div className="h-3.5 w-3.5 rounded-full bg-[rgba(72,72,72,1)]"></div> */}
          <TextAnimation>
            <div className="pr-5 mb-5 text-[rgba(110,110,115,1)]">Unser Schwerpunkt liegt auf Bewerber:innen aus Osteuropa — aber <span className="important-word">wir sind offen für alle</span>, die in Deutschland beruflich Fuß fassen wollen.</div>
          </TextAnimation>
          <div className="flex flex-col gap-5 pr-5">
            <ButtonSecond btnText="Mehr erfahren" />
            <ButtonSecond btnText="ZU DEN Jobangebote" />

          </div>
        </div>
      </div>
    </div >
  </>
}
