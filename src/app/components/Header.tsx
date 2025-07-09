"use client"

import Link from "next/link"
import Logo from "./icons/LogoDira"
import ButtonMain from "./ButtonMain"
// import CalendlyPopupButton from "./CalendlyPopUp"

export default function Header() {

  const onClick = () => {
    console.log("hi")
    window.open("https://calendly.com/loxonnron/30min")
  }

  return (
    <header className="z-1 bg-dira-blue p-5 flex justify-between items-center sticky top-0">
      <Link href="/">
        <Logo className="h-10 w-auto" />
      </Link>

      <div className="flex gap-5 justify-center items-center text-color-light">
        <Link href="/uber-uns">Über Uns</Link>
        <Link href="/coaching">Coaching</Link>
        <a href="">Für Unternehmer</a>
        <a href="">Jobangebote</a>
        <a href="">Kontakt</a>
        <div className="flex gap-2 items-center">
          <p>DE</p>
          {/* <div className="h-2 w-2 border-l-2 border-b-2 rotate-315 mb-1"></div> */}
        </div>
      </div>
      {/* <div><CalendlyPopupButton /></div> */}
      <div><ButtonMain onClick={onClick} /></div>
    </header>
  )
}
