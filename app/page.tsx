import Link from "next/link";
import { PageTransition } from "@/components/common/page-transition";
import { HeroNameComponent } from "@/components/common/hero-name-component";

// color palette link https://coolors.co/palette/00111c-001523-001a2c-002137-00253e-002945-002e4e-003356-003a61-00406c

export default function Home() {
  return (
    <PageTransition>
      <main className="flex items-center justify-center flex-1 gap-15 flex-col text-white">
        {/* Nav Links */}
        <div className="flex gap-10 text-sm text-bg-light-text">
          <Link
            href={"/contact"}
            className="hover:text-white transition-colors duration-300"
          >
            Contact
          </Link>
          <Link
            href={"/projects"}
            className="hover:text-white transition-colors duration-300"
          >
            Projects
          </Link>
        </div>
        <HeroNameComponent/>
        <div className="text-sm text-bg-light-text">
          I&apos;m just a new developer exploring things.
        </div>
      </main>
    </PageTransition>
  );
}


