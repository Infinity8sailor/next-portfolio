import React from "react";
import Project from "../project";
import { Badge } from "../badge";
import TickText from "../text_with_tick";

type Props = {};

const Story = (props: Props) => {
  return (
    <Project
      images={["./assets/story_io_demo.png"]}
      side="right"
      id="Story_Page"
      title="Story"
      desc="Story/Content Writing app with Lexical rich text Editor"
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
          <TickText checked text={"Write story/content/poem/etc...."} />
          <TickText
            checked
            text={"Meta's Open Source Rich text Editor called Lexical"}
          />
          <TickText checked text={"Edit, Save and search stories"} />
          <TickText text={"Search content in list of stories"} />
        </>
      }
    />
  );
};

export default Story;
