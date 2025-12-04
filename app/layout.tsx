import type { Metadata, Viewport } from "next";
import { fontPrimary } from "./fonts";
import "./globals.css";
import Particles from "@/components/common/particles";

export const metadata: Metadata = {
  title: "Nerdboi | Full-Stack Developer Portfolio",
  description:
    "I'm a passionate full-stack developer exploring web technologies and building modern applications. Check out my projects and get in touch!",
  keywords: [
    "full-stack developer",
    "web development",
    "React",
    "Next.js",
    "TypeScript",
    "portfolio",
  ],
  authors: [{ name: "Nerdboi" }],
  creator: "Nerdboi",
  publisher: "Nerdboi",
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#00111C" },
    { media: "(prefers-color-scheme: dark)", color: "#00111C" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontPrimary.className} antialiased min-h-screen flex flex-col text-white bg-radial from-c-blue-900 from-50% to-c-blue-800`}
      >
        {/* <ParticleBackground/> */}
        <div className="fixed inset-0 -z-10 opacity-20">
            <Particles
              particleColors={["#ffffff", "#ffffff"]}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover
              alphaParticles={false}
              disableRotation={false}
            />
          </div>
        {children}
      </body>
    </html>
  );
}
