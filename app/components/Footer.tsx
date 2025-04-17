"use client";

import React from "react";

export default function Footer() {
    return (
        <footer className="w-full px-6 py-4 mt-8 border-t text-center text-sm bg-black text-white">
            © {new Date().getFullYear()} Next Radix UI Portfolio.
        </footer>
    );
}
