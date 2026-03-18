"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export function HeroBlock() {
    return (
        <section id="hero" className="relative flex flex-col items-center justify-start overflow-hidden bg-black/40 min-h-screen w-full pt-48 md:pt-60 pb-20">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
                <Image
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1920&auto=format&fit=crop"
                    alt="Dark Tech Pattern"
                    fill
                    className="object-cover opacity-[0.03] grayscale"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black" />
            </div>

            {/* Glow Accents - Depth Layer */}
            <div className="absolute top-32 -right-40 w-96 h-96 rounded-full blur-[120px] bg-white/5 pointer-events-none -z-5 opacity-30" />
            <div className="absolute -left-40 top-96 w-80 h-80 rounded-full blur-[100px] bg-white/3 pointer-events-none -z-5 opacity-20" />

            <div className="relative z-10 mx-auto max-w-5xl text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="mb-8 inline-block"
                    >
                        <div className="mx-auto h-36 w-36 rounded-3xl border-2 border-white/20 bg-gradient-to-br from-white/10 to-white/5 shadow-lift overflow-hidden relative group p-1 glass-premium">
                            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg"></div>
                            <div className="w-full h-full rounded-2xl overflow-hidden relative">
                                <Image
                                    src="/nihal-avatar.png"
                                    alt="Muhammed Nihal KP"
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white/30 rounded-full blur-xl animate-pulse opacity-60"></div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="mb-6 text-6xl font-black text-white md:text-8xl lg:text-9xl tracking-tighter leading-[0.95]"
                    >
                        MUHAMMED <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-white bg-[length:200%_auto] animate-text-shimmer drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                            NIHAL KP
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.35, duration: 0.6 }}
                        className="mb-10 inline-block"
                    >
                        <span className="px-5 py-2 bg-white/8 text-slate-300 text-[12px] font-black uppercase tracking-[0.4em] rounded-full border border-white/20 backdrop-blur-md shadow-clean">
                            AI & DATA ENGINEER
                        </span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mx-auto mb-12 max-w-3xl text-lg text-slate-300 font-medium md:text-xl lg:text-2xl leading-relaxed"
                    >
                        Crafting the intelligence of tomorrow with high-performance logic and seamless digital architecture.
                        Final-year Engineer at MES College.
                    </motion.p>

                    {/* Gradients Integration (Local Sparkles removed for Global) */}
                    <div className="w-full max-w-4xl h-3 relative mx-auto mb-14 mt-12">
                        {/* Gradients */}
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-white/30 to-transparent h-[3px] w-3/4 blur-sm" />
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-white/40 to-transparent h-px w-3/4" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-slate-300/30 to-transparent h-[5px] w-1/4 blur-sm" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-slate-300/40 to-transparent h-px w-1/4" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="mb-12 flex flex-wrap justify-center gap-5"
                    >
                        <Button size="lg" className="bg-white hover:bg-slate-100 text-black font-black tracking-widest rounded-xl px-8 h-14 border-none transition-all duration-300 shadow-elevated hover:shadow-floating hover:scale-105">
                            <Mail className="mr-2 h-5 w-5" />
                            INITIATE DATA STREAM
                        </Button>
                        <Button size="lg" variant="outline" className="border-white/20 bg-white/8 hover:bg-white/15 text-white font-black tracking-widest rounded-xl px-8 h-14 backdrop-blur-md transition-all duration-300 shadow-clean hover:shadow-elevated hover:scale-105 hover:border-white/30">
                            EXPLORE ARTIFACTS
                            <ArrowDown className="ml-2 h-5 w-5" />
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex justify-center gap-6"
                    >
                        {[
                            { icon: Github, href: "https://github.com/nihal4808" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/muhammed-nihal-k-p-864230291" },
                            { icon: Mail, href: "mailto:muhamednihal190@gmail.com" },
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                whileHover={{ scale: 1.15, y: -4 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/12 text-slate-300 border border-white/15 transition-all duration-300 hover:bg-white/20 hover:text-white hover:border-white/30 group shadow-clean hover:shadow-elevated"
                            >
                                <social.icon className="h-6 w-6 group-hover:glow-accent transition-all" />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    opacity: { delay: 1, duration: 0.6 },
                    y: { delay: 1.5, duration: 1.5, repeat: Infinity },
                }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
            >
                <ArrowDown className="h-6 w-6 text-slate-500" />
            </motion.div>
        </section>
    );
}
