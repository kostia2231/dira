import Footer from "../../../../components/Footer"
import Header from "../../../../components/HeaderSecond"

export default function Kontakte() {
  return (
    <>
      <Header />
      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  return [{ locale: 'de' }, { locale: 'ru' }, { locale: 'ua' }];
}
