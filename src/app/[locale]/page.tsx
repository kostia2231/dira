import Welcome from "../../../components/Welcome"
import Coaching from "../../../components/Coaching"
import Unternehmer from "../../../components/Unternehmer"
import GradientMain from "../../../three/GradientMain"
import HeaderSecond from "../../../components/HeaderSecond"
import Revealer from "../../../components/Revealer"
import GradientMobile from "../../../three/GradientMobile"
import DownArrow from "../../../components/icons/ArrowUp"

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

        <div className="absolute bottom-0 p-2.5 w-full text-center flex flex-col gap-2.5 text-[rgba(255,250,240,1)] font-semibold">
          <div className="bg-[rgba(255,250,240,0.2)] rounded-[15px] flex flex-col gap-5 p-2.5 pb-5 brightness-105">
            {/*<div className="text-left w-full">Willkommen <br /> bei Ihrer Arbeitsvermittlung mit Herz und Verstand!</div>*/}
            <div className="text-left px-5 uppercase p-5 rounded-[5px] bg-[rgba(44,67,102,0.6)] brightness-105 flex gap-2.5 justify-between items-center w-full">
              <div className="flex justify-between items-center w-fit">
                Jetzt Telefonieren
              </div>
              <DownArrow />
            </div>
            <div className="text-left px-5 uppercase p-5 rounded-[5px] bg-[rgba(44,67,102,0.6)] brightness-105 flex justify-between items-center w-full">
              <div className="">
                Termin Vereinbaren
              </div>
              <DownArrow />
            </div>
            <div className="text-center px-2.5 flex items-center justify-center gap-2.5">
              <div>Weiter lesen</div>
            </div>
          </div>
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
