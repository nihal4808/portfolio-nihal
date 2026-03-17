"use client";

import React, { useState, useEffect } from "react";
import InfiniteGallery from "@/components/ui/3d-gallery-photography";
import { GalleryImage } from "@/lib/gallery";

export default function GalleryDemo({ images }: { images: GalleryImage[] }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <div className="relative w-full h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[800px] overflow-hidden rounded-3xl border border-white/10 mt-16 group">
            <InfiniteGallery
                images={images}
                speed={isMobile ? 0.8 : 1.2}
                zSpacing={isMobile ? 1.5 : 3}
                visibleCount={isMobile ? 6 : 12}
                falloff={{ near: 0.8, far: isMobile ? 8 : 14 }}
                className="absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-center px-4 mix-blend-exclusion text-white">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-7xl tracking-tighter">
                    <span className="italic relative drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">GALLERY <span className="opacity-50 text-xs sm:text-base md:text-xl block mt-1 md:mt-2 tracking-widest uppercase font-sans font-bold">Photography & Artifacts</span></span>
                </h2>
            </div>

            <div className="absolute bottom-6 left-0 right-0 text-center font-mono uppercase text-[10px] sm:text-xs font-semibold px-4 text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p>{isMobile ? "Swipe to explore" : "Use mouse wheel, arrow keys, or touch to navigate"}</p>
            </div>
        </div>
    );
}
