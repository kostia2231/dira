import Welcome from "./components/Welcome"
import Coaching from "./components/Coaching"
import Unternehmer from "./components/Unternehmer"
import PartnersLogo from "./components/PartnersLogo"
// import Address from "./components/Address"

export default function Home() {
  return <>
    <section>
      <Welcome />
      <Coaching />
      <Unternehmer />
      <PartnersLogo />
      {/* <Address /> */}
    </section>
  </>
}
