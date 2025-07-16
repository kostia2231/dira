import { FC } from "react";
import ArrowUp from "./icons/ArrowUp"

type ButtonSecondProps = {
  btnText: string;
  onClick?: () => void
}

const ButtonSecond: FC<ButtonSecondProps> = ({ btnText, onClick }) => {
  return <button onClick={onClick} className="btn-animation rounded-[2px] cursor-pointer text-color-light text-[16px] uppercase w-full text-left pt-5 pb-2.5 px-2.5">
    <span className="flex items-center justify-between">
      {btnText}
      <ArrowUp />
    </span>
  </button>;
};

export default ButtonSecond;
