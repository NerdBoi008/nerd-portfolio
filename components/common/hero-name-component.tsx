"use client";

import { fontSecondary } from "@/app/fonts";
import React from "react";
import BlurText from "./blur-text";
import ShinyText from "../ShinyText";

export const HeroNameComponent = () => {
  return (
    <h1
      className={`text-6xl sm:text-8xl md:text-9xl cursor-default select-none ${fontSecondary.className} flex flex-col items-center justify-center text-center leading-tight`}
    >
      <BlurText text={"Nerdboi008"} animateBy={"letters"} className="animate-pulse"/>
      <ShinyText
        text="( Moin Malek )"
        disabled={false}
        speed={2}
        className="text-sm text-muted-foreground leading-10 tracking-wider"
      />
    </h1>
  );
};

export default HeroNameComponent;
