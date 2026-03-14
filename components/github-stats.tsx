import React from "react";
import { Github, Star, GitFork, BookOpen, Clock, Code2 } from "lucide-react";

export function GitHubStatsSection({ repos }: { repos: any[] }) {
    // Take first 6 for the summary grid
    const recentRepos = repos.slice(0, 6);
    const languages = Array.from(new Set(repos.map(r => r.language).filter(Boolean)));

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto bg-black relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

            <div className="mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full bg-white/5 mb-6">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Source Control Analysis</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">GitHub Ecosystem</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Card */}
                <div className="lg:col-span-1 glass rounded-3xl p-8 h-full border-white/5 relative overflow-hidden group">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-1000"></div>

                    <div className="flex flex-col items-center text-center">
                        <div className="relative w-32 h-32 mb-6 p-1 bg-gradient-to-tr from-white/20 to-transparent rounded-full overflow-hidden">
                            <img
                                src="https://github.com/nihal4808.png"
                                alt="GitHub Avatar"
                                className="w-full h-full rounded-full object-cover bg-black"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">nihal4808</h3>
                        <p className="text-slate-500 font-bold text-xs uppercase tracking-[0.2em] mb-8">AI & Full-Stack Engineer</p>

                        <div className="grid grid-cols-2 gap-4 w-full">
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                <p className="text-white text-2xl font-bold mb-1">{repos.length}</p>
                                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Repositories</p>
                            </div>
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                <p className="text-slate-400 text-2xl font-bold mb-1">100%</p>
                                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Uptime</p>
                            </div>
                        </div>

                        <div className="w-full mt-8 pt-8 border-t border-white/5">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 text-left">Core Stacks</h4>
                            <div className="flex flex-wrap gap-2">
                                {languages.slice(0, 5).map((lang: any, i) => (
                                    <span key={i} className="px-3 py-1.5 bg-white/5 text-slate-300 text-[10px] font-bold rounded-lg border border-white/10">
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Repo List */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {recentRepos.map((repo, i) => (
                        <div key={i} className="group glass p-6 rounded-2xl border-white/5 hover:bg-white/5 hover:border-white/20 transition-all duration-500 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="text-lg font-bold text-white group-hover:text-slate-300 transition-colors line-clamp-1">{repo.name}</h4>
                                    <div className="flex items-center gap-1.5 text-slate-500 text-xs font-bold">
                                        <Star size={14} className="text-white/30" />
                                        {repo.stargazers_count}
                                    </div>
                                </div>
                                <p className="text-slate-500 text-xs mb-6 line-clamp-2 leading-relaxed">
                                    {repo.description || "Experimental repository for system optimization."}
                                </p>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                <div className="flex gap-4">
                                    <a href={repo.html_url} target="_blank" className="flex items-center gap-1.5 text-slate-400 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">
                                        <BookOpen size={12} /> README
                                    </a>
                                </div>
                                <span className="text-[10px] font-bold text-slate-600 uppercase">
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
