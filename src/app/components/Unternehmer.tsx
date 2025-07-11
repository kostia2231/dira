import ButtonSecond from "./ButtonSecond"
import ParallaxImageOne from "../components/ParallaxImageOne"
import TextAnimation from "./TextAnimation"
import PartnersLogo from "./PartnersLogo"
import Footer from "./Footer";


export default function Unternehmer() {
  return (
    <>
      <div className="border-t">
        <ParallaxImageOne imageUrl="/images/22_sm.webp" speed={-10} />
      </div>
      <div className="border-t grid grid-cols-2">
        <div className="p-5 flex justify-between text-[rgba(10,33,61,1)]">
          <TextAnimation>
            <p className="text-[75px] leading-[80px]">Für
              <br />
              Unternehmer</p>
          </TextAnimation>

          {/* <div className="h-3.5 w-3.5 rounded-full bg-[rgb(14,41,94)]"></div> */}

        </div>

        <div className="border-l text-2xl flex flex-col h-fit text-[rgba(110,110,115,1)] pb-5">
          <div className="p-5 border-b">
            <TextAnimation>
              <p>Für Unternehmen bieten wir passgenaue Bewerbervorschläge,
                professionelle Vorauswahl und Beratung bei Personalfragen — <span className="important-word">schnell</span>,
                <span className="important-word"> effizient</span> und <span className="important-word">menschlich</span>.
              </p>
            </TextAnimation>
          </div>
          <TextAnimation>
            <div className="text-[16px] leading-[24px] p-5 pb-10">
              Wenn es in Ihrem Unternehmen gerade hakt – sei es bei der Integration neuer Mitarbeitender, bei Umstrukturierungen oder Personalentwicklung – stehen wir Ihnen mit unserer <span className="important-word">Unternehmensberatung</span> und unseren <span className="important-word">Coachings</span> zur Seite.
            </div>
          </TextAnimation>
          <div className="px-5">
            <ButtonSecond btnText="Termin buchen" />
          </div>
        </div>
      </div>
      <div className="h-fit">
        <PartnersLogo />
      </div>
      <Footer />

    </>
  )
}
