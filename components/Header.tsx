"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./icons/LogoDira";
import ButtonMain from "./ButtonMain";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";

export default function Header() {
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
    `underline-animation ${path?.startsWith(withLocale(href))
      ? "text-gray-500 transition-all duration-400"
      : ""
    }`;

  return (
    <header
      id="site-header"
      className="font-semibold z-50 p-5 flex justify-between items-center sticky top-0 w-full bg-dira-light-opacity backdrop-blur-xl border-b"
    >
      <Link href={locale ? `/${locale}` : "/"}>
        <Logo className="h-10 w-auto" />
      </Link>

      <nav className="flex gap-5 justify-center items-center text-[rgba(44,67,102,1)]">
        <Link href={withLocale("/uber-uns")} className={linkClass("/uber-uns")}>
          {t("about")}
        </Link>

        <Link href={withLocale("/coaching")} className={linkClass("/coaching")}>
          {t("coaching")}
        </Link>

        <a onClick={onClick} className="cursor-pointer underline-animation">
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
  );
}
