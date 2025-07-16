'use client';

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const locales = ["de", "ru", "ua"];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null)

  const parts = pathname?.split("/") || [];
  const currentLocale = locales.includes(parts[1]) ? parts[1] : "de"; // fallback
  const restOfPath = parts.slice(2).join("/");

  const switchLanguage = (newLocale: string) => {
    setIsOpen(false);
    router.push(`/${newLocale}/${restOfPath}`);
  };


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="uppercase cursor-pointer"
      >
        {currentLocale}
      </button>

      {isOpen && (
        <ul className="absolute top-full left-0  bg-dira-light border rounded-[2px] z-50 p-5 grid gap-5">
          {locales
            .filter((locale) => locale !== currentLocale)
            .map((locale) => (
              <li key={locale}>
                <button
                  onClick={() => switchLanguage(locale)}
                  className="block w-full text-left underline-animation cursor-pointer"
                >
                  {locale.toUpperCase()}
                </button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
