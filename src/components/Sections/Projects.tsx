import { projects } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, } from "../ui/card";
import { ExternalLink, Gamepad2, Github, Globe } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { VscLibrary } from "react-icons/vsc";
export default function Projects() {
    return (
        <section id="projects" className="py-20 relative z-10">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-green-400 select-none">Featured Projects</h2>
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <Card
                                key={index}
                                className="dark:bg-gray-900 bg-slate-500 border-gray-700 hover:border-green-400 transition-all duration-300 group"
                            >
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-green-400 group-hover:text-green-300 select-none">{project.title}</CardTitle>
                                        <div className="flex items-center space-x-2">
                                            {project.type === "web" ? (
                                                <Globe className="w-5 h-5 text-blue-400" />
                                            ) : project.type === "game" ? (
                                                <Gamepad2 className="w-5 h-5 text-purple-400" />
                                            ) : project.type === "library" ? (
                                                <VscLibrary className="w-5 h-5 text-yellow-400" />
                                            ) : null}
                                        </div>
                                    </div>
                                    <CardDescription className="text-gray-300 select-none">{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2 mb-4 ">
                                        {project.tech.map((tech) => (
                                            <Badge key={tech} variant="secondary" className="bg-gray-800 text-green-400 select-none">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                    <div className="flex space-x-4">
                                        {project.github && project.github !== "" && (
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                                            >
                                                <a href={project.github} className="flex" target="_blank">

                                                    <Github className="w-4 h-4 mr-2" />
                                                    Code
                                                </a>
                                            </Button>
                                        )}

                                        {project.demo && project.demo !== "" && (
                                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                                <a href={project.demo} className="flex" target="_blank">

                                                    <ExternalLink className="w-4 h-4 mr-2" />
                                                    Demo
                                                </a>

                                            </Button>
                                        )}

                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>)
}
