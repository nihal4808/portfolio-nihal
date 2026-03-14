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
        <div className="flex flex-col h-full bg-black/40 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden group hover:border-white/20 transition-all duration-500 shadow-2xl relative">
            <div className="h-44 w-full overflow-hidden relative">
                <img
                    src={placeholderImages[imgIndex]}
                    alt={repo.name}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            </div>

            <div className="p-6 flex flex-col flex-grow relative z-10 -mt-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 group-hover:bg-white/10 transition-all duration-500">
                        <FolderGit2 size={22} className="text-white/80" />
                    </div>
                    <div className="flex gap-3">
                        <a href={repo.html_url} target="_blank" className="p-2.5 bg-white/5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-all border border-white/10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                        {repo.homepage && (
                            <a href={repo.homepage} target="_blank" className="p-2.5 bg-white/5 rounded-full hover:bg-white/10 text-slate-400 hover:text-slate-300 transition-all border border-white/10">
                                <Link size={18} />
                            </a>
                        )}
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300 capitalize tracking-tight">
                    {repo.name.replace(/-/g, ' ')}
                </h3>

                <div className="space-y-4 mb-6 flex-grow">
                    <p className="text-slate-400 text-sm line-clamp-2 font-medium leading-relaxed">
                        {repo.description || "Building future-ready solutions."}
                    </p>

                    <div className="bg-slate-900/50 rounded-xl p-4 border border-white/5 group-hover:border-white/10 transition-all duration-500">
                        <div className="text-[10px] font-bold text-white/90 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse"></span>
                            README Insights
                        </div>
                        {loading ? (
                            <div className="h-10 flex items-center justify-center">
                                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                            </div>
                        ) : (
                            <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed italic">
                                "{readmeSnippet || "Detailed documentation pending..."}"
                            </p>
                        )}
                        <a href={`${repo.html_url}#readme`} target="_blank" className="text-[10px] text-slate-500 font-bold hover:text-white mt-2 inline-block uppercase tracking-wider transition-colors">
                            View Full README →
                        </a>
                    </div>
                </div>

                {repo.language && (
                    <div className="flex items-center gap-2 mt-auto">
                        <span className="text-[10px] px-3 py-1 bg-white/5 text-slate-400 font-bold rounded-full border border-white/10 tracking-wider">
                            {repo.language.toUpperCase()}
                        </span>
                        <div className="flex-grow"></div>
                        <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                            STABLE
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
