// "use client"
import { Manrope } from "next/font/google";
import "../globals.css";
import Header from "../../../components/Header";
import HeaderMobile from "../../../components/mobile/HeaderMobile";
import { Providers } from "../providers";

import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';


const manrope = Manrope({
  variable: "--font-manrope-sans",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {

  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${manrope.variable} antialiased`} id="__next">
        <NextIntlClientProvider>
          <Providers>

            <HeaderMobile />
            <Header />
            {children}

          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
