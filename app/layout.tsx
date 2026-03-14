import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SparklesCore } from "@/components/ui/sparkles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Nihal | Portfolio",
    description: "Building digital products, brands, and experiences.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased bg-black`}>
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <SparklesCore
                        id="tsparticlesglobal"
                        background="transparent"
                        minSize={0.4}
                        maxSize={1.4}
                        particleDensity={100}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />
                </div>
                <main className="relative z-10">
                    {children}
                </main>
            </body>
        </html>
    );
}
