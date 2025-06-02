import { ChevronDown, Code, Gamepad2, Globe } from "lucide-react";
import { Button } from "../ui/button";
import { TypewriterText } from "../TypewriterText";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative">
            <div className="text-center z-10">
                <div className="mb-6">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">
                        <span className="text-green-400">Anton</span> <span className="text-white">Harbers</span>
                    </h1>
                    <div className="text-xl md:text-2xl text-gray-300 h-8">
                        <TypewriterText text="Full-Stack Web & Indie Game Dev" delay={80} />
                    </div>
                </div>

                <div className="flex justify-center space-x-4 mb-8">
                    <div className="flex items-center space-x-2 bg-gray-900 px-4 py-2 rounded-lg">
                        <Globe className="w-5 h-5 text-blue-400" />
                        <span>Web Apps</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-gray-900 px-4 py-2 rounded-lg">
                        <Gamepad2 className="w-5 h-5 text-purple-400" />
                        <span>Games</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-gray-900 px-4 py-2 rounded-lg">
                        <Code className="w-5 h-5 text-green-400" />
                        <span>Algorithms</span>
                    </div>
                </div>

                <div className="flex justify-center space-x-4 cursor-pointer">
                    <Button className="bg-green-600 hover:bg-green-700"><a className="cursor-pointer" href="#projects">View My Work</a></Button>

                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <a className="cursor-pointer" href="#about"><ChevronDown className="w-8 h-8 text-green-400" /></a>

            </div>
        </section>)
}
