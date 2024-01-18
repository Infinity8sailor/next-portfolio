import React from "react";
import { Badge } from "./badge";

type Props = {};

const TechStack = (props: Props) => {
  return (
    <div>
      <h2 className="text-xl text-black dark:text-white font-bold mt-6 mb-4">
        Tech Stack
      </h2>
      <div className="flex justify-center">
        <div className="flex justify-start flex-col gap-4">
          <div className="flex flex-col lg:flex-row justify-start items-center gap-3">
            <h1 className="bg-black text-white px-2 rounded-md">Languages</h1>
            <div className="flex flex-wrap gap-1 items-center justify-center">
              <Badge name="C/C++" colorTag="white" />
              <Badge name="Java" tag="" color="" colorTag="white" />
              <Badge
                name="Python"
                tag=""
                // color="white"
                colorTag="white"
                logo="python"
              />
              <Badge
                name="Csharp"
                tag=""
                // color="white"
                colorTag="white"
                logo="csharp"
                logoColor="black"
              />
              <Badge
                name="JavaScript"
                tag="Js"
                color="white"
                colorTag="black"
                logo="javascript"
                logoColor="red"
              />
              <Badge
                name="TypeScript"
                tag="Ts"
                color="white"
                colorTag="black"
                logo="typescript"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-start items-center gap-2">
            <h1 className="bg-black text-white px-2 rounded-md">Full Stack</h1>
            <div className="flex flex-wrap gap-1 items-center justify-center">
              <Badge
                name="React"
                tag="Js"
                color="white"
                colorTag="black"
                logo="React"
                // logoColor="blue"
              />
              <Badge
                name="Next"
                tag="Js"
                color="white"
                colorTag="black"
                logo="nextdotjs"
                logoColor="black"
              />
              <Badge
                name="Electron"
                // tag="Js"
                // color="white"
                colorTag="white"
                logo="electron"
                logoColor="blue"
              />
              <Badge
                name="Node"
                // tag="Js"
                // color="white"
                colorTag="white"
                logo="nodedotjs"
                // logoColor="blue"
              />
              <Badge
                name="Redux"
                // tag="Redux"
                // color="white"
                colorTag="white"
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
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-start items-center gap-2">
            <h1 className="bg-black text-white px-2 rounded-md">Platforms</h1>
            <div className="flex flex-wrap gap-1 items-center justify-center">
              <Badge
                name="Windows"
                // tag="DB"
                // color="white"
                colorTag="white"
                logo="windows"
                logoColor="blue"
              />

              <Badge
                name="Android"
                // tag="DB"
                // color="white"
                colorTag="white"
                logo="android"
                // logoColor="blue"
              />
              <Badge
                name="Docker"
                // tag="DB"
                // color="white"
                colorTag="white"
                logo="docker"
                // logoColor="blue"
              />
              <Badge
                name="Ubuntu"
                // tag="DB"
                // color="white"
                colorTag="white"
                logo="ubuntu"
                // logoColor="blue"
              />
            </div>
          </div>
          <div className="flex justify-start items-center gap-2">
            {/* <h1 className="bg-black text-white px-2 rounded-md">Other</h1> */}
            {/* <div className="flex flex-wrap gap-1 items-center justify-center"> */}
            {/* <img
                className="bg-black rounded-md px-1 "
                src="./assets/grpc-logo.png"
                width={"80px"}
              /> */}
            {/* <Badge
                name="gRPC"
                // tag="Redux"
                // color="white"
                colorTag="white"
                // logo="redux"
                // logoColor="blue"
              /> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
