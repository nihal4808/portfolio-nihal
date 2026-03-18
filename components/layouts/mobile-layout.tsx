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

    const placeholderImages = [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&auto=format&fit=crop"
    ];

    const imgIndex = repo.id % placeholderImages.length;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            className="flex flex-col bg-gradient-to-br from-white/10 to-white/3 backdrop-blur-lg border border-white/15 rounded-3xl overflow-hidden shadow-elevated hover:shadow-floating transition-all duration-300 active:scale-95"
        >
            {/* Image Section */}
            <div className="w-full h-40 overflow-hidden relative bg-gradient-to-b from-white/10 to-black">
                <img
                    src={placeholderImages[imgIndex]}
                    alt={repo.name}
                    className="w-full h-full object-cover opacity-50 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                {/* Language Badge */}
                {repo.language && (
                    <div className="absolute top-4 right-4 backdrop-blur-md bg-white/20 border border-white/30 px-3 py-1.5 rounded-full">
                        <span className="text-xs font-bold text-white uppercase tracking-wider">
                            {repo.language}
                        </span>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col gap-4">
                {/* Header with Icon and Actions */}
                <div className="flex items-start justify-between gap-3">
                    <div className="bg-gradient-to-br from-white/20 to-white/5 p-3 rounded-2xl border border-white/20">
                        <FolderGit2 size={22} className="text-white/90" />
                    </div>
                    <div className="flex gap-2">
                        <a 
                            href={repo.html_url} 
                            target="_blank" 
                            rel="noreferrer"
                            className="p-3 bg-white/12 rounded-2xl text-white border border-white/20 active:bg-white/20 transition-all touch-none"
                        >
                            <Github size={18} />
                        </a>
                        {repo.homepage && (
                            <a 
                                href={repo.homepage} 
                                target="_blank" 
                                rel="noreferrer"
                                className="p-3 bg-white/12 rounded-2xl text-white border border-white/20 active:bg-white/20 transition-all touch-none"
                            >
                                <LinkIcon size={18} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white capitalize tracking-tight leading-tight">
                    {repo.name.replace(/-/g, ' ')}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm font-medium leading-relaxed">
                    {repo.description || "Building future-ready solutions with modern tech stacks."}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                    {repo.language && (
                        <span className="px-3 py-1.5 bg-white/15 text-white text-xs font-bold rounded-full border border-white/20 uppercase tracking-wider">
                            {repo.language}
                        </span>
                    )}
                    <span className="px-3 py-1.5 bg-green-500/20 text-green-300 text-xs font-bold rounded-full border border-green-400/30 uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                        Active
                    </span>
                </div>

                {/* README Toggle Button */}
                <button
                    onClick={handleExpand}
                    className="w-full py-3 mt-2 bg-white/15 hover:bg-white/25 active:bg-white/30 border border-white/20 text-white font-bold rounded-2xl uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-all duration-300"
                >
                    {isExpanded ? "Hide Details" : "View Details"}
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
            </div>

            {/* Expandable README Section */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-white/10 bg-black/40"
                    >
                        <div className="p-6 text-xs text-slate-400 leading-relaxed font-mono max-h-72 overflow-y-auto">
                            {loading ? (
                                <div className="flex items-center justify-center p-6">
                                    <div className="w-6 h-6 border-2 border-slate-500 border-t-white rounded-full animate-spin"></div>
                                </div>
                            ) : (
                                <div className="whitespace-pre-wrap text-slate-300 text-sm leading-relaxed">
                                    {readme.slice(0, 300)}...
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
            const yOffset = -80;
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
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] max-w-sm">
                <nav className="bg-black/70 backdrop-blur-2xl border border-white/15 rounded-2xl px-3 py-3 flex justify-around items-center shadow-deep">
                    {[
                        { id: "hero", label: "Home", icon: <Cpu size={19} /> },
                        { id: "about", label: "Bio", icon: <Code size={19} /> },
                        { id: "projects", label: "Work", icon: <FolderGit2 size={19} /> },
                        { id: "github", label: "Code", icon: <Server size={19} /> },
                        { id: "contact", label: "Chat", icon: <Mail size={19} /> },
                    ].map((item) => (
                        <motion.button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            whileTap={{ scale: 0.9 }}
                            className={`flex flex-col items-center gap-0.5 transition-all duration-300 px-3 py-2 rounded-xl relative
                                ${activeSection === item.id 
                                    ? "text-white" 
                                    : "text-slate-400"
                                }
                            `}
                        >
                            {activeSection === item.id && (
                                <motion.div 
                                    layoutId="active-indicator"
                                    className="absolute inset-0 bg-white/15 rounded-xl -z-10"
                                    transition={{ type: "spring", stiffness: 380, damping: 40 }}
                                />
                            )}
                            <div className={activeSection === item.id ? "glow-accent" : ""}>{item.icon}</div>
                            <span className="text-[8px] uppercase font-bold tracking-wider">{item.label}</span>
                        </motion.button>
                    ))}
                </nav>
            </div>

            <div className="px-4 pt-24 pb-24 flex flex-col gap-20">

                {/* Hero Section */}
                <section id="hero" className="min-h-[88vh] flex flex-col justify-center items-center text-center relative py-16">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-white/8 rounded-full blur-[100px] -z-10" />
                        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -z-10 opacity-50" />
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full px-4"
                    >
                        {/* Avatar */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 25 }}
                            className="mb-10 inline-block"
                        >
                            <div className="mx-auto h-28 w-28 rounded-3xl border-2 border-white/20 bg-gradient-to-br from-white/20 to-white/5 overflow-hidden relative p-1 glass-premium shadow-elevated">
                                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                                    <Image
                                        src="/nihal-avatar.png"
                                        alt="Muhammed Nihal KP"
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Badge */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.25, duration: 0.5 }}
                            className="mb-8 inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full bg-white/8 backdrop-blur-md shadow-clean"
                        >
                            <span className="w-2 h-2 rounded-full bg-white/60 animate-pulse"></span>
                            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Full Stack Engineer</span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35, duration: 0.6 }}
                            className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-[1.15] mb-8"
                        >
                            BUILDING <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-white">
                                THE FUTURE
                            </span> <br />
                            WITH CODE
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45, duration: 0.6 }}
                            className="text-slate-300 text-base font-medium mb-12 max-w-sm mx-auto leading-relaxed"
                        >
                            Crafting high-performance AI systems and modern full-stack applications that solve real-world challenges.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.55, duration: 0.6 }}
                            className="flex flex-col gap-3 w-full max-w-sm mx-auto"
                        >
                            <motion.button
                                onClick={() => scrollTo("projects")}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-white text-black py-5 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-elevated hover:shadow-floating active:shadow-clean transition-all duration-300"
                            >
                                View My Work
                            </motion.button>
                            <motion.button
                                onClick={() => scrollTo("contact")}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-white/15 border border-white/30 text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-white/20 active:bg-white/25 transition-all duration-300"
                            >
                                Get In Touch
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [0, 8, 0] }}
                        transition={{
                            opacity: { delay: 1, duration: 0.6 },
                            y: { delay: 1.2, duration: 1.5, repeat: Infinity },
                        }}
                        className="absolute bottom-20 left-1/2 -translate-x-1/2"
                    >
                        <ChevronDown className="h-5 w-5 text-slate-500" />
                    </motion.div>
                </section>

                {/* About Section */}
                <section id="about" className="scroll-mt-24 w-full">
                    <AboutSection />
                </section>

                {/* Glowing Pillars */}
                <section className="scroll-mt-24 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-10 px-1"
                    >
                        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.3em] block mb-3">Capabilities</span>
                        <h2 className="text-4xl font-black text-white tracking-tighter leading-tight">Core Pillars</h2>
                    </motion.div>
                    <div className="px-1">
                        <GlowingEffectDemo />
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="scroll-mt-24 w-full">
                    <div className="mb-10 px-1">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.3em] block mb-3">Portfolio</span>
                            <h2 className="text-4xl font-black text-white tracking-tighter leading-tight">Featured Work</h2>
                            <p className="text-slate-400 text-sm mt-2">Explore my recent projects and technical artifacts</p>
                        </motion.div>
                    </div>

                    <div className="flex flex-col gap-6">
                        {projects.slice(0, 6).map((repo, idx) => (
                            <motion.div
                                key={repo.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <MobileProjectCard repo={repo} />
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* GitHub Stats */}
                <section id="github" className="scroll-mt-24 w-full">
                    <GitHubStatsSection repos={projects} />
                </section>

                {/* Gallery */}
                <section id="gallery" className="scroll-mt-24 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-10 px-1"
                    >
                        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.3em] block mb-3">Visual Data</span>
                        <h2 className="text-4xl font-black text-white tracking-tighter leading-tight">Photography</h2>
                    </motion.div>
                    <GalleryDemo images={galleryImages} />
                </section>

                {/* Contact Section */}
                <section id="contact" className="scroll-mt-24 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="p-8 rounded-3xl bg-gradient-to-br from-white/12 to-white/3 border border-white/15 text-center relative overflow-hidden shadow-elevated"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)] pointer-events-none" />

                        <h2 className="text-4xl font-black text-white tracking-tighter mb-4 leading-tight">Let's Create Something<br/>Amazing</h2>
                        <p className="text-sm text-slate-300 mb-10 max-w-sm mx-auto leading-relaxed font-medium">
                            I'm always open to exciting opportunities and interesting collaborations.
                        </p>

                        <motion.a
                            href="mailto:muhamednihal190@gmail.com"
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center gap-3 bg-white text-black py-5 px-8 rounded-2xl font-bold tracking-widest text-base uppercase shadow-elevated hover:shadow-floating active:shadow-clean w-full transition-all mb-6"
                        >
                            <Mail size={20} /> Get In Touch
                        </motion.a>

                        <div className="border-t border-white/10 pt-8">
                            <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-6">Available on all platforms</p>
                            <div className="flex justify-center gap-4 flex-wrap">
                                <motion.a 
                                    href="https://github.com/nihal4808" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    whileTap={{ scale: 0.9 }}
                                    className="p-4 bg-white/12 rounded-2xl text-white border border-white/20 active:bg-white/20 transition-all touch-none"
                                >
                                    <Github size={22} />
                                </motion.a>
                                <motion.a 
                                    href="https://www.linkedin.com/in/muhammed-nihal-k-p-864230291" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    whileTap={{ scale: 0.9 }}
                                    className="p-4 bg-white/12 rounded-2xl text-white border border-white/20 active:bg-white/20 transition-all touch-none"
                                >
                                    <Linkedin size={22} />
                                </motion.a>
                                <motion.a 
                                    href="https://www.instagram.com/___niha.l___" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    whileTap={{ scale: 0.9 }}
                                    className="p-4 bg-white/12 rounded-2xl text-white border border-white/20 active:bg-white/20 transition-all touch-none"
                                >
                                    <Instagram size={22} />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Footer */}
                <footer className="py-12 text-center flex flex-col gap-6 items-center border-t border-white/10">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-10 h-10 flex items-center justify-center bg-white text-black font-black text-sm rounded-xl shadow-elevated"
                    >
                        N
                    </motion.div>
                    <div>
                        <p className="text-white font-black tracking-widest text-sm uppercase mb-2">Muhammed Nihal KP</p>
                        <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">© 2026 // BUILD v4.2.0</p>
                        <p className="text-slate-600 text-[9px] uppercase tracking-widest font-bold mt-1">Crafted with care. Designed for impact.</p>
                    </div>
                </footer>

            </div>
        </main>
    );
}
