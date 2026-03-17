"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
    speed?: number;
    once?: boolean;
    byCharacter?: boolean;
}

export function TextReveal({
    text,
    className,
    delay = 0,
    speed = 0.05,
    once = true,
    byCharacter = false,
}: TextRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: 0.3 });

    // Split by character if requested, otherwise by word
    const tokens = byCharacter ? text.split("") : text.split(" ");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: speed, delayChildren: delay * i },
        }),
    };

    const childVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={cn("flex flex-wrap", className)}
        >
            {tokens.map((token, index) => (
                <motion.span
                    key={index}
                    variants={childVariants}
                    style={{ whiteSpace: "pre" }} // preserve spaces between words if split by char
                    className={cn(!byCharacter && "mr-[0.4em]")}
                >
                    {token}
                </motion.span>
            ))}
        </motion.div>
    );
}
