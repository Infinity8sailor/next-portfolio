import React from "react";
import { Badge } from "../badge";
import TickText from "../text_with_tick";
import Project from "../project";

type Props = {};

const Kardz = (props: Props) => {
  return (
    <>
      <Project
        images={["./assets/Kardz_demo.png"]}
        side="right"
        id="Kardz_Page"
        title="Kardz"
        desc="Flash card app for custom content and links"
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
        points={
          <>
            <TickText
              checked
              text={"Flash cards for Different type of content"}
            />
            <TickText
              checked
              text={"default list of multiple languages content"}
            />
            <TickText checked text={"score to see the accuracy"} />
            <TickText text={"Get cards for custom data"} />
          </>
        }
        links={
          <>
            <div className="inline-flex text-lg items-center gap-1 font-bold mt-5 mr-10">
              Live :
              <a
                className="flex items-center gap-2 font-bold"
                href="https://kardz.vercel.app/"
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
      />
    </>
  );
};

export default Kardz;
