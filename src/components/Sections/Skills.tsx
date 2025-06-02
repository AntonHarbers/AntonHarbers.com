import { skills } from "@/lib/data";
import { AlgorithmVisualization } from "../AlgorithmVisualization";

export default function Skills() {
    return (
        < section id="skills" className="py-20 bg-gray-900/50 relative z-10" >
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-green-400">Technical Skills</h2>
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-6">Programming Languages & Frameworks</h3>
                            <div className="space-y-4">
                                {skills.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-2">
                                            <span>{skill.name}</span>
                                            <span className="text-green-400">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                                                style={{ width: `${skill.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-6">Algorithm Visualization</h3>
                            <AlgorithmVisualization />
                        </div>
                    </div>
                </div>
            </div>
        </section >)
}
