"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Folder, Mail } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();

    const navLink = (href: string, label: string, icon: any) => {
        const Icon = icon;

        return (
            <Link
                href={href}
                className={`flex items-center gap-1 transition ${pathname === href
                        ? "text-green-400"
                        : "text-gray-400 hover:text-white"
                    }`}
            >
                <Icon size={16} />
                {label}
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

                {/* LINKS */}
                <div className="flex gap-6 text-sm">
                    {navLink("/", "Home", Home)}
                    {navLink("/projects", "Projects", Folder)}
                    {navLink("/about", "About", User)}
                    {navLink("/contact", "Contact", Mail)}
                </div>

            </div>

        </nav>
    );
}