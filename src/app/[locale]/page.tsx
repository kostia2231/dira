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
    <div className="px-2.5 pb-2.5 hidden max-[600px]:block h-[100svh] text-[rgba(255,250,240,1)]">
      <div className="relative pt-[85px] h-full">
        <GradientMobile />
        <div className="absolute top-[85px]">
          <div className="px-2.5 pt-5 text-[28px] leading-[36px]">
            Ihr Weg <br />
            zur neuen Anstellung
          </div>
        </div>
        {/*<div className="p-2.5 pt-5 opacity-50">KOSTENLOSE ERSTBERATUNG</div>*/}
        <div className="absolute bottom-[5px] w-full text-center">
          <div className="py-5 opacity-50">Weiter scrollen</div>
        </div>
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
