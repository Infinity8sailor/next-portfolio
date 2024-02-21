import { NavSub } from "@/components/nav";
import CodeBase from "@/components/sections/codebase";
import Elemental from "@/components/sections/elemental";
import MusicAi from "@/components/sections/musicAi";
import React from "react";

type Props = {};

function ElementalSection({}: Props) {
  return (
    <div
      id="Elemental"
      className="flex items-center w-full min-h-screen h-fit flex-col mt-3 mb-20"
    >
      <NavSub
        nav_items={[
          {
            name: "MusicAi",
            href: "#Music_Ai",
          },
          {
            name: "CodeBase",
            href: "#CodeBase",
          },
        ]}
      />

      <Elemental mini={true} />
      <MusicAi />
      <CodeBase />
    </div>
  );
}

export default ElementalSection;
