import ButtonSecond from "./ButtonSecond"

export default function Unternehmer() {
  return (
    <>
      <div className="border-t min-h-screen grid grid-cols-2">
        <div className="p-5 flex justify-between text-[rgba(10,33,61,1)]">
          <p className="text-[80px] leading-[80px]">Für
            <br />
            Unternehmer</p>
          {/* <div className="h-3.5 w-3.5 rounded-full bg-[rgb(14,41,94)]"></div> */}

        </div>

        <div className="border-l p-5 text-2xl grid gap-10 h-fit pb-0 text-[rgba(110,110,115,1)]">
          <p>Für Unternehmen bieten wir passgenaue Bewerbervorschläge,
            professionelle Vorauswahl und Beratung bei Personalfragen — <span className="important-word">schnell</span>,
            <span className="important-word"> effizient</span> und <span className="important-word">menschlich</span>.</p>
          <ButtonSecond btnText="Mehr erfahren" />

        </div>
      </div>
    </>
  )
}
