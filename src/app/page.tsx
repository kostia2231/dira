import Header from "./components/Header"
import Welcome from "./components/Welcome"
import Footer from "./components/Footer"
import Coaching from "./components/Coaching"

export default function Home() {
  return <>
    <Header />
    <section className="mx-[20px] border-l">
      <Welcome />
      <Coaching />
    </section>
    <Footer />
  </>
}
