type ButtonMainProps = {
  onClick: () => void;
};

export default function ButtonMain({ onClick }: ButtonMainProps) {
  return <button onClick={onClick} className=" rounded-[2px] uppercase bg-dira-blue py-2.5 px-10 text-[rgba(255,250,240,1)] cursor-pointer">Termin Buchen</button>
}
