"use client";

import React, { useState, useEffect } from "react";
import { DesktopLayout } from "./desktop-layout";
import { MobileLayout } from "./mobile-layout";
import { TabletLayout } from "./tablet-layout";
import { GitHubRepo } from "@/components/projects";
import { GalleryImage } from "@/lib/gallery";

export function ResponsiveLayout({ projects, galleryImages }: { projects: GitHubRepo[], galleryImages: GalleryImage[] }) {
    const [mounted, setMounted] = useState(false);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setMounted(true);
        setWidth(window.innerWidth);

        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Prevent hydration mismatch by rendering nothing (or a skeleton) on the server
    if (!mounted) {
        return null; // Or a simple loader
    }

    if (width < 768) {
        return <MobileLayout projects={projects} galleryImages={galleryImages} />;
    } else if (width <= 1024) {
        return <TabletLayout projects={projects} galleryImages={galleryImages} />;
    } else {
        return <DesktopLayout projects={projects} galleryImages={galleryImages} />;
    }
}
