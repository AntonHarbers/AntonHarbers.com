import Navbar from "./components/Navbar"
import About from "./components/Sections/About"
import Hero from "./components/Sections/Hero"
import Projects from "./components/Sections/Projects"
import Contact from "./components/Sections/Contact"
import Footer from "./components/Sections/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

