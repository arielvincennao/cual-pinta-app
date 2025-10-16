import type { Metadata } from "next";
import { Geist, Geist_Mono, Lobster, Lexend } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lobster = Lobster({
  variable: "--font-lobster",
  subsets: ["latin"],
  weight: "400",
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: "600",
});

export const metadata: Metadata = {
  title: "Cuál Pinta?",
  description: "Cuál Pinta?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lobster.variable} ${lexend.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
