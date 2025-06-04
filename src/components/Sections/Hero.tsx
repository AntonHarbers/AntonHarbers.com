import { ChevronDown } from "lucide-react";
import { TypewriterText } from "../TypewriterText";
import Skills from "../Skills";

export default function Hero() {
    return (
        <section className="min-h-[calc(100vh-110px)] md:min-h-screen  flex justify-center relative flex-col">
            <div className="text-center z-10">
                <div className="mt-24">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 select-none">
                        <span className="text-green-400">Anton</span> <span className="dark:text-white text-slate-800">Harbers</span>
                    </h1>
                    <div className="text-xl md:text-2xl text-gray-300 h-8 select-none">
                        <TypewriterText text="Full-Stack Web & Indie Game Dev" delay={80} />
                    </div>
                </div>
                <Skills />
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <a className="cursor-pointer" href="#about"><ChevronDown className="w-8 h-8 text-green-400" /></a>
            </div>
        </section>)
}
