import React from "react";
// import TickText from "../text_with_tick";
// import { Badge } from "../badge";

type Props = {
  id: string;
  title: string;
  desc: string;
  desc2?: string | null;
  side: "left" | "right";
  badges?: React.ReactElement | null;
  points: React.ReactElement;
  extra1?: React.ReactElement | null;
  images?: string[] | null;
  github?: string;
  links?: React.ReactElement | null;
};

const Project = ({
  id,
  title,
  desc,
  desc2,
  side,
  badges,
  points,
  images = ["./assets/something.png"],
  extra1,
  github,
  links,
}: Props) => {
  return (
    <div id={id} className="flex flex-col gap-1 justify-center z-10 pt-10">
      <div
        className={`flex  ${
          side === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
        } flex-col w-full mt-10`}
      >
        <div className="w-full lg:w-[50%]">
          {images && (
            <img src={images[0]} className="rounded-lg border-2 border-black" />
          )}
        </div>
        <div
          className={`w-full lg:w-[50%] font-[roboto] flex flex-col justify-center backdrop-blur-[2px] ${
            side === "left" ? "lg:items-start" : "lg:items-end"
          } lg:justify-start p-5 gap-2`}
        >
          <div className="text-6xl lg:text-8xl">{title}</div>
          <div className="text-2xl lg:text-4xl">{desc}</div>
          {desc2 && (
            <div className="text-xl lg:text-2xl max-w-md lg:max-w-xl">
              {desc2}
            </div>
          )}
          {badges && <div className="flex flex-wrap gap-1">{badges}</div>}

          <div className="flex flex-col text-xl pl-5">{points}</div>
          <div className="flex flex-col">
            {github && (
              <div className="inline-flex text-lg items-center gap-1">
                <h1>Source Code / Download :</h1>
                <a
                  className="flex items-center gap-2 font-bold"
                  href={github}
                  target="_blank"
                >
                  Github
                  <span className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-md bg-white dark:bg-black dark:fill-white text-[#C17CEB] shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </span>
                </a>
              </div>
            )}
            {links && <>{links}</>}
          </div>
        </div>
      </div>
      { (
        <div className="w-full py-5 flex justify-center ">{extra1}</div>
      )}
    </div>
  );
};

export default Project;
