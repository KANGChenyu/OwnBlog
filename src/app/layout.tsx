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
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "Nebula Blog | KCY",
    template: "%s | Nebula Blog",
  },
  description: "KCY 的暗黑科技风个人博客、作品集和内容管理系统。",
  keywords: ["KCY", "Nebula Blog", "RAG", "Java", "Spring Boot", "Next.js"],
  openGraph: {
    title: "Nebula Blog | KCY",
    description: "记录后端工程、RAG 应用、全栈开发和个人成长。",
    images: ["/blog-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
