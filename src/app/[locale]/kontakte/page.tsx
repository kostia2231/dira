import Footer from "../../../../components/Footer"
import Header from "../../../../components/HeaderSecond"
import Revealer from "../../../../components/Revealer";

export default function Kontakte() {
  return (
    <>
      <Revealer />
      <Header />
      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  return [{ locale: 'de' }, { locale: 'ru' }, { locale: 'ua' }];
}
