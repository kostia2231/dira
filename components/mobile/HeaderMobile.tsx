'use client'
import { useState } from "react"
import { AnimatePresence } from "motion/react"

import Logo from "../icons/LogoDira"
import NavMobile from "./NavMobile"
import Link from "next/link"


export default function HeaderMobile() {
  const [isActive, setIsActive] = useState<boolean>(false)


  return (
    <>
      <header
        className="header min-[600px]:hidden p-5 border-b bg-dira-light-opacity backdrop-blur-xl">
        <div className="header-content">
          <div className="logo w-fit">
            <Link href={"/"}>
              <Logo className="h-8" />
            </Link >
          </div>


          <div className="button w-8 h-8" onClick={() => setIsActive(!isActive)}>
            <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
          </div>
        </div>
      </header>
      <AnimatePresence mode="wait">
        {isActive && <NavMobile onCloseAction={() => setIsActive(!isActive)} />}
      </AnimatePresence>
    </>
  )
}
