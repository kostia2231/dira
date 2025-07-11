'use client';

import ButtonSecond from "./ButtonSecond";
import TextAnimation from "./TextAnimation";
// import ArrowUpBlue from "./icons/ArrowUpBlue"

export default function Welcome() {

  return (
    <>
      <div className="">
        <div>
          <TextAnimation>
            <p className="text-[75px] leading-[80px] p-5 pt-10 border-b text-[rgba(10,33,61,1)]">
              Willkommen <br />
              bei <a className="w-fit text-color-dira-blue">Ihrer Arbeitsvermittlung</a> <br />
              mit Herz und Verstand
            </p>
          </TextAnimation>
        </div>
        <div className="grid grid-cols-2 text-2xl">
          <div className="p-5 flex justify-between flex-col h-full">
            <div className="flex flex-col justify-between text-[rgba(110,110,115,1)] h-full">
              <TextAnimation>
                <p className="important-word">
                  Seit über <span>20</span> Jahren
                </p>
              </TextAnimation>
              <div className="mb-5 text-[16px] leading-[24px] flex items-center cursor-pointer underline-animation w-fit">
              </div>
              {/* <div className="pb-10">

                <DownArrow></DownArrow>
              </div> */}
            </div>
          </div>
          <div className="p-5  pr-0 border-l flex flex-col gap-10 text-[rgba(110,110,115,1)]">
            <TextAnimation>
              <p className="pr-5">
                begleiten wir Menschen auf ihrem Weg in den deutschen Arbeitsmarkt — <span className="important-word">persönlich</span>, <span className="important-word">engagiert</span> und <span className="important-word">mit viel Erfahrung</span>. Ob Neustart
                oder nächster Karriereschritt — <span className="important-word"> wir gehen ihn gemeinsam mit Ihnen!</span>
              </p>
            </TextAnimation>

            <div className="pr-5">

              <ButtonSecond btnText="Kostenlose Erstberatung" />

            </div>
          </div>
        </div>


      </div>

    </>
  );
}
