import { Github, Mail } from "lucide-react";
import { Button } from "../ui/button";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-gray-900/50 relative z-10">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-green-400">Let's Connect</h2>
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-gray-300 mb-8 text-lg">
                        Ready to bring fresh perspectives and technical skills to your team. Let's discuss how I can contribute to
                        your next project.
                    </p>
                    <div className="flex justify-center space-x-6">
                        <Button className="bg-green-600 hover:bg-green-700 cursor-pointer">
                            <Mail className="w-5 h-5 mr-2" />
                            Email Me
                        </Button>
                        <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black cursor-pointer">
                            <a href="https://github.com/antonharbers" className="flex" target="_blank"><Github className="w-5 h-5 mr-2" />
                                GitHub</a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>)
}
