"use client"

import Link from "next/link"
import Logo from "./icons/LogoDira"
import ButtonMain from "./ButtonMain"

export default function Header() {
  const onClick = () => {
    console.log("hi")
    window.open("https://calendly.com/loxonnron/30min")
  }

  // const headerRef = useRef<HTMLElement>(null)
  // const hiddenRef = useRef(false)

  // useEffect(() => {
  //   const header = headerRef.current

  //   const onScroll = () => {
  //     if (!header) return

  //     const scrollTop = window.scrollY
  //     const scrollHeight = document.documentElement.scrollHeight
  //     const windowHeight = window.innerHeight

  //     const isBottom = scrollTop + windowHeight >= scrollHeight - 50
  //     console.log(isBottom)

  //     if (isBottom && !hiddenRef.current) {
  //       gsap.to(header, {
  //         opacity: 0,
  //         duration: 0.1,
  //         ease: "linear",
  //         pointerEvents: "none",
  //         overwrite: "auto",
  //       })
  //       hiddenRef.current = true
  //     } else if (!isBottom && hiddenRef.current) {
  //       gsap.to(header, {
  //         opacity: 0,
  //         duration: 0.1,
  //         ease: "linear",
  //         pointerEvents: "none",
  //         overwrite: "auto",
  //       })
  //       hiddenRef.current = false
  //     }
  //   }

  //   window.addEventListener("scroll", onScroll)

  //   return () => window.removeEventListener("scroll", onScroll)
  // }, [])

  return (
    <header
      id="site-header"
      className="z-50  p-5 flex justify-between items-center sticky top-0 w-full bg-dira-light-opacity backdrop-blur-xl border-b"
    >
      <Link href="/">
        <Logo className="h-10 w-auto" />
      </Link>

      <div className="flex gap-5 justify-center items-center text-[rgba(10,33,61,1)]">
        <Link href="/uber-uns" className="underline-animation">
          Über Uns
        </Link>
        <Link href="/coaching" className="underline-animation">
          Coaching
        </Link>
        <a onClick={onClick} className="cursor-pointer underline-animation">
          Für Unternehmer
        </a>
        <Link href="/jobangebote" className="underline-animation">
          Jobangebote
        </Link>
        <Link href="/kontakte" className="underline-animation cursor-pointer">Kontakte</Link>
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
