import Header from "./components/Header"
import Welcome from "./components/Welcome"
// import Footer from "./components/Footer"

export default function Home() {
  return <>
    <Header />
    <section className="mx-[20px] border-l min-h-screen">
      <Welcome />
    </section>
    {/* <Footer /> */}
  </>
}
