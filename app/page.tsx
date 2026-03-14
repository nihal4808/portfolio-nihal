import { fetchGitHubProjects } from "@/components/projects";
import { HeroScrollDemo } from "@/components/hero-scroll-demo";
import { AboutSection } from "@/components/about-section";
import { GitHubStatsSection } from "@/components/github-stats";
import { HeroBlock } from "@/components/ui/hero-block-shadcnui";
import Image from "next/image";
import { Github, Linkedin, Instagram, Mail, ExternalLink, ChevronRight } from "lucide-react";

export default async function Home() {
    const projects = await fetchGitHubProjects('nihal4808');

    return (
        <main className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-[#38bdf8] selection:text-[#0f172a] font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
            {/* Ambient Background Elements */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.05),transparent_50%)]" />
            <div className="fixed bottom-0 right-0 w-[500px] h-[500px] pointer-events-none -z-10 bg-[radial-gradient(circle_at_100%_100%,rgba(34,197,94,0.03),transparent_70%)] blur-[100px]" />

            {/* Header Navigation */}
            <header className="fixed top-0 w-full z-50 px-6 py-6 flex justify-center">
                <nav className="flex justify-between items-center px-8 py-4 bg-[#1e293b]/60 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl w-full max-w-6xl">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#38bdf8] rounded-lg flex items-center justify-center font-black text-[#0f172a] text-sm">N</div>
                        <div className="text-lg font-bold tracking-tighter text-white">NIHAL</div>
                    </div>

                    <div className="hidden md:flex gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
                        <a href="#about" className="hover:text-[#38bdf8] transition-colors duration-300">Bio</a>
                        <a href="#projects" className="hover:text-[#38bdf8] transition-colors duration-300">Artifacts</a>
                        <a href="#github" className="hover:text-[#38bdf8] transition-colors duration-300">Ecosystem</a>
                        <a href="#contact" className="hover:text-[#38bdf8] transition-colors duration-300">Communicate</a>
                    </div>

                    <div className="flex gap-4 items-center">
                        <a href="https://github.com/nihal4808" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                            <Github size={18} />
                        </a>
                        <a href="https://www.instagram.com/___niha.l___" target="_blank" className="text-slate-400 hover:text-[#38bdf8] transition-colors">
                            <Instagram size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/muhammed-nihal-k-p-864230291" target="_blank" className="text-slate-400 hover:text-[#38bdf8] transition-colors">
                            <Linkedin size={18} />
                        </a>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <HeroBlock />

            {/* About Section */}
            <AboutSection />

            {/* Featured Projects 3D Scroll */}
            <section id="projects" className="w-full">
                <HeroScrollDemo projects={projects} />
            </section>

            {/* GitHub Ecosystem */}
            <section id="github">
                <GitHubStatsSection repos={projects} />
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-40 px-6 max-w-5xl mx-auto relative">
                <div className="glass rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-[#38bdf8]/5 rounded-full blur-[100px] -z-10 group-hover:bg-[#38bdf8]/10 transition-all duration-1000"></div>

                    <span className="text-[#38bdf8] font-black uppercase text-[11px] tracking-[0.4em] mb-8 block">Project Initiation</span>
                    <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-none">
                        WANT TO <span className="italic">COLLABORATE?</span>
                    </h2>

                    <p className="text-slate-400 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto">
                        Currently available for innovative AI software partnerships and full-stack engineering roles.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16">
                        <a href="mailto:muhamednihal190@gmail.com" className="flex items-center gap-3 text-white hover:text-[#38bdf8] transition-colors group">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:glow-primary group-hover:border-[#38bdf8]/30 transition-all duration-500">
                                <Mail size={22} />
                            </div>
                            <span className="font-bold text-lg">Email</span>
                        </a>
                        <a href="https://www.instagram.com/___niha.l___" target="_blank" className="flex items-center gap-3 text-white hover:text-[#38bdf8] transition-colors group">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:glow-primary group-hover:border-[#38bdf8]/30 transition-all duration-500">
                                <Instagram size={22} />
                            </div>
                            <span className="font-bold text-lg">Instagram</span>
                        </a>
                        <a href="https://github.com/nihal4808" target="_blank" className="flex items-center gap-3 text-white hover:text-[#38bdf8] transition-colors group">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:glow-primary group-hover:border-[#38bdf8]/30 transition-all duration-500">
                                <Github size={22} />
                            </div>
                            <span className="font-bold text-lg">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/muhammed-nihal-k-p-864230291" target="_blank" className="flex items-center gap-3 text-white hover:text-[#38bdf8] transition-colors group">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:glow-primary group-hover:border-[#38bdf8]/30 transition-all duration-500">
                                <Linkedin size={22} />
                            </div>
                            <span className="font-bold text-lg">LinkedIn</span>
                        </a>
                    </div>

                    <a href="mailto:muhamednihal190@gmail.com" className="btn-primary px-16 py-6 text-lg tracking-widest uppercase">
                        INITIATE DATA STREAM
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 px-6 border-t border-white/5 bg-[#0f172a] relative overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-[#38bdf8] rounded-md flex items-center justify-center font-black text-[#0f172a] text-[10px]">N</div>
                            <span className="text-lg font-bold text-white tracking-widest uppercase">Muhammed Nihal KP</span>
                        </div>
                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">© 2026 // BUILD v4.2.0-STABLE</p>
                    </div>

                    <div className="flex gap-10">
                        <a href="https://github.com/nihal4808" target="_blank" className="text-slate-500 hover:text-[#38bdf8] font-black text-[10px] uppercase tracking-widest transition-colors">Github</a>
                        <a href="https://www.linkedin.com/in/muhammed-nihal-k-p-864230291" target="_blank" className="text-slate-500 hover:text-[#38bdf8] font-black text-[10px] uppercase tracking-widest transition-colors">LinkedIn</a>
                        <a href="https://www.instagram.com/___niha.l___" target="_blank" className="text-slate-500 hover:text-[#38bdf8] font-black text-[10px] uppercase tracking-widest transition-colors">Instagram</a>
                    </div>

                    <div className="text-center md:text-right">
                        <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Coded in South India</p>
                        <p className="text-[#22c55e] text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center md:justify-end gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse"></span> SYSTEM HEALTH: NOMINAL
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
