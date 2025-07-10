'use client';

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  if (init) {
      return (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          className="absolute inset-0 -z-10"
          options={{
            fpsLimit: 120,
            background: {
              opacity: 0,
            },
            particles: {
              color: {
                value: "#ffffff"
              },
              number: {
                value: 150,
                density: {
                  enable: true,
                  height: 800,
                }
              },
              size: {
                value: 1,
                animation: {
                  enable: true,
                  speed: 1,
                  sync: false
                }
              },
              opacity: {
                value: {
                  min: 0.1,
                  max: 0.5,
                },
                animation: {
                  enable: true,
                  speed: 1,
                  sync: false
                }
              },
              move: {
                enable: true,
                speed: 0.2,
                direction: "none",
                random: true,
                straight: false,
                outModes: "out",
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onHover: {
                  enable: true,
                  mode: ["bubble", "repulse"]
                },
              },
              modes: {
                repulse: {
                    distance: 150,
                    duration: .4,
                },
                bubble: {
                  distance: 150,
                  size: 2,
                  duration: 2,
                  opacity: 0.8,
                  speed: 3,
                }
              }
            },
            retina_detect: true
          }}
        />
      );
  }

  return <></>;
};