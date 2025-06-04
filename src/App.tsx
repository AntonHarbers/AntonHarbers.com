import Navbar from "./components/Navbar"
import About from "./components/Sections/About"
import Hero from "./components/Sections/Hero"
import Projects from "./components/Sections/Projects"
import Contact from "./components/Sections/Contact"
import Footer from "./components/Sections/Footer"
import { DarkModeToggle } from "./components/DarkModeToggle"

export default function App() {
  return (
    <div className="min-h-screen bg-slate-400 dark:bg-black text-white relative overflow-hidden">
      <div className="absolute top-20 right-4 z-50">
        <DarkModeToggle />
      </div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

