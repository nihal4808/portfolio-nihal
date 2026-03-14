import { fetchGitHubProjects } from "@/components/projects";
import { HeroScrollDemo } from "@/components/hero-scroll-demo";
import Image from "next/image";

export default async function Home() {
    const projects = await fetchGitHubProjects('nihal4808');

    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 font-[family-name:var(--font-geist-sans)]">
            {/* Background Blobs */}
            <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-600/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="fixed bottom-[20%] right-[-10%] w-[60vw] h-[60vw] bg-cyan-600/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

            {/* Navigation */}
            <header className="fixed top-0 w-full z-50 p-6">
                <nav className="max-w-6xl mx-auto flex justify-between items-center px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
                    <div className="text-xl font-bold tracking-tight">Nihal<span className="text-purple-500">.</span></div>
                    <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-300">
                        <a href="#about" className="hover:text-white transition">About</a>
                        <a href="#projects" className="hover:text-white transition">Projects</a>
                        <a href="#contact" className="hover:text-white transition">Contact</a>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section id="about" className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 min-h-[80vh]">
                <div className="flex-1 max-w-2xl text-center md:text-left">
                    <span className="text-purple-500 font-semibold tracking-widest uppercase text-sm mb-4 block">Hi, I am</span>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-white to-zinc-500">
                        Nihal
                    </h1>
                    <h2 className="text-2xl md:text-4xl text-zinc-400 font-light mb-8">
                        Full-Stack Developer
                    </h2>
                    <p className="text-zinc-400 text-lg mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
                        Building digital products, brands, and experiences. Exploring new technologies and creating beautiful user interfaces.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a href="#projects" className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 font-semibold hover:scale-105 transition shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-purple-500/50">
                            View Projects
                        </a>
                        <a href="https://github.com/nihal4808" target="_blank" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 font-semibold hover:bg-white/10 transition backdrop-blur-sm">
                            GitHub Profile
                        </a>
                    </div>
                </div>

                <div className="flex-1 flex justify-center w-full max-w-md">
                    <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-purple-600 to-cyan-600 animate-[spin_8s_linear_infinite]">
                        <div className="w-full h-full rounded-full overflow-hidden absolute inset-0 m-2 bg-zinc-900 border-4 border-[#050505] animate-[spin_8s_linear_infinite_reverse]">
                            <Image
                                src="/avatar.png"
                                alt="Nihal Avatar"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects 3D Scroll Section */}
            <section id="projects" className="w-full relative">
                <HeroScrollDemo projects={projects} />
            </section>

            {/* Footer */}
            <footer id="contact" className="bg-zinc-950 border-t border-white/5 py-20 px-6 mt-20 relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
                    <p className="text-zinc-400 text-lg mb-10">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    <a href="mailto:hello@example.com" className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition">
                        Say Hello
                    </a>
                    <div className="mt-20 pt-8 border-t border-white/10 text-zinc-600 text-sm">
                        &copy; 2026 Nihal. All rights reserved. Built with Next.js & Tailwind.
                    </div>
                </div>
            </footer>
        </main>
    );
}
