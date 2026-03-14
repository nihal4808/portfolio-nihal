"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { GitHubRepo, ProjectCard } from "./projects";

export function HeroScrollDemo({ projects }: { projects: GitHubRepo[] }) {
    return (
        <div className="flex flex-col overflow-hidden pb-[100px] md:pb-[150px] pt-[50px] md:pt-[100px] bg-[#0f172a] relative">
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#38bdf8]/10 to-transparent"></div>

            <ContainerScroll
                titleComponent={
                    <div className="flex flex-col items-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#38bdf8]/20 rounded-full bg-[#38bdf8]/5 mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse"></span>
                            <span className="text-[9px] font-bold text-[#38bdf8] uppercase tracking-[0.3em]">AI-Powered Showroom</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tighter text-center max-w-4xl">
                            Featured <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#38bdf8] to-[#1e293b]">
                                Developer Artifacts
                            </span>
                        </h1>
                    </div>
                }
            >
                <div className="h-full w-full bg-[#1e293b]/40 backdrop-blur-3xl p-4 md:p-12 overflow-y-auto no-scrollbar border border-white/5 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 border-b border-white/5 pb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                                <span className="w-1 h-6 bg-[#38bdf8] rounded-full"></span>
                                Primary Repositories
                            </h2>
                            <p className="text-slate-500 text-xs font-bold mt-1 tracking-wider uppercase opacity-60">System Version 4.0.2</p>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-900/80 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/5 group hover:border-[#38bdf8]/30 transition-all duration-500">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className={`w-6 h-6 rounded-full border border-slate-900 bg-slate-${800 - i * 100}`} />
                                ))}
                            </div>
                            <span className="text-[#38bdf8] text-xs font-black tracking-[0.1em] border-l border-white/10 pl-3">
                                {projects.length} MODULES DETECTED
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((repo) => (
                            <ProjectCard key={repo.id} repo={repo} />
                        ))}
                    </div>

                    {projects.length === 0 && (
                        <div className="w-full py-40 text-center flex flex-col items-center">
                            <div className="w-12 h-12 border-4 border-[#38bdf8]/20 border-t-[#38bdf8] rounded-full animate-spin mb-6"></div>
                            <p className="text-[#38bdf8] font-bold tracking-[0.2em] text-xs uppercase animate-pulse">Initializing Data Stream...</p>
                        </div>
                    )}
                </div>
            </ContainerScroll>
        </div>
    );
}
