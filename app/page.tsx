import Link from "next/link";
import { fontSecondary } from "./fonts";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-1 gap-15 flex-col text-white">
      {/* Nav Links */}
      <div className="flex gap-10 text-sm text-bg-light-text">
        <Link href={""} className="hover:text-white transition-colors duration-300">Contact</Link>
        <Link href={""} className="hover:text-white transition-colors duration-300">Projects</Link>
      </div>
      <h1 className={`text-9xl ${fontSecondary.className}`}>
        Nerdboi
        <span className="text-[#001A2C]">008</span>
      </h1>
      <div className="text-sm text-bg-light-text">
        I&apos;m just a new developer exploring things.
      </div>
    </main>
  );
}
