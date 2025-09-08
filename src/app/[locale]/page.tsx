import Welcome from "../../../components/Welcome"
import Coaching from "../../../components/Coaching"
import Unternehmer from "../../../components/Unternehmer"
import Gradient from "../../../three/Gradient"
import HeaderSecond from "../../../components/HeaderSecond"

export default function Home() {
  return <>
    <Gradient />
    <section>
      <HeaderSecond />
      <Welcome />
      <Coaching />
      <Unternehmer />
    </section>
  </>
}

export async function generateStaticParams() {
  return [{ locale: 'de' }, { locale: 'ru' }, { locale: 'ua' }]
}
