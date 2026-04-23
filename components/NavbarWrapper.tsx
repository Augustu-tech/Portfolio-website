"use client";

import { useState } from "react";
import Navbar from "./Navbar";

export default function NavbarWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            {/* PAGE CONTENT SHIFT */}
            <main
                className={`pt-20 transition-transform duration-300 ease-in-out ${menuOpen ? "-translate-x-64" : "translate-x-0"
                    }`}
            >
                {children}
            </main>
        </>
    );
}