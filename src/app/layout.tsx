import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aditya Rai - Full Stack Developer",
  description: "Personal portfolio website showcasing my projects, skills, and experience as a Full Stack Developer.",
  keywords: ["portfolio", "developer", "full stack", "react", "next.js", "typescript"],
  authors: [{ name: "Aditya Rai" }],
  openGraph: {
    title: "Aditya Rai - Full Stack Developer",
    description: "Personal portfolio website showcasing my projects, skills, and experience as a Full Stack Developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
