import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "./data/resume";
import SmoothScroll from "./components/SmoothScroll";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: profile.summary,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${geistMono.variable} h-full antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
