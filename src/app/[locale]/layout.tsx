import "../globals.css"
import HeaderMobile from "../../../components/mobile/HeaderMobile"
import { Providers } from "../providers"
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { Manrope } from "next/font/google"
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

const manrope = Manrope({
  variable: "--font-manrope-sans",
  subsets: ["latin"],
})

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {

  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang={locale}>
      <head>
        <title>DIRA</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={`${manrope.variable} antialiased`} id="__next">
        <NextIntlClientProvider>
          <Providers>
            <HeaderMobile />
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
