"use client";

import React, { useState, useEffect } from "react";
import { GitHubRepo } from "@/components/projects";
import { GalleryImage } from "@/lib/gallery";
import { Github, Linkedin, Instagram, Mail, FolderGit2, Link as LinkIcon, ChevronDown, ChevronUp, Cpu, Server, Code, ArrowRight, Camera } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { AboutSection } from "@/components/about-section";
import { GitHubStatsSection } from "@/components/github-stats";
import { GlowingEffectDemo } from "@/components/glowing-effect-demo";
import GalleryDemo from "@/components/gallery-demo";

// Helper function to extract snippet from readme
async function fetchRepoReadme(username: string, repoName: string): Promise<string> {
    try {
        const response = await fetch(`https://raw.githubusercontent.com/${username}/${repoName}/main/README.md`);
        if (!response.ok) {
            const masterResponse = await fetch(`https://raw.githubusercontent.com/${username}/${repoName}/master/README.md`);
            if (!masterResponse.ok) return "";
            return await masterResponse.text();
        }
        return await response.text();
    } catch {
        return "";
    }
}

function TabletProjectCard({ repo }: { repo: GitHubRepo }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [readme, setReadme] = useState<string>("");
    const [loading, setLoading] = useState(false);

    const handleExpand = async () => {
        if (!isExpanded && !readme) {
            setLoading(true);
            const md = await fetchRepoReadme('nihal4808', repo.name);
            setReadme(md || "No detailed documentation available.");
            setLoading(false);
        }
        setIsExpanded(!isExpanded);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-xl"
        >
            <div className="p-6 flex flex-col gap-4 h-full">
                <div className="flex items-start justify-between">
                    <div className="bg-white/10 p-3 rounded-xl border border-white/5">
                        <FolderGit2 size={24} className="text-white" />
                    </div>
                    <div className="flex gap-2">
                        <a href={repo.html_url} target="_blank" rel="noreferrer" className="p-2.5 bg-white/5 rounded-full text-slate-400 hover:text-white border border-white/5 transition-colors">
                            <Github size={18} />
                        </a>
                        {repo.homepage && (
                            <a href={repo.homepage} target="_blank" rel="noreferrer" className="p-2.5 bg-white/5 rounded-full text-slate-400 hover:text-white border border-white/5 transition-colors">
                                <LinkIcon size={18} />
                            </a>
                        )}
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white capitalize tracking-tight mt-2">
                    {repo.name.replace(/-/g, ' ')}
                </h3>

                <p className="text-slate-400 text-sm font-medium leading-relaxed flex-grow">
                    {repo.description || "Building future-ready solutions with modern tech stacks."}
                </p>

                <div className="flex items-center justify-between mt-4">
                    {repo.language && (
                        <span className="text-[11px] px-3 py-1.5 bg-white/10 text-slate-300 font-bold rounded-full uppercase tracking-wider">
                            {repo.language}
                        </span>
                    )}
                    <button
                        onClick={handleExpand}
                        className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                    >
                        {isExpanded ? "Close" : "Readme"}
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden border-t border-white/5 bg-black/40"
                    >
                        <div className="p-6 text-sm text-slate-400 leading-relaxed font-mono overflow-x-auto max-h-80 overflow-y-auto">
                            {loading ? (
                                <div className="flex items-center justify-center p-6">
                                    <div className="w-6 h-6 border-2 border-slate-500 border-t-white rounded-full animate-spin"></div>
                                </div>
                            ) : (
                                <div className="prose prose-invert prose-sm max-w-none whitespace-pre-wrap">
                                    {readme}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export function TabletLayout({ projects, galleryImages }: { projects: GitHubRepo[], galleryImages: GalleryImage[] }) {
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["hero", "about", "projects", "contact"];
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top >= -100 && rect.top <= 400) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const yOffset = -100;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
        setActiveSection(id);
    };

    return (
        <main className="min-h-screen bg-black text-slate-200 font-[family-name:var(--font-geist-sans)] pb-24 relative selection:bg-white selection:text-black">
            {/* Ambient Background Elements */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_50%)]" />
            <div className="fixed bottom-0 right-0 w-[500px] h-[500px] pointer-events-none -z-10 bg-[radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.02),transparent_70%)] blur-[100px]" />

            {/* Top Bar - Tablet Style */}
            <header className="fixed top-0 left-0 w-full z-50 px-8 py-5 flex justify-center">
                <nav className="flex justify-between items-center px-8 py-4 bg-zinc-950/80 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl w-full max-w-3xl">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-black text-black text-sm">N</div>
                        <div className="text-lg font-bold tracking-tighter text-white">NIHAL</div>
                    </div>

                    <div className="flex gap-6 items-center">
                        {[
                            { id: "hero", label: "Home" },
                            { id: "about", label: "Bio" },
                            { id: "projects", label: "Work" },
                            { id: "github", label: "Code" },
                            { id: "gallery", label: "Gallery" },
                            { id: "contact", label: "Contact" },
                        ].map(item => (
                            <button
                                key={item.id}
                                onClick={() => scrollTo(item.id)}
                                className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors ${activeSection === item.id ? "text-white" : "text-slate-500 hover:text-slate-300"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </nav>
            </header>

            <div className="px-10 pt-32 max-w-4xl mx-auto flex flex-col gap-28">

                {/* Hero Section */}
                <section id="hero" className="min-h-[70vh] flex flex-col justify-center items-center text-center relative py-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-[100px] -z-10" />

                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="max-w-2xl">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="mb-8 inline-block"
                        >
                            <div className="mx-auto h-32 w-32 rounded-3xl border-2 border-white/10 bg-white/5 overflow-hidden relative p-1 glass shadow-2xl">
                                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                                    <Image
                                        src="/nihal-avatar.png"
                                        alt="Muhammed Nihal KP"
                                        fill
                                        className="object-cover grayscale"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full bg-white/5 mb-8">
                            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                            <span className="text-xs font-bold text-slate-300 uppercase tracking-[0.2em]">Full Stack Developer</span>
                        </div>

                        <h1 className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-[1.05] mb-8">
                            BUILDING <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-white italic">NEXT GEN</span> <br />
                            SOFTWARE
                        </h1>

                        <p className="text-slate-400 text-base md:text-lg font-medium mb-12 max-w-md mx-auto leading-relaxed">
                            Crafting high-performance web applications and AI integrations with modern technologies tailored for scale.
                        </p>

                        <div className="flex justify-center gap-6">
                            <button
                                onClick={() => scrollTo("projects")}
                                className="btn-primary px-8 py-5 bg-white text-black rounded-xl font-bold uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform"
                            >
                                Explore Artifacts
                            </button>
                            <a href="https://github.com/nihal4808" target="_blank" rel="noreferrer" className="px-8 py-5 flex items-center justify-center gap-3 bg-white/5 text-white border border-white/20 rounded-xl hover:bg-white/10 transition-colors">
                                <Github size={20} /> <span className="font-bold tracking-wider uppercase text-sm">GitHub</span>
                            </a>
                        </div>
                    </motion.div>
                </section>

                {/* About Section */}
                <section id="about" className="scroll-mt-32">
                    <AboutSection />
                </section>

                {/* Glowing Pillars */}
                <section className="scroll-mt-32">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] block mb-3">System Architecture</span>
                        <h2 className="text-4xl font-black text-white tracking-tighter">Core Pillars</h2>
                    </div>
                    <GlowingEffectDemo />
                </section>

                {/* Projects Section */}
                <section id="projects" className="scroll-mt-32 w-full">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] block mb-3">Portfolio</span>
                        <h2 className="text-4xl font-black text-white tracking-tighter">Featured Artifacts</h2>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        {projects.slice(0, 6).map((repo) => (
                            <TabletProjectCard key={repo.id} repo={repo} />
                        ))}
                    </div>
                </section>

                {/* GitHub Stats */}
                <section id="github" className="scroll-mt-32">
                    <GitHubStatsSection repos={projects} />
                </section>

                {/* Gallery */}
                <section id="gallery" className="scroll-mt-32">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] block mb-3">Visual Data</span>
                        <h2 className="text-4xl font-black text-white tracking-tighter">Photography Gallery</h2>
                    </div>
                    <GalleryDemo images={galleryImages} />
                </section>

                {/* Contact Section */}
                <section id="contact" className="scroll-mt-32">
                    <div className="p-16 rounded-[3rem] bg-zinc-900 border border-white/10 text-center relative overflow-hidden flex flex-col items-center">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none" />

                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6 relative z-10">Initiate Collaboration</h2>
                        <p className="text-base text-slate-400 mb-12 max-w-md relative z-10">
                            Currently available for innovative full-stack engineering roles and high-impact AI partnerships.
                        </p>

                        <div className="flex gap-6 w-full max-w-lg mb-12 relative z-10">
                            <a
                                href="mailto:muhamednihal190@gmail.com"
                                className="flex-1 flex items-center justify-center gap-3 bg-white text-black py-5 rounded-2xl font-bold tracking-widest text-sm uppercase shadow-xl hover:scale-105 transition-transform"
                            >
                                <Mail size={20} /> Data Stream
                            </a>
                            <a
                                href="https://github.com/nihal4808"
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 flex items-center justify-center gap-3 bg-white/5 text-white border border-white/20 py-5 rounded-2xl font-bold tracking-widest text-sm uppercase hover:bg-white/10 transition-colors"
                            >
                                <Github size={20} /> GitHub
                            </a>
                        </div>

                        <div className="flex justify-center gap-8 relative z-10">
                            <a href="https://www.linkedin.com/in/muhammed-nihal-k-p-864230291" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 font-bold uppercase tracking-wider text-xs">
                                <Linkedin size={18} /> LinkedIn
                            </a>
                            <a href="https://www.instagram.com/___niha.l___" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 font-bold uppercase tracking-wider text-xs">
                                <Instagram size={18} /> Instagram
                            </a>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-12 border-t border-white/5 flex justify-between items-center text-left">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 flex items-center justify-center bg-white text-black font-black text-xs rounded-lg">N</div>
                        <div>
                            <p className="text-white font-bold tracking-widest text-xs uppercase mb-1">Muhammed Nihal KP</p>
                            <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">© 2026 // BUILD v4.2.0</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">South India</p>
                        <p className="text-emerald-400/70 text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-end gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> NOMINAL
                        </p>
                    </div>
                </footer>

            </div>
        </main>
    );
}
