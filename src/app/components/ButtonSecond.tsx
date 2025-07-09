import { FC } from "react";
import ArrowUp from "./icons/ArrowUp"

type ButtonSecondProps = {
  btnText: string;
  onClick?: () => void
}

const ButtonSecond: FC<ButtonSecondProps> = ({ btnText, onClick }) => {
  return <button onClick={onClick} className="rounded-[2px] cursor-pointer flex items-center justify-between text-color-light text-black text-[16px] uppercase bg-dira-blue w-full text-left pt-5 pb-2.5 px-2.5">
    <div>
      {btnText}
    </div>
    <ArrowUp />
  </button>;
};

export default ButtonSecond;
