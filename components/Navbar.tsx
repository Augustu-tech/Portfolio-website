"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Folder, Mail } from "lucide-react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const navLink = (href: string, label: string, icon: any) => {
        const Icon = icon;
        const isActive = pathname === href;

        return (
            <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`relative flex items-center gap-1 transition ${isActive
                    ? "text-green-400"
                    : "text-gray-400 hover:text-white"
                    }`}
            >
                <Icon size={16} />
                {label}

                {/* ✅ Active underline */}
                {isActive && (
                    <motion.span
                        layoutId="underline"
                        className="absolute -bottom-1 left-0 w-full h-[2px] bg-green-400"
                    />
                )}
            </Link>
        );
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-slate-900/70 backdrop-blur-lg border-b border-slate-800 z-50">

            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* LOGO */}
                <Link href="/" className="text-lg font-bold text-white tracking-wide">
                    Augustus.dev
                </Link>

                {/* DESKTOP LINKS */}
                <div className="hidden md:flex gap-6 text-sm">
                    {navLink("/", "Home", Home)}
                    {navLink("/projects", "Projects", Folder)}
                    {navLink("/about", "About", User)}
                    {navLink("/contact", "Contact", Mail)}
                </div>

                {/* MOBILE BUTTON */}
                <button
                    className="md:hidden text-white text-xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* ✅ ANIMATED MOBILE MENU */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 right-0 h-full w-30 bg-slate-900 border-l border-slate-800 shadow-lg flex flex-col gap-6 p-6 text-sm z-50"
                    >
                        {/* Close button (optional but good UX) */}
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="self-end text-white text-xl"
                        >
                            <FaTimes />
                        </button>

                        {navLink("/", "Home", Home)}
                        {navLink("/projects", "Projects", Folder)}
                        {navLink("/about", "About", User)}
                        {navLink("/contact", "Contact", Mail)}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}