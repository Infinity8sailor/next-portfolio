"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { useTheme } from "next-themes";
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export const TsParticle = () => {
  const [init, setInit] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

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
  }, [currentTheme]);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const FireOptions: ISourceOptions = useMemo(
    () => ({
      preset: "fire",
      background: {
        color: {
          value: "#00RRGGBB",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: false,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#f24e1e",
          //   value: "#0000ee",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: false,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 10,
          direction: "top",
          random: true,
          outModes: {
            default: "out",
          },
          straight: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
        number: {
          value: 62,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        // shape: {
        //   type: "circle",
        //   stroke: {
        //     width: 0,
        //     color: "#000000",
        //   },
        //   polygon: {
        //     nb_sides: 5,
        //   },
        //   image: {
        //     src: "img/github.svg",
        //     width: 100,
        //     height: 100,
        //   },
        // },
        size: {
          value: { min: 0.5, max: 3 },
          anim: {
            enable: true,
            speed: 50,
            size_min: 0.1,
            sync: false,
          },
        },
      },

      detectRetina: true,
    }),
    []
  );
  const ColdOptions: ISourceOptions = useMemo(
    () => ({
      //   preset: "snow",
      background: {
        color: {
          value: "#00RRGGBB",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: false,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          //   value: "#f24e1e",
          value: "#0000ee",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: false,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "bottom-right",
          random: true,
          outModes: {
            default: "out",
          },
          straight: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
        number: {
          value: 40,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        shape: {
          type: "images",
          options: {
            images: {
              src: "./assets/snowflex.png",
              //   width: 500,
              //   height: 500,
            },
          },
        },
        size: {
          value: { min: 3, max: 10 },
          anim: {
            enable: true,
            speed: 30,
            size_min: 1,
            sync: false,
          },
        },
      },

      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        className="-z-10"
        particlesLoaded={particlesLoaded}
        options={currentTheme === "light" ? ColdOptions : FireOptions}
      />
    );
  }

  return <></>;
};
