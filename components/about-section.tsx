import React from "react";
import { Cpu, Code2, Eye, Zap, Layers, Terminal } from "lucide-react";

const skills = [
    { name: "AI / Machine Learning", icon: <Cpu size={20} />, color: "text-white/90", bg: "bg-white/10" },
    { name: "Computer Vision", icon: <Eye size={20} />, color: "text-slate-400", bg: "bg-white/5" },
    { name: "Web Development", icon: <Code2 size={20} />, color: "text-white/90", bg: "bg-white/10" },
    { name: "OpenCV / YOLO", icon: <Layers size={20} />, color: "text-slate-400", bg: "bg-white/5" },
    { name: "Python / Flutter", icon: <Terminal size={20} />, color: "text-white/90", bg: "bg-white/10" },
    { name: "Cloud Systems", icon: <Zap size={20} />, color: "text-slate-400", bg: "bg-white/5" },
];

export function AboutSection() {
    return (
        <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full bg-white/5 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                        <span className="w-2 h-2 rounded-full bg-white/40 animate-pulse"></span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Architecture Brief</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight">
                        Building the <span className="text-glow text-white/90">Intelligence</span> <br />
                        of Tomorrow.
                    </h2>

                    <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                        I am <span className="text-white font-bold">Muhammed Nihal KP</span>, a final-year AI & Data Engineering student at <span className="text-white font-bold text-glow">MES College of Engineering</span>.
                        I am dedicated to engineering high-performance AI systems and modern full-stack products that solve complex real-world challenges.
                    </p>

                    <div className="pt-4 flex items-center gap-6">
                        <div className="h-[2px] w-20 bg-gradient-to-r from-white/20 to-transparent"></div>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">EST. 2026 // SYSTEM 01</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                        <div key={index} className="group p-6 glass rounded-2xl hover:border-white/20 transition-all duration-500 hover:-translate-y-1">
                            <div className={`w-12 h-12 rounded-xl ${skill.bg} flex items-center justify-center ${skill.color} mb-4 group-hover:glow-primary transition-all duration-500`}>
                                {skill.icon}
                            </div>
                            <h3 className="text-white font-bold tracking-tight mb-2">{skill.name}</h3>
                            <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Expertise Tier 1</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
