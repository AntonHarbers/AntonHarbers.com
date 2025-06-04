import { Github, Mail } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 relative bg-gray-900/50 z-10">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-green-400 select-none">About Me</h2>
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 select-none">Self-Taught Developer</h3>
                            <p className="text-gray-300 mb-6 select-none">
                                Passionate about creating digital experiences that solve real-world problems. Started my journey with
                                online tutorials in 2020 before going through the odin project in 2023, building everything from web applications to interactive
                                games. Currently working my way through data structures and algorithms.
                            </p>

                            <div className="flex space-x-4">
                                <a href="https://github.com/antonharbers" target="_blank" className="text-green-400 hover:text-green-300">
                                    <Github className="w-6 h-6" />
                                </a>
                                <a href="#contact" className="text-green-400 hover:text-green-300">
                                    <Mail className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                        <div className="dark:bg-gray-900 bg-slate-400 p-6 rounded-lg">
                            <h4 className="text-lg font-semibold mb-4 text-green-400 select-none">Learning Journey</h4>
                            <div className="space-y-3">
                                <div className="flex justify-between select-none">
                                    <span>Frontend Development</span>
                                    <span className="text-green-400 font-bold">4+ years</span>
                                </div>
                                <div className="flex justify-between select-none">
                                    <span>Backend Development</span>
                                    <span className="text-green-400 font-bold">2+ years</span>
                                </div>
                                <div className="flex justify-between font-bold select-none">
                                    <span>Game Development</span>
                                    <span className="text-green-400 font-bold">4+ year</span>
                                </div>
                                <div className="flex justify-between select-none">
                                    <span>Algorithm Study</span>
                                    <span className="text-green-400 font-bold">Ongoing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}
