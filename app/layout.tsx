import type { Metadata } from "next";

import React from "react";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import Navbar from "./components/Navbar";
import Stars from "./components/Stars";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Radix UI Portfolio",
  description: "Next Radix UI Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next Radix UI Portfolio</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Theme appearance="dark" accentColor="gray" grayColor="slate" radius="full">
          <Navbar />
          <Stars />
          {children}
          <Footer/>
        </Theme>
      </body>
    </html>
  );
}
