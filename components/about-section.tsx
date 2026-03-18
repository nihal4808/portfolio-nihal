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
        <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="space-y-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full bg-white/8 backdrop-blur-md shadow-clean">
                        <span className="w-2 h-2 rounded-full bg-white/60 animate-pulse"></span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Architecture Brief</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight">
                        Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-white bg-[length:200%_auto] animate-text-shimmer">Intelligence</span> <br />
                        of Tomorrow.
                    </h2>

                    <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                        I am <span className="text-white font-bold text-glow">Muhammed Nihal KP</span>, a final-year AI & Data Engineering student at <span className="text-white font-bold">MES College of Engineering</span>.
                        I am dedicated to engineering high-performance AI systems and modern full-stack products that solve complex real-world challenges.
                    </p>

                    <div className="pt-6 flex items-center gap-6">
                        <div className="h-[2px] w-24 bg-gradient-to-r from-white/40 to-transparent"></div>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">EST. 2026 // SYSTEM 01</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {skills.map((skill, index) => (
                        <div 
                            key={index} 
                            className="group p-7 glass-light rounded-2xl border border-white/15 hover:border-white/30 transition-all duration-500 hover:-translate-y-1 shadow-clean hover:shadow-elevated"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${skill.bg} flex items-center justify-center ${skill.color} mb-5 group-hover:from-white/40 group-hover:to-white/20 transition-all duration-500 shadow-clean`}>
                                {skill.icon}
                            </div>
                            <h3 className="text-white font-bold tracking-tight mb-3 text-lg">{skill.name}</h3>
                            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider opacity-80 group-hover:opacity-100 transition-opacity">Expertise Tier 1</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
