import { FC } from "react"

type ButtonSecondProps = {
  btnText: string
  onClick?: () => void
}

const ButtonTransp: FC<ButtonSecondProps> = ({ btnText, onClick }) => {
  return (<>
    <button onClick={onClick} className="h-fit font-[600] tracking-wide rounded-[5px] cursor-pointer text-color-light text-[16px] uppercase w-full text-left p-5">
      <span className="flex items-center justify-between">
        {btnText}
      </span>
    </button>
  </>)
}

export default ButtonTransp
