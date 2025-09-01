import { FC } from "react";
import ArrowUp from "./icons/ArrowUp"

type ButtonSecondProps = {
  btnText: string;
  onClick?: () => void
}

const ButtonSecond: FC<ButtonSecondProps> = ({ btnText, onClick }) => {
  return <button onClick={onClick} className="font-[600] tracking-wide btn-animation rounded-[5px] cursor-pointer text-color-light text-[16px] uppercase w-full text-left p-5">
    <span className="flex items-center justify-between">
      {btnText}
      <ArrowUp />
    </span>
  </button>;
};

export default ButtonSecond;
