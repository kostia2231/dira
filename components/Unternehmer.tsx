"use client";

import ButtonSecond from "./ButtonSecond";
import ParallaxImageOne from "./ParallaxImageOne";
import TextAnimation from "./TextAnimation";
import PartnersLogo from "./PartnersLogo";
import Footer from "./Footer";
import { useTranslations } from "next-intl";

export default function Unternehmer() {
  const t = useTranslations("unternehmer");

  return (
    <>
      <div className="border-t max-[600px]:hidden rounded">
        <ParallaxImageOne imageUrl="/images/22_sm.webp" speed={-10} />
      </div>
      <div className="border-t min-[600px]:hidden">
        <ParallaxImageOne imageUrl="/images/22_sm.webp" speed={0} />
      </div>
      <div className="border-t grid grid-cols-2 max-[600px]:grid-cols-1">
        <div className="p-5 flex justify-between text-[rgba(44,67,102,1)]">
          <TextAnimation>
            <p className="text-[75px] leading-[80px] max-[600px]:text-[28px] max-[600]:leading-[36px]">
              {t("titleLine1")}
              <br />
              {t("titleLine2")}
            </p>
          </TextAnimation>
          {/* <div className="h-3.5 w-3.5 rounded-full bg-[rgb(14,41,94)]"></div> */}
        </div>

        <div className="border-l text-2xl flex flex-col h-fit text-gray-500 pb-5 max-[600px]:text-[16px] max-[600px]:leading-[24px]">
          <div className="p-5 border-b max-[600px]:border-t">
            <TextAnimation>
              <p
                dangerouslySetInnerHTML={{ __html: t.raw("description1") }}
              />
            </TextAnimation>
          </div>
          <div className="text-[16px] leading-[24px] p-5 pb-10">
            <TextAnimation>
              <p
                dangerouslySetInnerHTML={{ __html: t.raw("description2") }}
              />
            </TextAnimation>
          </div>
          <div className="px-5">
            <ButtonSecond btnText={t("buttonBook")} />
          </div>
        </div>
      </div>
      <div className="h-fit">
        <PartnersLogo />
      </div>
      <Footer />
    </>
  );
}
