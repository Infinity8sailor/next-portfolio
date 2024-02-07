import React from "react";
import { Badge } from "../badge";
import TickText from "../text_with_tick";
import Project from "../project";

type Props = {};

const Tasks = (props: Props) => {
  return (
    <>
      <Project
        images={["./assets/tasks_demo_1.png"]}
        side="left"
        id="Tasks_Page"
        title="Tasks"
        desc="A To do list App."
        badges={
          <>
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
              text={"Add tasks with timeline and Project assigned to"}
            />
            <TickText checked text={"Quick Sub-task adder"} />
            <TickText checked text={"Sort tasks based on data and status"} />
            <TickText
              checked
              text={"Mini tasks view to access tasks on other pages"}
            />
            <TickText
              text={"Automate the Cron tasks with Ritual-io ( Rein )"}
            />
          </>
        }
      />
    </>
  );
};

export default Tasks;
