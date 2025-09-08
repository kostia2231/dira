import Welcome from "../../../components/Welcome"
import Coaching from "../../../components/Coaching"
import Unternehmer from "../../../components/Unternehmer"
import Gradient from "../../../three/Gradient"
import Header from "../../../components/HeaderSecond"

export default function Home() {
  return <>
    <Gradient />
    <section>
      <Header />
      <Welcome />
      <Coaching />
      <Unternehmer />
    </section>
  </>
}
