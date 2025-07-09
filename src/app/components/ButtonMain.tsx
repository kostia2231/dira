type ButtonMainProps = {
  onClick: () => void;
};

export default function ButtonMain({ onClick }: ButtonMainProps) {
  return <button onClick={onClick} className="rounded-[2px] uppercase bg-dira-light py-2.5 px-10 text-[rgba(72,72,72,1)] cursor-pointer">Termin Buchen</button>
}
