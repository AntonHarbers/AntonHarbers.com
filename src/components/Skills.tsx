import { useEffect, useRef, useState, type ReactNode } from "react";
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaUnity } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiNextdotjs, SiGodotengine, SiPostgresql, SiTailwindcss, SiMongodb, SiDrizzle, SiMysql } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
const ICONS: [ReactNode, string][] = [

    [<SiJavascript size={40} title="JavaScript" />, "#F7DF1E"],
    [<SiTypescript size={40} title="TypeScript" />, "#007ACC"],
    [<SiTailwindcss size={40} title="Tailwind CSS" />, "#38B2AC"],
    [<FaNodeJs size={40} title="Node.js" />, "#3C873A"],
    [<FaReact size={40} title="React" />, "#61DAFB"],
    [<SiNextdotjs size={40} title="Next.js" />, "#000000"],
    [<SiPostgresql size={40} title="PostgreSQL" />, "#336791"],
    [<SiMongodb size={40} title="MongoDB" />, "#4DB33D"],
    [<SiDrizzle size={40} title="Drizzle" />, "#000000"],
    [<SiMysql size={40} title="MySQL" />, "#DE8D01"],
    [<FaPython size={40} title="Python" />, "#3776AB"],
    [<FaGitAlt size={40} title="Git" />, "#F05032"],
    [<SiGodotengine size={40} title="Godot" />, "#458DC0"],
    [<FaUnity size={40} title="Unity" />, "#808080"],
    [<TbBrandCSharp size={40} title="C#" />, "#2390C0"],
];

export default function Skills() {
    const trackRef = useRef<HTMLDivElement>(null);
    const [rowWidth, setRowWidth] = useState(0);
    const [offset, setOffset] = useState(0);
    const [hovered, setHovered] = useState<number | null>(null);

    // Measure row width after render and on resize
    useEffect(() => {
        const measure = () => {
            if (trackRef.current) {
                setRowWidth(Math.round(trackRef.current.offsetWidth));
            }
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    // Animate ticker
    useEffect(() => {
        if (!rowWidth) return;
        let raf: number;
        const SPEED = 80; // px/sec
        let lastTime = performance.now();

        const animate = (now: number) => {
            const dt = (now - lastTime) / 1000;
            lastTime = now;
            setOffset((prev) => {
                const next = prev + SPEED * dt;
                if (next >= rowWidth) return next - rowWidth;
                return next;
            });
            raf = requestAnimationFrame(animate);
        };
        raf = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(raf);
    }, [rowWidth]);

    // Renders the icons, with dynamic hover color
    function renderIcons(startIdx = 0) {
        return ICONS.map(([icon, color], idx) => {
            const index = startIdx + idx;
            const isHovered = hovered === index;
            return (
                <span
                    key={index}
                    className="opacity-80 px-6 hover:scale-125 transition ease-in-out duration-200"
                    style={{
                        color: isHovered ? color : "#22c55e", // Tailwind's green-400 hex
                    }}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                >
                    {icon}
                </span>
            );
        });
    }

    return (
        <section id="skills" className="pt-20 relative z-10">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-6 ">Profficient In</h2>
                <div className="mx-auto max-w-3xl">
                    <div className="relative h-20 overflow-hidden border border-green-700 rounded-xl bg-gray-800">
                        <div
                            className="flex items-center h-full absolute"
                            style={{
                                transform: `translateX(-${Math.round(offset)}px)`,
                                transition: "none",
                                whiteSpace: "nowrap",
                                willChange: "transform"
                            }}
                        >
                            <div ref={trackRef} className="flex">
                                {renderIcons(0)}
                            </div>
                            <div className="flex">
                                {renderIcons(ICONS.length)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
