"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
    const roles = [
        "1. Cybersecurity",
        "2. AI",
        "3. Problem Solver",
        "4. Tech Innovator",
        "5. Full Stack Developer",
        "6. System Protector", 
        "7. Secure Web App Developer"
    ];

    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let typingSpeed = isDeleting ? 50 : 100;

        const handleTyping = () => {
            setText((prev) =>
                isDeleting
                    ? currentRole.substring(0, prev.length - 1)
                    : currentRole.substring(0, prev.length + 1)
            );

            if (!isDeleting && text === currentRole) {
                setTimeout(() => setIsDeleting(true), 1200);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, roleIndex]);

    return (
        <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden">

            {/* BACKGROUND GLOW */}
            <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-green-500/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500/20 blur-3xl rounded-full"></div>

            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="space-y-6 z-10"
                >
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                        Hi, I'm{" "}
                        <span className="text-green-400">Augustus</span>
                    </h1>

                    {/* TYPING ANIMATION */}
                    <h2 className="text-xl md:text-2xl text-gray-300 h-[30px]">
                        {text}
                        <span className="text-green-400">|</span>
                    </h2>

                    <p className="text-gray-400 max-w-md">
                        I specialize in securing computer systems, building resilient web applications,
                        and protecting digital infrastructure against modern cyber threats. I build automatic systems
    
                    </p>

                    {/* BUTTONS */}
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="/projects"
                            className="px-6 py-2 bg-green-500 text-black font-medium rounded-lg hover:bg-green-400 transition"
                        >
                            View Projects
                        </a>

                        <a
                            href="/contact"
                            className="px-6 py-2 border border-gray-600 text-white rounded-lg hover:border-white transition"
                        >
                            Contact Me
                        </a>

                        <a
                            href="/Augustus_Chiponde_CV.pdf"
                            download
                            className="px-6 py-2 border border-white text-white rounded-lg hover:border-gray-300 transition"
                        >
                            Download CV
                        </a>
                    </div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="relative w-64 h-64 md:w-80 md:h-80"
                    >
                        {/* GLOW */}
                        <div className="absolute inset-0 rounded-full bg-green-500/20 blur-2xl"></div>

                        <Image
                            src="/Augustus.png"
                            alt="Augustus"
                            fill
                            priority
                            className="rounded-full object-cover border-4 border-slate-800 shadow-2xl"
                        />
                    </motion.div>
                </motion.div>

            </div>

            {/* SCROLL INDICATOR */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-6 text-gray-500 text-sm"
            >
                ↓ Scroll
            </motion.div>

        </section>
    );
}