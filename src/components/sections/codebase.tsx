import React from "react";
import { Badge } from "../badge";
import TickText from "../text_with_tick";
import Project from "../project";

type Props = {};

const CodeBase = (props: Props) => {
  return (
    <>
      <Project
        id="CodeBase"
        title="Code Base"
        desc="Code saving application"
        desc2="I had created this app to save multiple solutions for same problem,
    since Leetcode had no such feature back in 2021."
        github="https://github.com/Infinity8sailor/CodeBase"
        images={["./assets/codebase.png"]}
        side="right"
        points={
          <>
            <TickText checked text={"Add Problem details and solution"} />
            <TickText checked text={"Multiple solutions can be added."} />
            <TickText checked
              text={"Code syntax highlighting for Different of languages"}
            />
            <TickText checked text={"Search from list of questions available."} />
          </>
        }
        links={
          <>
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
          </>
        }
        badges={
          <>
            {" "}
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
          </>
        }
      />
    </>
  );
};

export default CodeBase;
