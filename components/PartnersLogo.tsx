"use client"

import Image from "next/image"

export default function PartnersLogo() {

  return (
    <>
      <div className="grid grid-cols-3 justify-between border-t min-h-[33vw]">
        <div className="m-auto border-r w-full h-full items-center justify-center flex p-20">
          <Image src="/logos/ohmi.webp" alt="logo1" width={200} height={50} className="opacity-50 hover:opacity-100 transition-all duration-400 h-auto w-auto" />
        </div>

        <div className="m-auto w-full h-full items-center justify-center flex p-20">
          <Image src="/logos/dekra.webp" alt="logo1" width={130} height={50} className="opacity-50 hover:opacity-100 transition-all duration-400 h-auto w-auto" />
        </div>

        <div className="m-auto border-l  w-full h-full items-center justify-center flex p-20">
          <Image src="/logos/RdA.webp" alt="logo1" width={200} height={50} className="opacity-50 hover:opacity-100 transition-all duration-400 h-auto w-auto" />
        </div>

      </div>
    </>
  )
}
