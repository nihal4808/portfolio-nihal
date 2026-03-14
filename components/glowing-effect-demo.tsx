"use client";

import { Box, Lock, Search, Settings, Sparkles, Cpu, Globe, Zap, Database, Shield } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export function GlowingEffectDemo() {
    return (
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
            <GridItem
                area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                icon={<Cpu className="h-4 w-4" />}
                title="Computer Vision & AI"
                description="Developing research-grade Pothole Detection and Severity Estimation frameworks using YOLO and depth models."
            />
            <GridItem
                area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                icon={<Zap className="h-4 w-4" />}
                title="Cross-Platform Systems"
                description="Architecting integrated experiences like Gyro-Ball, bridging Flutter mobile controllers with Python-based PC engines."
            />
            <GridItem
                area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                icon={<Globe className="h-4 w-4" />}
                title="Real-time Web Ecosystems"
                description="Building scalable multiplayer environments like Duno and cloud-integrated developer tools with Firebase."
            />
            <GridItem
                area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                icon={<Box className="h-4 w-4" />}
                title="Advanced Architectures"
                description="Crafting high-performance web identities and complex state management systems with Next.js and Tailwind."
            />
            <GridItem
                area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                icon={<Shield className="h-4 w-4" />}
                title="Scalable Data ETL"
                description="Implementing robust data pipelines and zero-trust security protocols for mission-critical software solutions."
            />
        </ul>
    );
}

interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
    return (
        <li className={cn("min-h-[14rem] list-none", area)}>
            <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-white/10 p-2 md:rounded-[1.5rem] md:p-3 bg-black">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-white/5 bg-zinc-950 p-6 shadow-sm md:p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border-[0.75px] border-white/10 bg-white/5 p-2">
                            {icon}
                        </div>
                        <div className="space-y-3">
                            <h3 className="pt-0.5 text-xl leading-[1.375rem] font-bold tracking-tight md:text-2xl md:leading-[1.875rem] text-white">
                                {title}
                            </h3>
                            <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-slate-400">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
