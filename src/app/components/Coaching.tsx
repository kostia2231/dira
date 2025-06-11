import ButtonSecond from "./ButtonSecond"
import DownArrow from "./icons/DownArrow"

export default function Coaching() {
  return <>
    <div className="border-t min-h grid grid-cols-2">
      <div className="p-5  flex flex-col justify-between h-full">
        <div className="flex justify-between">
          <p className="text-[85px] leading-[85px]">Coaching</p>
          <div className="h-3.5 w-3.5 rounded-full bg-black"></div>
        </div>
        <DownArrow />
      </div>
      <div className="border-l ">
        <div className="text-2xl">
          <p className="border-b p-5">Für Menschen, die gründen wollen.</p>
          <p className="border-b p-5">Für mehr Stabilität am Arbeitsplatz.</p>
          <p className="border-b p-5">Für Klarheit in beruflichen Umbruchphasen.</p>
        </div>
        <div className="p-5 flex gap-5 flex-col">
          <div className="h-3.5 w-3.5 rounded-full bg-black"></div>
          <div>Unser Schwerpunkt liegt auf Bewerber:innen aus Osteuropa — aber wir sind offen für alle, die in Deutschland beruflich Fuß fassen wollen.</div>
          <ButtonSecond btnText="Mehr erfahren" />
          <ButtonSecond btnText="ZU DEN Jobangebote" />
        </div>
      </div>
    </div >
  </>
}
