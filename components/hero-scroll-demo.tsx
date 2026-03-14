"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { GitHubRepo, ProjectCard } from "./projects";

export function HeroScrollDemo({ projects }: { projects: GitHubRepo[] }) {
    return (
        <div className="flex flex-col overflow-hidden pb-[200px] pt-[100px] md:pt-[200px] bg-[#050505]">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-5xl font-semibold text-white mb-4">
                            Explore my <br />
                            <span className="text-5xl md:text-[6rem] font-bold mt-1 leading-none bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
                                Project Dashboard
                            </span>
                        </h1>
                    </>
                }
            >
                <div className="h-full w-full bg-zinc-950 p-4 md:p-8 overflow-y-auto no-scrollbar">
                    <div className="flex justify-between items-center mb-8 pb-4 border-b border-zinc-800">
                        <h2 className="text-2xl font-bold text-white">All Projects</h2>
                        <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/30">
                            {projects.length} Repositories
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((repo) => (
                            <ProjectCard key={repo.id} repo={repo} />
                        ))}
                    </div>

                    {projects.length === 0 && (
                        <div className="w-full py-20 text-center text-zinc-500">
                            No projects found or GitHub API rate limit reached.
                        </div>
                    )}
                </div>
            </ContainerScroll>
        </div>
    );
}
