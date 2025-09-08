import Welcome from "../../../components/Welcome"
import Coaching from "../../../components/Coaching"
import Unternehmer from "../../../components/Unternehmer"
import GradientMain from "../../../three/GradientMain"
import HeaderSecond from "../../../components/HeaderSecond"
import Revealer from "../../../components/Revealer"
import GradientMobile from "../../../three/GradientMobile"

export default function Home() {
  return <>
    <Revealer />
    <GradientMain />
    {/* сделать мобильный элемент */}
    <div className="relative px-2.5 pb-2.5 hidden max-[600px]:block h-[100svh]">
      <div className="pt-[85px] h-full">
        <GradientMobile />
      </div>
    </div>
    {/**/}
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
