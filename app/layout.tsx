import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlobalSceneBackground from "@/components/three/GlobalSceneBackground";
import { MouseProvider } from "@/components/providers/MouseProvider";
import SmoothScroll from "@/components/providers/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Custom Software, AI & Automation Company | Onclick Innovations",
  description:
    "Where AI Innovation Meets Business Transformation. Intelligent digital solutions that enhance productivity, automate workflows, and accelerate enterprise growth.",
  openGraph: {
    title: "Onclick Innovations — Where AI Innovation Meets Business Transformation",
    description: "Custom software, AI automation, OpenCLAW, and web/mobile development.",
    url: "https://onclickinnovations.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap" rel="stylesheet" />
        <style>{`:root { --font-display: 'Clash Display', system-ui, sans-serif; }`}</style>
      </head>
      <body className="font-body antialiased">
        <MouseProvider>
          <SmoothScroll>
            <CustomCursor />
            <ScrollProgress />
            <div className="grain" aria-hidden />
            <GlobalSceneBackground />
            <Navbar />
            <main className="relative z-10">{children}</main>
            <Footer />
          </SmoothScroll>
        </MouseProvider>
      </body>
    </html>
  );
}
