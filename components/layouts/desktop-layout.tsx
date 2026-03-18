import { HeroScrollDemo } from "@/components/hero-scroll-demo";
import { AboutSection } from "@/components/about-section";
import { GitHubStatsSection } from "@/components/github-stats";
import { HeroBlock } from "@/components/ui/hero-block-shadcnui";
import { GlowingEffectDemo } from "@/components/glowing-effect-demo";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import GalleryDemo from "@/components/gallery-demo";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TextReveal } from "@/components/ui/text-reveal";
import { GitHubRepo } from "@/components/projects";
import { GalleryImage } from "@/lib/gallery";

export function DesktopLayout({ projects, galleryImages }: { projects: GitHubRepo[], galleryImages: GalleryImage[] }) {
    return (
        <main className="min-h-screen text-slate-200 selection:bg-white selection:text-black font-[family-name:var(--font-geist-sans)]">
            {/* Ambient Background Elements */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_50%)]" />
            <div className="fixed bottom-0 right-0 w-[500px] h-[500px] pointer-events-none -z-10 bg-[radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.02),transparent_70%)] blur-[100px]" />

            {/* Header Navigation */}
            <header className="fixed top-0 w-full z-50 px-6 py-6 flex justify-center">
                <nav className="flex justify-between items-center px-8 py-4 bg-zinc-950/60 backdrop-blur-xl border border-white/5 rounded-2xl shadow-elevated w-full max-w-6xl">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-black text-black text-sm">N</div>
                        <div className="text-lg font-bold tracking-tighter text-white">NIHAL</div>
                    </div>

                    <div className="hidden md:flex gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
                        <a href="#about" className="hover:text-white transition-colors duration-300">Bio</a>
                        <a href="#projects" className="hover:text-white transition-colors duration-300">Artifacts</a>
                        <a href="#github" className="hover:text-white transition-colors duration-300">Ecosystem</a>
                        <a href="#contact" className="hover:text-white transition-colors duration-300">Communicate</a>
                    </div>

                    <div className="flex gap-4 items-center">
                        <a href="https://github.com/nihal4808" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <Github size={18} />
                        </a>
                        <a href="https://www.instagram.com/___niha.l___" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <Instagram size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/muhammed-nihal-k-p-864230291" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <Linkedin size={18} />
                        </a>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <HeroBlock />

            {/* About Section */}
            <ScrollReveal delay={0.1}>
                <AboutSection />
            </ScrollReveal>

            {/* Core Pillars - Glowing Effect Section */}
            <ScrollReveal delay={0.1} className="py-32 px-6 max-w-7xl mx-auto" id="pillars">
                <section>
                    <div className="mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full bg-white/5 mb-6">
                            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">System Capabilities</span>
                        </div>
                        <TextReveal
                            text="Core Engineering Pillars"
                            className="text-5xl md:text-6xl font-bold text-white tracking-tighter"
                        />
                    </div>
                    <GlowingEffectDemo />
                </section>
            </ScrollReveal>

            {/* Featured Projects 3D Scroll */}
            <ScrollReveal delay={0.1} className="w-full" id="projects">
                <section>
                    <HeroScrollDemo projects={projects} />
                </section>
            </ScrollReveal>

            {/* GitHub Ecosystem */}
            <ScrollReveal delay={0.1} id="github">
                <section>
                    <GitHubStatsSection repos={projects} />
                </section>
            </ScrollReveal>

            {/* 3D Photography Gallery */}
            <ScrollReveal delay={0.1} className="py-32 px-6 max-w-[1400px] mx-auto" id="gallery">
                <section>
                    <div className="mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full bg-white/5 mb-6">
                            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Visual Data</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
                            Gallery
                        </h2>
                    </div>
                    <GalleryDemo images={galleryImages} />
                </section>
            </ScrollReveal>

            {/* Contact Section */}
            <ScrollReveal delay={0.1} className="py-40 px-6 max-w-5xl mx-auto relative" id="contact">
                <section>
                    <div className="glass-premium rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group border-white/10">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[100px] -z-10 group-hover:bg-white/20 transition-all duration-1000"></div>

                        <span className="text-silver-accent font-black uppercase text-[11px] tracking-[0.4em] mb-8 block">Project Initiation</span>
                        <div className="flex justify-center mb-10">
                            <TextReveal
                                text="WANT TO COLLABORATE?"
                                className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none"
                            />
                        </div>

                        <p className="text-slate-300 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto">
                            Currently available for innovative AI software partnerships and full-stack engineering roles.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16">
                            <a href="mailto:muhamednihal190@gmail.com" className="flex items-center gap-3 text-white hover:text-slate-300 transition-colors group">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-500 shadow-clean hover:shadow-elevated">
                                    <Mail size={22} />
                                </div>
                                <span className="font-bold text-lg">Email</span>
                            </a>
                            <a href="https://www.instagram.com/___niha.l___" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-slate-300 transition-colors group">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-500 shadow-clean hover:shadow-elevated">
                                    <Instagram size={22} />
                                </div>
                                <span className="font-bold text-lg">Instagram</span>
                            </a>
                            <a href="https://github.com/nihal4808" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-slate-300 transition-colors group">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-500 shadow-clean hover:shadow-elevated">
                                    <Github size={22} />
                                </div>
                                <span className="font-bold text-lg">GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/muhammed-nihal-k-p-864230291" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-slate-300 transition-colors group">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-500 shadow-clean hover:shadow-elevated">
                                    <Linkedin size={22} />
                                </div>
                                <span className="font-bold text-lg">LinkedIn</span>
                            </a>
                        </div>

                        <a href="mailto:muhamednihal190@gmail.com" className="btn-primary px-16 py-6 text-lg tracking-widest uppercase inline-block shadow-elevated hover:shadow-floating">
                            INITIATE DATA STREAM
                        </a>
                    </div>
                </section>
            </ScrollReveal>

            {/* Footer */}
            <footer className="py-20 px-6 border-t border-white/5 relative overflow-hidden bg-transparent">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center font-black text-black text-[10px]">N</div>
                            <span className="text-lg font-bold text-white tracking-widest uppercase">Muhammed Nihal KP</span>
                        </div>
                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">© 2026 // BUILD v4.2.0-STABLE</p>
                    </div>

                    <div className="flex gap-10">
                        <a href="https://github.com/nihal4808" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white font-black text-[10px] uppercase tracking-widest transition-colors">Github</a>
                        <a href="https://www.linkedin.com/in/muhammed-nihal-k-p-864230291" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white font-black text-[10px] uppercase tracking-widest transition-colors">LinkedIn</a>
                        <a href="https://www.instagram.com/___niha.l___" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white font-black text-[10px] uppercase tracking-widest transition-colors">Instagram</a>
                    </div>

                    <div className="text-center md:text-right">
                        <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Coded in South India</p>
                        <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center md:justify-end gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse"></span> SYSTEM HEALTH: NOMINAL
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
