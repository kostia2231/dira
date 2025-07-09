import Welcome from "./components/Welcome"
import Coaching from "./components/Coaching"
import Unternehmer from "./components/Unternehmer"
import Address from "./components/Address"

export default function Home() {
  return <>
    <section className="mx-[20px] border-l">
      <Welcome />
      <Coaching />
      <Unternehmer />
      <Address />
    </section>
  </>
}
