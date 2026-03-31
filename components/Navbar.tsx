// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-slate-900 p-4 flex justify-between items-center">
            <div className="text-xl font-bold text-green-400">Augustus</div>

            {/* Desktop Links */}
            <div className="hidden md:flex gap-6">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
            </div>

            {/* Mobile Menu */}
            <button
                className="md:hidden text-white font-bold"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? "Close" : "Menu"}
            </button>

            {menuOpen && (
                <div className="flex flex-col gap-4 mt-2 md:hidden bg-slate-800 p-4 rounded">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            )}
        </nav>
    );
}