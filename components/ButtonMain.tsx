import { useTranslations } from "next-intl";

type ButtonMainProps = {
  onClick: () => void;
};

export default function ButtonMain({ onClick }: ButtonMainProps) {
  const tBtn = useTranslations("buttons");

  return <button onClick={onClick} className="flex btn-animation rounded-[5px] uppercase py-3 px-10 text-[rgba(255,250,240,1)] cursor-pointer font-[600] tracking-wide w-full">
    <div>
      <span>{tBtn("titleBooking")}</span>
    </div>
  </button>
}
