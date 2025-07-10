import Link from "next/link";
import { HeroNameComponent } from "@/components/common/hero-name-component";

// color palette link https://coolors.co/palette/00111c-001523-001a2c-002137-00253e-002945-002e4e-003356-003a61-00406c

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-1 gap-15 flex-col text-white">
      {/* Nav Links */}
      <div className="flex gap-10 text-sm text-bg-light-text">
        <Link
          href={"/contact"}
          className="hover:text-white transition-colors duration-300 hover:underline underline-offset-2"
        >
          Contact
        </Link>
        <Link
          href={"/projects"}
          className="hover:text-white transition-colors duration-300 hover:underline underline-offset-2"
        >
          Projects
        </Link>
      </div>
      <HeroNameComponent />
      <div className="text-sm text-bg-light-text select-none">
        Passionate about building cool stuff with code and always learning something new.
      </div>
    </main>
  );
}
