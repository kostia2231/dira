import { useTranslations } from "next-intl";

type ButtonMainProps = {
  onClick: () => void;
};

export default function ButtonMain({ onClick }: ButtonMainProps) {
  const tBtn = useTranslations("buttons");

  return <button onClick={onClick} className="btn-animation rounded-[2px] uppercase py-2.5 px-10 text-[rgba(255,250,240,1)] cursor-pointer font-[600] tracking-wide w-full"><span>{tBtn("titleBooking")}</span></button>
}
