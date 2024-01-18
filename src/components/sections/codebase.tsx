import React from "react";
import { Badge } from "../badge";
import TickText from "../text_with_tick";

type Props = {};

const CodeBase = (props: Props) => {
  return (
    <div
      id="CodeBase"
      className="flex flex-col-reverse justify-center w-full lg:flex-row"
    >
      <div className="w-full lg:w-[50%] font-[roboto] flex flex-col justify-center lg:justify-start items-end p-3 lg:p-5 gap-2">
        <div className="text-6xl lg:text-8xl">Code Base</div>
        <div className="text-2xl lg:text-4xl">Code saving application</div>
        <div className="text-xl lg:text-2xl">
          I had created this app to save multiple solutions for same problem,
        </div>
        <div className="text-xl lg:text-2xl">
          since Leetcode had no such feature back in 2021.
        </div>
        <div className="flex flex-wrap justify-end gap-1">
          <Badge
            name="React"
            tag="Js"
            color="white"
            colorTag="black"
            logo="React"
            // logoColor="blue"
          />

          <Badge
            name="Node"
            tag="Js"
            color="white"
            colorTag="black"
            logo="nodedotjs"
            // logoColor="blue"
          />
          <Badge
            name="React"
            tag="Redux"
            color="white"
            colorTag="black"
            logo="redux"
            logoColor="blue"
          />
          <Badge
            name="Mongo"
            tag="Db"
            color="white"
            colorTag="black"
            logo="mongodb"
            // logoColor="blue"
          />
          <Badge
            name="TypeScript"
            tag="Ts"
            color="white"
            colorTag="black"
            logo="typescript"
          />
        </div>

        <div className="flex flex-col text-base lg:text-xl pl-5">
          <TickText text={"Add Problem details and solution"} />
          <TickText text={"Multiple solutions can be added."} />
          <TickText
            text={"Code syntax highlighting for Different of languages"}
          />
          <TickText text={"Search from list of questions available."} />
        </div>
        <div className="flex flex-col">
          <div className="inline-flex text-lg items-center gap-1 font-bold">
            Source Code :
            <a
              className="flex items-center gap-2 font-bold"
              href="https://github.com/Infinity8sailor/CodeBase"
              target="_blank"
            >
              Github
              <img src="./assets/github_icon.png" alt="github_ico" />
            </a>
          </div>
          <div className="inline-flex text-lg items-center gap-1 font-bold">
            Live :
            <a
              className="flex items-center gap-2 font-bold"
              href="https://code-base-olive.vercel.app/"
              target="_blank"
            >
              Link
              <img
                className="dark:bg-white p-1 rounded-sm"
                height={25}
                width={25}
                src="./assets/export.png"
                alt="redirect_ico"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[50%] rounded-md">
        <img className="rounded-md" src="./assets/codebase.png" />
      </div>
    </div>
  );
};

export default CodeBase;
