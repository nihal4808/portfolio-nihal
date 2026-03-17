"use client";

import React, { useState, useEffect } from "react";
import { GitHubRepo } from "@/components/projects";
import { GalleryImage } from "@/lib/gallery";
import { Github, Linkedin, Instagram, Mail, FolderGit2, Link as LinkIcon, ChevronDown, ChevronUp, Cpu, Server, Code, ArrowRight } from "lucide-react";
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

function MobileProjectCard({ repo }: { repo: GitHubRepo }) {
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-xl"
        >
            <div className="p-5 flex flex-col gap-3">
                <div className="flex items-start justify-between">
                    <div className="bg-white/10 p-2.5 rounded-xl border border-white/5">
                        <FolderGit2 size={20} className="text-white" />
                    </div>
                    <div className="flex gap-2">
                        <a href={repo.html_url} target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full text-slate-400 hover:text-white border border-white/5">
                            <Github size={16} />
                        </a>
                        {repo.homepage && (
                            <a href={repo.homepage} target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full text-slate-400 hover:text-white border border-white/5">
                                <LinkIcon size={16} />
                            </a>
                        )}
                    </div>
                </div>

                <h3 className="text-lg font-bold text-white capitalize tracking-tight mt-1">
                    {repo.name.replace(/-/g, ' ')}
                </h3>

                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                    {repo.description || "Building future-ready solutions with modern tech stacks."}
                </p>

                <div className="flex items-center justify-between mt-3">
                    {repo.language && (
                        <span className="text-[10px] px-3 py-1 bg-white/10 text-slate-300 font-bold rounded-full uppercase tracking-wider">
                            {repo.language}
                        </span>
                    )}
                    <button
                        onClick={handleExpand}
                        className="text-[11px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1 active:text-white"
                    >
                        {isExpanded ? "Close" : "Readme"}
                        {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
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
                        <div className="p-5 text-xs text-slate-400 leading-relaxed font-mono overflow-x-auto max-h-64 overflow-y-auto">
                            {loading ? (
                                <div className="flex items-center justify-center p-4">
                                    <div className="w-5 h-5 border-2 border-slate-500 border-t-white rounded-full animate-spin"></div>
                                </div>
                            ) : (
                                <div className="prose prose-invert prose-xs max-w-none whitespace-pre-wrap">
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

export function MobileLayout({ projects, galleryImages }: { projects: GitHubRepo[], galleryImages: GalleryImage[] }) {
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["hero", "about", "projects", "github", "contact"];
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top >= -100 && rect.top <= 300) {
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
            window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
        }
        setActiveSection(id);
    };

    return (
        <main className="min-h-screen bg-black text-slate-200 font-[family-name:var(--font-geist-sans)] pb-24 relative selection:bg-white selection:text-black">
            {/* Ambient Background Elements */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_50%)]" />
            <div className="fixed bottom-0 right-0 w-[500px] h-[500px] pointer-events-none -z-10 bg-[radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.02),transparent_70%)] blur-[100px]" />

            {/* Top Bar */}
            <header className="fixed top-0 left-0 w-full z-50 p-4 bg-black/60 backdrop-blur-xl border-b border-white/10 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-white rounded-md flex items-center justify-center font-black text-black text-xs">N</div>
                    <span className="text-base font-bold tracking-tighter text-white">NIHAL</span>
                </div>
                <div className="flex gap-3">
                    <a href="https://github.com/nihal4808" target="_blank" rel="noreferrer" className="p-1.5 text-slate-400"><Github size={18} /></a>
                    <a href="https://www.linkedin.com/in/muhammed-nihal-k-p-864230291" target="_blank" rel="noreferrer" className="p-1.5 text-slate-400"><Linkedin size={18} /></a>
                </div>
            </header>

            {/* Floating Bottom Nav */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
                <nav className="bg-zinc-900/80 backdrop-blur-2xl border border-white/10 rounded-full px-4 py-3 flex justify-around items-center shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                    {[
                        { id: "hero", label: "Home", icon: <Cpu size={18} /> },
                        { id: "about", label: "Bio", icon: <Code size={18} /> },
                        { id: "projects", label: "Work", icon: <FolderGit2 size={18} /> },
                        { id: "github", label: "Code", icon: <Server size={18} /> },
                        { id: "contact", label: "Mail", icon: <Mail size={18} /> },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            className={`flex flex-col items-center gap-1 transition-all duration-300 p-2 rounded-xl
                                ${activeSection === item.id ? "text-white bg-white/10" : "text-slate-500 hover:text-slate-300"}
                            `}
                        >
                            {item.icon}
                            <span className="text-[9px] uppercase font-bold tracking-wider">{item.label}</span>
                        </button>
                    ))}
                </nav>
            </div>

            <div className="px-5 pt-24 flex flex-col gap-20">

                {/* Hero Section */}
                <section id="hero" className="min-h-[80vh] flex flex-col justify-center items-center text-center relative py-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-[80px] -z-10" />

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="mb-8 inline-block"
                        >
                            <div className="mx-auto h-24 w-24 rounded-2xl border-2 border-white/10 bg-white/5 overflow-hidden relative p-1 glass">
                                <div className="w-full h-full rounded-xl overflow-hidden relative">
                                    <Image
                                        src="/nihal-avatar.png"
                                        alt="Muhammed Nihal KP"
                                        fill
                                        className="object-cover grayscale"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/20 rounded-full bg-white/5 mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                            <span className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em]">Full Stack Developer</span>
                        </div>

                        <h1 className="text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6">
                            BUILDING <br />
                            <span className="text-slate-500 italic">NEXT GEN</span> <br />
                            SOFTWARE
                        </h1>

                        <p className="text-slate-400 text-sm font-medium mb-10 max-w-[280px] mx-auto leading-relaxed">
                            Crafting high-performance web applications and AI integrations with modern technologies.
                        </p>

                        <button
                            onClick={() => scrollTo("projects")}
                            className="btn-primary w-full max-w-[280px] bg-white text-black py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(255,255,255,0.2)] focus:scale-95 transition-transform"
                        >
                            View Projects
                        </button>
                    </motion.div>
                </section>

                {/* About Section */}
                <section id="about" className="scroll-mt-24">
                    <AboutSection />
                </section>

                {/* Glowing Pillars */}
                <section className="scroll-mt-24">
                    <div className="mb-8 px-2">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] block mb-2">System Architecture</span>
                        <h2 className="text-3xl font-black text-white tracking-tighter">Core Pillars</h2>
                    </div>
                    <div className="px-1">
                        <GlowingEffectDemo />
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="scroll-mt-24 w-full">
                    <div className="mb-8">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] block mb-2">Portfolio</span>
                        <h2 className="text-3xl font-black text-white tracking-tighter">Artifacts</h2>
                    </div>

                    <div className="flex flex-col gap-6">
                        {projects.slice(0, 6).map((repo) => (
                            <MobileProjectCard key={repo.id} repo={repo} />
                        ))}
                    </div>
                </section>

                {/* GitHub Stats */}
                <section id="github" className="scroll-mt-24">
                    <GitHubStatsSection repos={projects} />
                </section>

                {/* Gallery */}
                <section id="gallery" className="scroll-mt-24">
                    <div className="mb-8">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] block mb-2">Visual Data</span>
                        <h2 className="text-3xl font-black text-white tracking-tighter">Photography</h2>
                    </div>
                    <GalleryDemo images={galleryImages} />
                </section>

                {/* Contact Section */}
                <section id="contact" className="scroll-mt-24">
                    <div className="p-8 rounded-3xl bg-zinc-900 border border-white/10 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_70%)]" />

                        <h2 className="text-3xl font-black text-white tracking-tighter mb-4">Let's Talk</h2>
                        <p className="text-sm text-slate-400 mb-8 max-w-[250px] mx-auto">
                            Available for new opportunities and interesting projects.
                        </p>

                        <a
                            href="mailto:muhamednihal190@gmail.com"
                            className="flex items-center justify-center gap-2 bg-white text-black py-4 px-6 rounded-xl font-bold tracking-widest text-sm uppercase shadow-lg w-full active:scale-95 transition-transform"
                        >
                            <Mail size={18} /> Email Me
                        </a>

                        <div className="flex justify-center gap-4 mt-8">
                            <a href="https://github.com/nihal4808" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-xl text-white border border-white/10 active:bg-white/10">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/muhammed-nihal-k-p-864230291" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-xl text-white border border-white/10 active:bg-white/10">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://www.instagram.com/___niha.l___" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-xl text-white border border-white/10 active:bg-white/10">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-10 text-center flex flex-col gap-4 items-center">
                    <div className="w-8 h-8 flex items-center justify-center bg-white text-black font-black text-sm rounded-lg">N</div>
                    <div>
                        <p className="text-white font-bold tracking-widest text-sm uppercase mb-1">Muhammed Nihal KP</p>
                        <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">© 2026 // BUILD v4.2.0-STABLE</p>
                    </div>
                </footer>

            </div>
        </main>
    );
}
