import React from "react";
import { Github, Star, GitFork, BookOpen, Clock, Code2 } from "lucide-react";

export function GitHubStatsSection({ repos }: { repos: any[] }) {
    // Take first 6 for the summary grid
    const recentRepos = repos.slice(0, 6);
    const languages = Array.from(new Set(repos.map(r => r.language).filter(Boolean)));

    return (
        <section className="py-32 px-6 max-w-7xl mx-auto bg-gradient-to-b from-black/20 via-black/10 to-black/30 backdrop-blur-sm relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full bg-white/8 mb-8 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Source Control Analysis</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">GitHub Ecosystem</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Card */}
                <div className="lg:col-span-1 glass-premium rounded-3xl p-10 h-full border-white/15 relative overflow-hidden group shadow-elevated hover:shadow-floating transition-all duration-500 hover:-translate-y-1">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/8 rounded-full blur-3xl group-hover:bg-white/15 transition-all duration-1000"></div>

                    <div className="flex flex-col items-center text-center">
                        <div className="relative w-32 h-32 mb-8 p-1 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-full overflow-hidden ring-2 ring-white/20">
                            <img
                                src="https://github.com/nihal4808.png"
                                alt="GitHub Avatar"
                                className="w-full h-full rounded-full object-cover bg-black"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">nihal4808</h3>
                        <p className="text-slate-500 font-bold text-xs uppercase tracking-[0.2em] mb-10">AI & Full-Stack Engineer</p>

                        <div className="grid grid-cols-2 gap-4 w-full">
                            <div className="p-5 bg-gradient-to-br from-white/15 to-white/5 rounded-2xl border border-white/20 shadow-clean">
                                <p className="text-white text-2xl font-bold mb-1">{repos.length}</p>
                                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Repositories</p>
                            </div>
                            <div className="p-5 bg-gradient-to-br from-white/15 to-white/5 rounded-2xl border border-white/20 shadow-clean">
                                <p className="text-slate-300 text-2xl font-bold mb-1">100%</p>
                                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Uptime</p>
                            </div>
                        </div>

                        <div className="w-full mt-10 pt-10 border-t border-white/10">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 text-left">Core Stacks</h4>
                            <div className="flex flex-wrap gap-2">
                                {languages.slice(0, 5).map((lang: any, i) => (
                                    <span key={i} className="px-3 py-1.5 bg-white/12 text-slate-300 text-[10px] font-bold rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/18 transition-all duration-300">
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Repo List */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
                    {recentRepos.map((repo, i) => (
                        <div key={i} className="group glass-light p-7 rounded-2xl border-white/15 hover:border-white/30 transition-all duration-500 flex flex-col justify-between shadow-clean hover:shadow-elevated hover:-translate-y-1">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="text-lg font-bold text-white group-hover:text-slate-200 transition-colors line-clamp-1">{repo.name}</h4>
                                    <div className="flex items-center gap-1.5 text-slate-500 text-xs font-bold bg-white/10 px-2 py-1 rounded-lg">
                                        <Star size={14} className="text-white/40" />
                                        {repo.stargazers_count}
                                    </div>
                                </div>
                                <p className="text-slate-400 text-xs mb-6 line-clamp-2 leading-relaxed">
                                    {repo.description || "Experimental repository for system optimization."}
                                </p>
                            </div>

                            <div className="flex items-center justify-between pt-5 border-t border-white/10">
                                <a href={repo.html_url} target="_blank" className="flex items-center gap-1.5 text-slate-400 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors group/link">
                                    <BookOpen size={12} className="group-hover/link:scale-110 transition-transform" /> README
                                </a>
                                <span className="text-[10px] font-bold text-slate-500 uppercase bg-white/10 px-2 py-1 rounded">
                                    {repo.language || "N/A"}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
