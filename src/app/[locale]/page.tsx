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
    <div className="relative pt-[85px] px-2.5">
      <div>
        <GradientMobile />
      </div>
      <div className="absolute top-[85px] p-2.5 gap-5 text-[rgba(255,250,240,1)] flex flex-col">
        <div className=" text-[28px] leading-[36px]">Ihr Weg <br />
          zur neuen Anstellung</div>
        <div className="font-semibold">Kostenlose Erstberatung</div>
      </div>
    </div>
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
