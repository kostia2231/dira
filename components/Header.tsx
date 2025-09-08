"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslations } from "next-intl"
import Logo from "./icons/LogoDira"
import ButtonMain from "./ButtonMain"
import LanguageSwitcher from "./LanguageSwitcher"

export default function Header() {
  const t = useTranslations("header")
  const locales = ["de", "ru", "ua"]
  const path = usePathname()
  const parts = path?.split("/") || []
  const locale = parts[1] && locales.includes(parts[1]) ? parts[1] : undefined

  const onClick = () => {
    window.open("https://calendly.com/loxonnron/30min")
  }

  const withLocale = (href: string) => (locale ? `/${locale}${href}` : href)

  const linkClass = (href: string) =>
    `underline-animation-light ${path?.startsWith(withLocale(href))
      ? "text-gray-500 transition-all duration-400"
      : ""
    }`

  return (
    <div className="p-5 absolute z-100 w-full">
      <header
        id="site-header"
        className="max-[600px]:hidden rounded-[5px] font-semibold z-50 p-5 flex justify-between items-center w-full"
      >
        <Link href={locale ? `/${locale}` : "/"}>
          <Logo className="h-9 w-auto" />
        </Link>

        <nav className="flex gap-5 justify-center items-center text-[rgba(255,250,240,1)]">
          <Link href={withLocale("/uber-uns")} className={linkClass("/uber-uns")}>
            {t("about")}
          </Link>

          <Link href={withLocale("/coaching")} className={linkClass("/coaching")}>
            {t("coaching")}
          </Link>

          <a onClick={onClick} className="cursor-pointer underline-animation-light">
            {t("business")}
          </a>

          <Link href={withLocale("/jobangebote")} className={linkClass("/jobangebote")}>
            {t("jobs")}
          </Link>

          <Link href={withLocale("/kontakte")} className={linkClass("/kontakte")}>
            {t("contacts")}
          </Link>

          <div>
            <LanguageSwitcher />
          </div>
        </nav>

        <div>
          <ButtonMain onClick={onClick} />
        </div>
      </header>
    </div>
  )
}
