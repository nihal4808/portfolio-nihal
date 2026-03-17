"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    direction?: "up" | "down" | "left" | "right" | "none";
    delay?: number;
    duration?: number;
    distance?: number;
    once?: boolean;
}

export function ScrollReveal({
    children,
    className,
    id,
    direction = "up",
    delay = 0,
    duration = 0.6,
    distance = 40,
    once = true,
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: 0.1 });

    const getDirectionOffset = () => {
        switch (direction) {
            case "up":
                return { y: distance, x: 0 };
            case "down":
                return { y: -distance, x: 0 };
            case "left":
                return { x: distance, y: 0 };
            case "right":
                return { x: -distance, y: 0 };
            case "none":
            default:
                return { x: 0, y: 0 };
        }
    };

    const offset = getDirectionOffset();

    return (
        <motion.div
            id={id}
            ref={ref}
            initial={{ opacity: 0, ...offset }}
            animate={{
                opacity: isInView ? 1 : 0,
                x: isInView ? 0 : offset.x,
                y: isInView ? 0 : offset.y,
            }}
            transition={{
                duration,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98], // Custom sleek easing curve
            }}
            className={cn("w-full", className)}
        >
            {children}
        </motion.div>
    );
}
