import React from "react";
import { FolderGit2, Link } from "lucide-react";

export interface GitHubRepo {
    id: number;
    name: string;
    html_url: string;
    description: string;
    homepage: string | null;
    language: string;
    fork: boolean;
}

export async function fetchGitHubProjects(username: string): Promise<GitHubRepo[]> {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated&direction=desc`, {
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (!response.ok) {
            throw new Error('Failed to fetch projects');
        }

        const repos: GitHubRepo[] = await response.json();

        // Filter out forks - user requested all repos but we show top ones in 3D
        const showcaseRepos = repos.filter(repo => !repo.fork);

        return showcaseRepos;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}

async function fetchRepoReadmeSnippet(username: string, repoName: string): Promise<string> {
    try {
        const response = await fetch(`https://raw.githubusercontent.com/${username}/${repoName}/main/README.md`);
        if (!response.ok) {
            const masterResponse = await fetch(`https://raw.githubusercontent.com/${username}/${repoName}/master/README.md`);
            if (!masterResponse.ok) return "";
            const text = await masterResponse.text();
            return text;
        }
        const text = await response.text();
        return text;
    } catch (e) {
        return "";
    }
}

function extractFirstParagraph(md: string): string {
    if (!md) return "";
    // Remove headers, images, links
    const clean = md
        .replace(/^#+.*$/gm, '') // Remove headers
        .replace(/!\[.*\]\(.*\)/g, '') // Remove images
        .replace(/\[.*\]\(.*\)/g, '') // Remove links
        .replace(/```[\s\S]*?```/g, '') // Remove code blocks
        .replace(/\n\s*\n/g, '\n') // Remove extra newlines
        .trim();

    return clean.split('\n')[0] || "";
}

export function ProjectCard({ repo }: { repo: GitHubRepo }) {
    const [readmeSnippet, setReadmeSnippet] = React.useState<string>("");
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetchRepoReadmeSnippet('nihal4808', repo.name).then(md => {
            setReadmeSnippet(extractFirstParagraph(md));
            setLoading(false);
        });
    }, [repo.name]);

    const placeholderImages = [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
    ];

    const imgIndex = repo.id % placeholderImages.length;

    return (
        <div className="flex flex-col h-full bg-gradient-to-br from-white/8 to-white/2 backdrop-blur-xl border border-white/15 rounded-3xl overflow-hidden group hover:border-white/30 transition-all duration-500 shadow-elevated hover:shadow-floating relative hover:-translate-y-1">
            {/* Glow on hover */}
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"></div>

            {/* Image Section with Enhanced Styling */}
            <div className="h-56 w-full overflow-hidden relative bg-gradient-to-b from-white/10 to-black">
                <img
                    src={placeholderImages[imgIndex]}
                    alt={repo.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                
                {/* Language Badge - Positioned over image */}
                {repo.language && (
                    <div className="absolute top-4 right-4 backdrop-blur-md bg-white/20 border border-white/30 px-4 py-2 rounded-full">
                        <span className="text-xs font-bold text-white uppercase tracking-wider">
                            {repo.language}
                        </span>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-7 flex flex-col flex-grow relative z-10">
                {/* Header with Icon and Actions */}
                <div className="flex items-start justify-between mb-5">
                    <div className="bg-gradient-to-br from-white/20 to-white/5 p-3.5 rounded-2xl border border-white/20 group-hover:from-white/30 group-hover:to-white/15 transition-all duration-500 shadow-clean">
                        <FolderGit2 size={24} className="text-white/90" />
                    </div>
                    <div className="flex gap-2">
                        <a 
                            href={repo.html_url} 
                            target="_blank" 
                            className="p-3 bg-white/10 rounded-2xl hover:bg-white/20 text-slate-300 hover:text-white transition-all duration-300 border border-white/15 hover:border-white/30 group/btn shadow-clean hover:shadow-elevated"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                        {repo.homepage && (
                            <a 
                                href={repo.homepage} 
                                target="_blank" 
                                className="p-3 bg-white/10 rounded-2xl hover:bg-white/20 text-slate-300 hover:text-white transition-all duration-300 border border-white/15 hover:border-white/30 group/btn shadow-clean hover:shadow-elevated"
                            >
                                <Link size={18} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300 capitalize tracking-tight leading-tight">
                    {repo.name.replace(/-/g, ' ')}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm line-clamp-2 font-medium leading-relaxed mb-5">
                    {repo.description || "Building future-ready solutions."}
                </p>

                {/* README Preview Box - Enhanced */}
                <div className="bg-gradient-to-br from-white/5 to-white/2 rounded-2xl p-5 border border-white/15 group-hover:border-white/25 transition-all duration-500 mb-6 flex-grow flex flex-col">
                    <div className="text-xs font-bold text-white/80 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-white/60 animate-pulse"></span>
                        Repository Overview
                    </div>
                    {loading ? (
                        <div className="h-12 flex items-center justify-center flex-grow">
                            <div className="w-5 h-5 border-2 border-white/20 border-t-white/60 rounded-full animate-spin"></div>
                        </div>
                    ) : (
                        <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed italic flex-grow">
                            {readmeSnippet ? `"${readmeSnippet}"` : "Detailed documentation available in repository..."}
                        </p>
                    )}
                    <a 
                        href={`${repo.html_url}#readme`} 
                        target="_blank" 
                        className="text-xs text-slate-500 font-bold hover:text-white mt-3 inline-block uppercase tracking-wider transition-all duration-300 group/link"
                    >
                        <span className="flex items-center gap-1.5">
                            View Full README 
                            <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                        </span>
                    </a>
                </div>

                {/* Status & Stability Indicator */}
                <div className="flex items-center justify-between pt-5 border-t border-white/10">
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400/80 animate-pulse"></span>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active</span>
                    </div>
                    <a 
                        href={repo.html_url} 
                        target="_blank"
                        className="px-4 py-2 bg-white/15 hover:bg-white/25 text-white text-xs font-bold rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 shadow-clean hover:shadow-elevated uppercase tracking-wider"
                    >
                        View Project
                    </a>
                </div>
            </div>
        </div>
    );
}
