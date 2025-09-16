'use client'

import GradientMobile from "../three/GradientMobile"
import ArrowUp from ".././components/icons/ArrowUp"
import Slogans from "./Slogans"
import { useTranslations } from "next-intl"
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap"
gsap.registerPlugin(ScrollToPlugin);

export default function MobileMain() {
  const t = useTranslations("slogan")
  const tBtn = useTranslations("buttons")
  return (
    <>
      <div className="px-2.5 pb-2.5 hidden max-[600px]:block h-[100svh] text-[rgba(255,250,240,1)] border-b">
        <div className="relative pt-[85px] h-full">
          <GradientMobile />
          <div className="absolute top-[85px]">

            <div className="px-5 pt-5 text-[28px] leading-[36px]">
              <Slogans />
            </div>

          </div>

          <div className="absolute bottom-0 p-2.5 w-full text-center flex flex-col gap-2.5 text-[rgba(255,250,240,1)] font-semibold">
            <div className="border-dira bg-[rgba(255,250,240,0.2)] rounded-[10px] flex flex-col gap-5 p-2.5 pb-5 brightness-105">

              <div className="text-left font-medium">
                <p>{t("firstMobile")}</p>
                <p>{t("secondMobile")}</p>
              </div>

              <div className="text-left px-5 uppercase p-5 rounded-[5px] bg-[rgba(44,67,102,1)] brightness-105 flex justify-between items-center w-full">
                <div className="">
                  <p>
                    {tBtn("titleBooking")}
                  </p>
                </div>
                <ArrowUp />
              </div>

              <div className="opacity-50 text-center flex items-center justify-between gap-2.5">
                <div>© 2005</div>
                <div
                  onClick={() => {
                    gsap.to(window, {
                      duration: 1,
                      scrollTo: { y: window.innerHeight - 70 },
                      ease: "power2.inOut",
                    })
                  }}
                >
                  <p>
                    {tBtn("scroll")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
