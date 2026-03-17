import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WelcomePage() {
    return (
        <main className="min-h-screen bg-black text-white w-full overflow-hidden flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center space-y-12">
                <p className="max-w-4xl mx-auto text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight cursor-default text-center">
                    Welcome to the <br /> <span className="text-black italic drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">Next Generation</span> of Software.
                </p>
                <Link
                    href="/"
                    className="btn-primary mt-12 bg-black text-white border-2 border-white/20 hover:bg-white hover:text-black flex items-center justify-center w-64 h-16 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-all rounded-md"
                >
                    ENTER SYSTEM <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
            </div>
        </main>
    );
}
