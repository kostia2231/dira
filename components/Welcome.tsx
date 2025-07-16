'use client';

import ButtonSecond from "./ButtonSecond";
import TextAnimation from "./TextAnimation";
import { useTranslations } from "next-intl";

export default function Welcome() {
  const t = useTranslations("welcome");
  const tBtn = useTranslations("buttons");

  return (
    <div>
      <div className="border-b p-5 pt-10">
        <TextAnimation>
          <p
            className="text-[75px] leading-[80px] text-[rgba(44,67,102,1)]"
            dangerouslySetInnerHTML={{ __html: t("headline") }}
          />
        </TextAnimation>
      </div>

      <div className="grid grid-cols-2 text-2xl">
        <div className="p-5 flex justify-between flex-col h-full">
          <div className="flex flex-col justify-between text-[rgba(110,110,115,1)] h-full">
            <TextAnimation>
              <p className="important-word underline underline-offset-10 decoration-2">
                {t("leftColumn.since", { count: t("leftColumn.count") })}
              </p>
            </TextAnimation>
            <div className="mb-5 text-[16px] leading-[24px] flex items-center cursor-pointer underline-animation w-fit" />
          </div>
        </div>

        <div className="p-5 pr-0 border-l flex flex-col gap-10 text-[rgba(110,110,115,1)]">
          <TextAnimation>
            <p className="pr-5">
              {t.rich("rightColumn.paragraph", {
                personal: (chunks) => <span className="important-word">{chunks}</span>,
                engaged: (chunks) => <span className="important-word">{chunks}</span>,
                experienced: (chunks) => <span className="important-word">{chunks}</span>,
                together: (chunks) => <span className="important-word">{chunks}</span>,
              })}
            </p>
          </TextAnimation>

          <div className="pr-5">
            <ButtonSecond btnText={tBtn("titleAdvise")} />
          </div>
        </div>
      </div>
    </div>
  );
}
