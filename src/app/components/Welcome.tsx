import ButtonSecond from "./ButtonSecond"
import DownArrow from "./icons/DownArrow"

export default function Welcome() {
  return <>
    <div className="min-h-screen">
      <div>
        <p className="text-[75px] leading-[75px] p-5 pt-10 border-b text-[rgba(10,33,61,1)]">Willkommen <br />
          bei <a className="w-fit text-color-dira-blue">Ihrer Arbeitsvermittlung</a> <br />
          mit Herz und Verstand</p>
      </div>
      <div className="grid grid-cols-2 text-2xl">
        <div className="p-5 pb-0 flex justify-between flex-col h-full">
          <div className="flex justify-between text-[rgba(110,110,115,1)]">
            <p className="important-word">Seit über <span>20</span> Jahren</p>
            {/* <div className="h-3.5 w-3.5 rounded-full bg-[rgb(14,41,94)]"></div> */}
          </div>
          <DownArrow />
        </div>
        <div className="p-5 pb-0 pr-0  border-l grid gap-10 text-[rgba(110,110,115,1)]">
          <p className="pr-5">begleiten wir Menschen auf ihrem Weg in den deutschen Arbeitsmarkt — <span className="important-word">persönlich</span>, <span className="important-word">engagiert</span> und <span className="important-word">mit viel Erfahrung</span>.
            Ob Neustart oder nächster Karriereschritt — <span className="important-word">wir gehen ihn gemeinsam mit Ihnen!</span></p>
          <ButtonSecond btnText="Kostenlose Erstberatung" />
        </div>
      </div>
    </div>
  </>
}
