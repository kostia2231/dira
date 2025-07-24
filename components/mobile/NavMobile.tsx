"use client";

import Curve from "./Curve";
import LanguageSwitcher from "../LanguageSwitcher";
import ButtonSecond from "../ButtonSecond";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { menuSlide, scale, itemVariants, containerVariants } from "../../lib/animation";
import { useTranslations } from "next-intl";

export default function NavMobile({ onCloseAction }: { onCloseAction: () => void }) {
  const t = useTranslations("header");
  const btn = useTranslations("buttons");

  const locales = ["de", "ru", "ua"];
  const path = usePathname();
  const router = useRouter();

  const parts = path?.split("/") || [];
  const locale = parts[1] && locales.includes(parts[1]) ? parts[1] : undefined;

  const [height, setHeight] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const withLocale = (href: string) => (locale ? `/${locale}${href}` : href);

  const linkClass = (href: string) =>
    `${path?.startsWith(withLocale(href)) ? "text-gray-500 transition-all duration-400 important-word" : "important-word"}`;

  const handleNavigation = (href: string) => {
    onCloseAction();
    setTimeout(() => {
      router.push(href);
    }, 500);
  };

  const openCalendly = () => {
    window.open("https://calendly.com/loxonnron/30min");
  };

  useEffect(() => {
    const slider = document.getElementById("menuSlider");
    if (slider) setHeight(slider.offsetHeight);

    const resizeHandler = () => {
      const slider = document.getElementById("menuSlider");
      if (slider) setHeight(slider.offsetHeight);
    };

    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  useEffect(() => {
    const handleWheelOrClick = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        e.preventDefault();
        onCloseAction();
      }
    };

    document.addEventListener("wheel", handleWheelOrClick, { passive: false });
    document.addEventListener("click", handleWheelOrClick);

    return () => {
      document.removeEventListener("wheel", handleWheelOrClick);
      document.removeEventListener("click", handleWheelOrClick);
    };
  }, [onCloseAction]);

  return (
    <motion.div
      id="menuSlider"
      ref={ref}
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="w-full h-fit bg-dira-light top-[73px] z-50 fixed border-b text-[rgba(44,67,102,1)]"
    >
      <div className="p-5">
        <motion.div variants={scale} initial="closed" animate="open" exit="closed">
          <p className="text-xl font-bold"></p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          className="flex flex-col gap-5 w-full text-[22px]"
        >
          <motion.div variants={itemVariants} className="important-word">
            <LanguageSwitcher />
          </motion.div>

          <motion.div variants={itemVariants}>
            <button onClick={() => handleNavigation(withLocale("/uber-uns"))} className={linkClass("/uber-uns")}>
              {t("about")}
            </button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <button onClick={() => handleNavigation(withLocale("/coaching"))} className={linkClass("/coaching")}>
              {t("coaching")}
            </button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <button
              onClick={() => {
                openCalendly();
                onCloseAction();
              }}
              className="cursor-pointer important-word"
            >
              {t("business")}
            </button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <button onClick={() => handleNavigation(withLocale("/jobangebote"))} className={linkClass("/jobangebote")}>
              {t("jobs")}
            </button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <button onClick={() => handleNavigation(withLocale("/kontakte"))} className={linkClass("/kontakte")}>
              {t("contacts")}
            </button>
          </motion.div>
        </motion.div>

        <div className="w-full pt-10 h-fit">
          <ButtonSecond btnText={btn("titleBooking")} onClick={openCalendly} />
        </div>
      </div>

      <Curve height={height} />
    </motion.div>
  );
}
