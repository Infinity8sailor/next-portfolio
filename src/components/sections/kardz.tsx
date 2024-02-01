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
            <TickText text={"Flash cards for Different type of content"} />
            <TickText text={"Get cards for custom data"} />
            <TickText text={"default list of multiple languages content"} />
            <TickText text={"score to see the accuracy"} />
          </>
        }
      />
    </>
  );
};

export default Kardz;
