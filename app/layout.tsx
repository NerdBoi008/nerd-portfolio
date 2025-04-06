import type { Metadata } from "next";
import { fontPrimary } from "./fonts";
import "./globals.css";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Nerdboi",
  description: "Nerdboi protfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontPrimary.className} antialiased min-h-screen flex flex-col`}
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
