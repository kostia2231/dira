"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Logo from "./icons/LogoDira"
import ButtonMain from "./ButtonMain"


export default function Header() {
  const path = usePathname()
  console.log(path)

  const onClick = () => {
    console.log("hi")
    window.open("https://calendly.com/loxonnron/30min")
  }

  return (
    <header
      id="site-header"
      className="z-50  p-5 flex justify-between items-center sticky top-0 w-full bg-dira-light-opacity backdrop-blur-xl border-b"
    >
      <Link href="/">
        <Logo className="h-10 w-auto" />
      </Link>

      <div className="flex gap-5 justify-center items-center text-[rgba(10,33,61,1)]">
        <Link
          href="/uber-uns"
          className={`underline-animation ${path === "/uber-uns" ? "text-[rgba(110,110,115,1)] transition-all duration-400" : ""}`}
        >
          Über Uns
        </Link>

        <Link
          href="/coaching"
          className={`underline-animation ${path === "/coaching" ? "text-[rgba(110,110,115,1)] transition-all duration-400" : ""}`}
        >
          Coaching
        </Link>

        <a onClick={onClick} className="cursor-pointer underline-animation">
          Für Unternehmer
        </a>

        <Link
          href="/jobangebote"
          className={`underline-animation ${path === "/jobangebote" ? "text-[rgba(110,110,115,1)] transition-all duration-400" : ""}`}
        >
          Jobangebote
        </Link>

        <Link
          href="/kontakte"
          className={`underline-animation ${path === "/kontakte" ? "text-[rgba(110,110,115,1)] transition-all duration-400" : ""}`}
        >
          Kontakte
        </Link>

        <div className="flex gap-2 items-center">
          <p>DE</p>
        </div>
      </div>


      <div>
        <ButtonMain onClick={onClick} />
      </div>
    </header>
  )
}
