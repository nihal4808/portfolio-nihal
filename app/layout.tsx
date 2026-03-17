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
            <body className={`${inter.className} antialiased bg-black text-white`}>
                <div className="fixed inset-0 pointer-events-none z-[-1]">
                    <SparklesCore
                        id="tsparticlesglobal"
                        background="transparent"
                        minSize={0.6}
                        maxSize={1.4}
                        particleDensity={100}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />
                </div>
                {children}
            </body>
        </html>
    );
}
