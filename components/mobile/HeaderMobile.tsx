'use client'

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { AnimatePresence } from "motion/react"
import Logo from "../icons/LogoDiraDark"
import NavMobile from "./NavMobile"

export default function HeaderMobile() {
  const [isActive, setIsActive] = useState<boolean>(false)

  const router = useRouter()
  const path = usePathname()

  const getLocale = () => {
    const segments = path.split('/');
    const first = segments[1];
    if (["de", "ru", "ua"].includes(first)) return first;
    return "de";
  };

  const handleGoHome = () => {
    const locale = getLocale();
    router.push(`/${locale}`);
  };

  return (
    <>
      <header
        className="header min-[600px]:hidden p-5 border-b bg-dira-light-opacity backdrop-blur-xl pt-10 z-999">
        <div className="header-content">
          <div className="logo w-fit">
            <div onClick={handleGoHome}>
              <Logo className="h-8" />
            </div >
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
