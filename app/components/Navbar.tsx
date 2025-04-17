// components/Navbar.tsx
'use client'
import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        
        <nav className="w-full px-6 py-4 flex justify-between items-center border-t border-white-700 bg-black">
            <div className="text-xl font-bold text-white">Next Radix UI Portfolio</div>
            <div className="space-x-4">
                <Link href="/" className="text-white hover:underline">Home</Link>
                <Link href="/about" className="text-white hover:underline">About Me</Link>
                <Link href="/contact" className="text-white hover:underline">Contact Me</Link>
            </div>
        </nav>
    );
}
