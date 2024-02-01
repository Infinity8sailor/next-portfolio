import React from "react";
import TickText from "../text_with_tick";
import { Badge } from "../badge";
import Project from "../project";

type Props = {};

const MusicAi = (props: Props) => {
  return (
    <>
      <Project
        id="Music_Ai"
        github="https://github.com/Infinity8sailor/MusicAi"
        images={["./assets/MusicAi_2.png", "./assets/musicAi_workflow.png"]}
        title="Music Ai"
        desc="React and Electron based Windows App for autogenerating
              personalised Mashup songs"
        side="left"
        badges={
          <>
            <Badge
              name="Windows"
              // tag="DB"
              // color="white"
              colorTag="white"
              logo="windows"
              logoColor="blue"
            />

            <Badge
              name="React"
              tag="Js"
              color="white"
              colorTag="black"
              logo="React"
              // logoColor="blue"
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
              name="TypeScript"
              tag="Ts"
              color="white"
              colorTag="black"
              logo="typescript"
            />
          </>
        }
        extra1={
          <>
            <img
              className="rounded-md lg:w-[80%]"
              src="./assets/musicAi_workflow.png"
            />
          </>
        }
        points={
          <>
            <TickText text={"Personalised Mash-ups"} />
            <TickText text={"Auto detect Vocals Only Regions"} />
            <TickText text={"Create Custom playlist"} />
            <TickText text={"Auto Demix Vocals, Drums, Bass, Others"} />
          </>
        }
      />
    </>
  );
};

export default MusicAi;
