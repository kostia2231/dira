"use client";
import Link from "next/link";
import Curve from "./Curve";
import LanguageSwitcher from "../LanguageSwitcher";
import ButtonMain from "../ButtonMain";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { menuSlide, scale, itemVariants, containerVariants } from "../../lib/animation";
import { useTranslations } from "next-intl";


export default function NavMobile({ onCloseAction }: { onCloseAction: () => void }) {
  const t = useTranslations("header");
  const locales = ["de", "ru", "ua"];
  const path = usePathname();
  const parts = path?.split("/") || [];
  const locale = parts[1] && locales.includes(parts[1]) ? parts[1] : undefined;

  const onClick = () => {
    window.open("https://calendly.com/loxonnron/30min");
  };

  const withLocale = (href: string) => (locale ? `/${locale}${href}` : href);

  const linkClass = (href: string) =>
    `${path?.startsWith(withLocale(href))
      ? "text-gray-500 transition-all duration-400 important-word"
      : "important-word"
    }`;


  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    function updateHeight() {
      const slider = document.getElementById("menuSlider");
      if (slider) {
        setHeight(slider.offsetHeight);
      }
    }
    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    const handleWheel = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        e.preventDefault();
        onCloseAction();
      }
    };

    document.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("click", handleWheel);

    return () => {
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("click", handleWheel);
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
            <Link href={withLocale("/uber-uns")} className={linkClass("/uber-uns")} onClick={onCloseAction}>
              {t("about")}
            </Link>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link href={withLocale("/coaching")} className={linkClass("/coaching")} onClick={onCloseAction}>
              {t("coaching")}
            </Link>
          </motion.div>

          <motion.div variants={itemVariants}>
            <a onClick={() => {
              onClick()
              onCloseAction()
            }} className="cursor-pointer important-word">
              {t("business")}
            </a>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link href={withLocale("/jobangebote")} className={linkClass("/jobangebote")} onClick={onCloseAction}>
              {t("jobs")}
            </Link>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link href={withLocale("/kontakte")} className={linkClass("/kontakte")} onClick={onCloseAction}>
              {t("contacts")}
            </Link>
          </motion.div>

        </motion.div>
        <div className="w-full pt-10 h-fit">
          <ButtonMain onClick={onClick} />
        </div>
      </div>

      <Curve height={height} />
    </motion.div>
  );
}
