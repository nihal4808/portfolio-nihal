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

        // Filter out forks and empty repos to show the best ones
        const showcaseRepos = repos
            .filter(repo => !repo.fork && repo.description);

        return showcaseRepos;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}

export function ProjectCard({ repo }: { repo: GitHubRepo }) {
    // Use unsplash random tech images as placeholders for projects
    const placeholderImages = [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
    ];

    // Predictably random image based on string id
    const imgIndex = repo.id % placeholderImages.length;

    return (
        <div className="flex flex-col h-full bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden group hover:border-zinc-700 transition">
            <div className="h-48 w-full overflow-hidden relative">
                <img
                    src={placeholderImages[imgIndex]}
                    alt={repo.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-80" />
            </div>
            <div className="p-5 flex flex-col flex-grow -mt-10 relative z-10">
                <div className="flex items-center justify-between mb-3">
                    <div className="bg-purple-600 p-2 rounded-lg">
                        <FolderGit2 size={20} className="text-white" />
                    </div>
                    <div className="flex gap-2">
                        <a href={repo.html_url} target="_blank" className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 text-zinc-300 hover:text-white transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                        {repo.homepage && (
                            <a href={repo.homepage} target="_blank" className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 text-zinc-300 hover:text-white transition">
                                <Link size={18} />
                            </a>
                        )}
                    </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 capitalize">{repo.name.replace(/-/g, ' ')}</h3>
                <p className="text-zinc-400 text-sm mb-4 flex-grow line-clamp-3">{repo.description}</p>

                {repo.language && (
                    <div className="mt-auto pt-4 border-t border-zinc-800">
                        <span className="text-xs px-2 py-1 bg-zinc-800 text-purple-400 rounded-md border border-zinc-700">
                            {repo.language}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}
