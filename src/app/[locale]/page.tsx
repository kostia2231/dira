import Welcome from "../../../components/Welcome"
import Coaching from "../../../components/Coaching"
import Unternehmer from "../../../components/Unternehmer"
import Gradient from "../../../three/Gradient"

export default function Home() {
  return <>
    <section className="relative">
      <Gradient />
      <div>
        <Welcome />
        <Coaching />
        <Unternehmer />
      </div>
    </section>
  </>
}
