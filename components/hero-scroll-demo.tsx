"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { GitHubRepo, ProjectCard } from "./projects";

export function HeroScrollDemo({ projects }: { projects: GitHubRepo[] }) {
    return (
        <div className="flex flex-col overflow-hidden pb-[120px] md:pb-[180px] pt-[60px] md:pt-[120px] bg-gradient-to-b from-black/30 via-black/20 to-black/30 backdrop-blur-sm relative">
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <ContainerScroll
                titleComponent={
                    <div className="flex flex-col items-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/15 rounded-full bg-white/8 mb-8 backdrop-blur-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></span>
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em]">AI-Powered Showroom</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter text-center max-w-4xl leading-tight">
                            Featured <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-300 to-slate-400">
                                Developer Artifacts
                            </span>
                        </h1>
                    </div>
                }
            >
                <div className="h-full w-full bg-gradient-to-br from-black/60 via-black/50 to-black/70 backdrop-blur-3xl p-4 md:p-14 overflow-y-auto no-scrollbar border border-white/10 rounded-3xl shadow-deep">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-14 gap-8 border-b border-white/8 pb-10">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                                <span className="w-1 h-8 bg-gradient-to-b from-white/40 to-white/10 rounded-full"></span>
                                Primary Repositories
                            </h2>
                            <p className="text-slate-500 text-xs font-bold mt-2 tracking-wider uppercase opacity-60">System Version 4.0.2</p>
                        </div>
                        <div className="flex items-center gap-3 bg-black/80 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10 group hover:border-white/25 transition-all duration-500 shadow-clean">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className={`w-7 h-7 rounded-full border border-black bg-zinc-${800 - i * 100}`} />
                                ))}
                            </div>
                            <span className="text-slate-400 text-xs font-black tracking-[0.1em] border-l border-white/10 pl-3">
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
                            <div className="w-12 h-12 border-4 border-white/10 border-t-white rounded-full animate-spin mb-6"></div>
                            <p className="text-slate-500 font-bold tracking-[0.2em] text-xs uppercase animate-pulse">Initializing Data Stream...</p>
                        </div>
                    )}
                </div>
            </ContainerScroll>
        </div>
    );
}
