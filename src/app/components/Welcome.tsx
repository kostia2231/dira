import ButtonSecond from "./ButtonSecond"
import DownArrow from "./icons/DownArrow"

export default function Welcome() {
  return <>
    <div className="min-h-screen">
      <div>
        <p className="text-[85px] leading-[85px] p-5 border-b">Willkommen <br />
          bei <a className="w-fit text-color-dira-blue">Ihrer Arbeitsvermittlung</a> <br />
          mit Herz und Verstand</p>
      </div>
      <div className="grid grid-cols-2 text-2xl">
        <div className="p-5 pb-0 flex justify-between flex-col h-full">
          <div className="flex justify-between">
            <p>Seit über 20 Jahren</p>
            <div className="h-3.5 w-3.5 rounded-full bg-black"></div>
          </div>
          <DownArrow />
        </div>
        <div className="p-5 pb-0  border-l grid gap-5">
          <p>begleiten wir Menschen auf ihrem Weg in den deutschen Arbeitsmarkt — <span className="important-word">persönlich</span>, <span className="important-word">engagiert</span> und <span className="important-word">mit viel Erfahrung</span>.
            Ob Neustart oder nächster Karriereschritt — <span className="important-word">wir gehen ihn gemeinsam mit Ihnen!</span></p>
          <ButtonSecond btnText="Kostenlose Erstberatung" />
        </div>
      </div>
    </div>
  </>
}
