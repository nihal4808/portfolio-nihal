"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { SparklesCore } from "@/components/ui/sparkles";

export function HeroBlock() {
    return (
        <section id="hero" className="relative flex flex-col items-center justify-start overflow-hidden bg-black min-h-screen w-full pt-48 md:pt-60 pb-20">
            {/* Sparkles Background */}
            <div className="absolute inset-0 z-0 h-full w-full">
                <SparklesCore
                    id="tsparticleshero"
                    background="transparent"
                    minSize={0.4}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 bg-black/40" />
            </div>

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
                        className="mb-6 inline-block"
                    >
                        <div className="mx-auto h-32 w-32 rounded-3xl border-2 border-white/10 bg-white/5 shadow-2xl overflow-hidden relative group p-1 glass">
                            <div className="w-full h-full rounded-2xl overflow-hidden relative">
                                <Image
                                    src="/nihal-avatar.png"
                                    alt="Muhammed Nihal KP"
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white/20 rounded-full blur-xl animate-pulse opacity-50"></div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="mb-4 text-5xl font-black text-white md:text-8xl tracking-tighter leading-[0.9]"
                    >
                        MUHAMMED <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-white bg-[length:200%_auto] animate-text-shimmer">
                            NIHAL KP
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.35, duration: 0.6 }}
                        className="mb-8 inline-block"
                    >
                        <span className="px-4 py-1.5 bg-white/5 text-slate-300 text-[12px] font-black uppercase tracking-[0.4em] rounded-full border border-white/10">
                            AI & DATA ENGINEER
                        </span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 font-medium md:text-xl leading-relaxed"
                    >
                        Crafting the intelligence of tomorrow with high-performance logic and seamless digital architecture.
                        Final-year Engineer at MES College.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="mb-12 flex flex-wrap justify-center gap-5"
                    >
                        <Button size="lg" className="bg-white hover:bg-slate-200 text-black font-black tracking-widest rounded-xl px-8 h-14 border-none transition-all">
                            <Mail className="mr-2 h-5 w-5" />
                            INITIATE DATA STREAM
                        </Button>
                        <Button size="lg" variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white font-black tracking-widest rounded-xl px-8 h-14 backdrop-blur-sm">
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
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-slate-400 border border-white/5 transition-all hover:bg-white/10 hover:text-white hover:border-white/20 group"
                            >
                                <social.icon className="h-6 w-6 group-hover:glow-primary" />
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
