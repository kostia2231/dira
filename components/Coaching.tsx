"use client";

import ButtonSecond from "./ButtonSecond";
import ParallaxImageOne from "./ParallaxImageOne";
import TextAnimation from "./TextAnimation";
import { useTranslations } from "next-intl";

export default function Coaching() {
  const t = useTranslations("coaching");
  const points = t.raw("points");

  return (
    <>
      <div className="border-t max-[600px]:hidden">
        <ParallaxImageOne imageUrl="/images/12_sm.webp" speed={-10} />
      </div>
      <div className="border-t grid grid-cols-2 max-[600px]:grid-cols-1">
        <div className="p-5 min-[600px]:pb-0 flex flex-col justify-between h-full">
          <div className="flex justify-between text-[rgba(44,67,102,1)]">
            <TextAnimation>
              <p className="text-[75px] leading-[80px] max-[600px]:text-[28px] max-[600]:leading-[36px]">{t("title")}</p>
            </TextAnimation>
          </div>
        </div>
        <div className="border-l">
          <div className="text-2xl text-[rgba(44,67,102,1)] max-[600px]:text-[16px] max-[600px]:leading-[24px]">
            {Array.isArray(points) &&
              points.map((point: string, i: number) => (
                <div key={i} className="min-[600px]:border-b max-[600px]:border-t p-5">
                  <TextAnimation>
                    <p className="important-word">• {point}</p>
                  </TextAnimation>
                </div>
              ))}
          </div>
          <div className="p-5 pr-0 flex gap-5 flex-col max-[600px]:border-t">
            <TextAnimation>
              <div
                className="pr-5 mb-5 text-gray-500"
                dangerouslySetInnerHTML={{ __html: t.raw("description") }}
              />
            </TextAnimation>
            <div className="flex flex-col gap-5 pr-5">
              <ButtonSecond btnText={t("buttonMore")} />
              <ButtonSecond btnText={t("buttonJobs")} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
