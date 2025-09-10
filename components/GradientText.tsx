import DownArrow from "./icons/ArrowUp"
import { useTranslations } from "next-intl"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
import Slogans from './Slogans'

export default function GradientText() {
  const tBtn = useTranslations("buttons")

  return (
    <>
      <div className="flex flex-col gap-5 absolute h-full w-fit z-11 left-10 text-[rgba(255,250,240,1)] text-[75px] leading-[80px]">

        <Slogans />

        <div className="h-full mb-auto text-[24px] leading-[32px] w-fit bottom-50 z-11 text-[rgba(255,250,240,1)] font-semibold cursor-pointer"
        >
          <p
            className="lineunder-light absolute opacity-50 hover:opacity-100 pb-[6px]">
            {tBtn("titleAdvise")}
          </p>

        </div>
      </div>

      <div
        className="w-fit absolute bottom-10 z-11 left-10 text-[rgba(255,250,240,1)] font-semibold opacity-50 cursor-default">
        © 2005
      </div>
      <div
        className="items-center gap-2.5 flex w-fit absolute bottom-10 z-11 left-1/2 -translate-x-1/2 text-[rgba(255,250,240,1)] font-semibold opacity-50 cursor-pointer hover:opacity-100"
        onClick={() => {
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: window.innerHeight },
            ease: "power2.inOut",
          })
        }}
      >
        <p>
          {tBtn("scroll")}
        </p>
        <div className="rotate-135">
          <DownArrow />
        </div>
      </div>
    </>
  )
}
