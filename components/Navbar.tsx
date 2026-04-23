"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Folder, Mail } from "lucide-react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ menuOpen, setMenuOpen }: any) {
    const pathname = usePathname();

    const navLink = (href: string, label: string, icon: any) => {
        const Icon = icon;
        const isActive = pathname === href;

        return (
            <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`relative flex items-center gap-2 transition ${isActive
                        ? "text-green-400"
                        : "text-gray-300 hover:text-white"
                    }`}
            >
                <Icon size={16} />
                {label}

                {/* Active underline */}
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

            {/* MOBILE DRAWER */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3 }}

                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(event, info) => {
                            if (info.offset.x > 100) {
                                setMenuOpen(false);
                            }
                        }}

                        className="fixed top-0 right-0 h-full w-64 
                        bg-slate-900/60 backdrop-blur-xl 
                        border-l border-white/10 
                        shadow-2xl 
                        flex flex-col gap-6 p-6 text-sm z-50 
                        relative overflow-hidden"
                    >
                        {/* GLASS LIGHT EFFECT */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

                        {/* CLOSE BUTTON */}
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="self-end text-white text-xl"
                        >
                            <FaTimes />
                        </button>

                        {/* STAGGERED LINKS */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.08,
                                    },
                                },
                            }}
                            className="flex flex-col gap-3"
                        >
                            {[
                                { href: "/", label: "Home", icon: Home },
                                { href: "/projects", label: "Projects", icon: Folder },
                                { href: "/about", label: "About", icon: User },
                                { href: "/contact", label: "Contact", icon: Mail },
                            ].map((item) => (
                                <motion.div
                                    key={item.href}
                                    variants={{
                                        hidden: { opacity: 0, x: 20 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {navLink(item.href, item.label, item.icon)}
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}