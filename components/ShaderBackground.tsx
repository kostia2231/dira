"use client";

import ButtonSecond from "./ButtonSecond";
import TextAnimation from "./TextAnimation";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  const onClick = () => {
    window.open("https://maps.app.goo.gl/H1SEHTy8N4ME7sVX7");
  };

  return (
    <>
      <div className="border-t grid grid-cols-2 border-b">
        <div>
          <div className="flex justify-between text-[rgba(44,67,102,1)]">
            <div className="p-5">
              <TextAnimation>
                <p className="text-[75px] leading-[80px]">{t("contacts")}</p>
              </TextAnimation>
            </div>
            {/* <div className="m-5 h-3.5 w-3.5 rounded-full bg-[rgb(14,41,94)]"></div> */}
          </div>
        </div>
        <div className="text-2xl flex flex-col gap-5 text-[rgba(110,110,115,1)] border-l">
          <div>
            <div className="p-5 border-b">
              <TextAnimation>
                <p>
                  <span className="important-word">{t("addressLabel")}</span>
                  <br />
                  <span>{t("address")}</span>
                </p>
              </TextAnimation>
            </div>

            <div className="py-5 pl-5">
              <TextAnimation>
                <p className="text-[16px] leading-[24px] whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: t("publicTransport") }}
                >
                </p>
              </TextAnimation>
            </div>
          </div>

          <div className="px-5">
            <ButtonSecond onClick={onClick} btnText={t("buttonMap")} />
          </div>

          <div className="p-5 pb-0 border-t">
            <TextAnimation>
              <p>
                <span className="important-word">{t("phoneLabel")}</span>
                <br />
                <span>
                  <a href="tel:+4917621146010" className="underline-animation">
                    +49 ( 176 ) 21 14 6010
                  </a>
                </span>
              </p>
            </TextAnimation>
          </div>

          <div className="p-5 pb-0 border-t">
            <TextAnimation>
              <p>
                <span className="important-word">{t("coachingLabel")}</span>
                <br />
                <span>
                  <a href="mailto:team.coaching@avbr.de" className="underline-animation">
                    team.coaching@avbr.de
                  </a>
                </span>
              </p>
            </TextAnimation>
          </div>

          <div className="p-5 pb-5 border-t">
            <TextAnimation>
              <p>
                <span className="important-word">{t("jobPlacementLabel")}</span>
                <br />
                <span>
                  <a href="mailto:job.vermittlung@avbr.de" className="underline-animation">
                    job.vermittlung@avbr.de
                  </a>
                </span>
              </p>
            </TextAnimation>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 text-[12px] text-[rgba(10,33,61,1)]">
        <div className="p-5 flex gap-5">
          <p className="underline-animation cursor-pointer">{t("nav.startpage")}</p>
          <p className="underline-animation cursor-pointer">{t("nav.about")}</p>
          <p className="underline-animation cursor-pointer">{t("nav.coaching")}</p>
          <p className="underline-animation cursor-pointer">{t("nav.forEntrepreneurs")}</p>
          <p className="underline-animation cursor-pointer">{t("nav.jobOffers")}</p>
        </div>
        <div className="border-l p-5 flex justify-between">
          <div className="flex gap-5">
            <p className="underline-animation cursor-pointer">{t("nav.mission")}</p>
            <p className="underline-animation cursor-pointer">{t("nav.imprintPrivacy")}</p>
          </div>
          <div className="flex justify-center items-center">
            <p className="ml-auto">© 2025</p>
          </div>
        </div>
      </div>
    </>
  );
}
