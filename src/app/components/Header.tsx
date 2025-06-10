import Logo from "./icons/LogoDira"
import ButtonMain from "./ButtonMain"

export default function Header() {
  return (
    <header className="bg-dira-blue p-5 flex justify-between items-center sticky top-0">
      <Logo />
      <div className="flex gap-5 justify-center items-center text-color-light">
        <a href="">Über Uns</a>
        <a href="">Coaching</a>
        <a href="">Für Unternehmer</a>
        <a href="">Jobangebote</a>
        <a href="">Partner</a>
        <a href="">Kontakt</a>
        <p>|</p>
        <p className="font-extrabold">DE</p>
      </div>
      <div><ButtonMain /></div>
    </header>
  )
}
