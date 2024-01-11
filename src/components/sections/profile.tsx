import React from "react";
import TickText from "../text_with_tick";
import { Badge } from "../badge";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div
      id="Profile_Page"
      className="p-4 bg-gray-300 dark:bg-gray-800 flex flex-col lg:flex-row w-full"
    >
      <div className="flex justify-center w-full lg:w-[50%]">
        <div className="flex justify-center w-64 rounded-md">
          <img
            className="object-contain rounded-md"
            src="./assets/profile_list.png"
            alt="profile_list_demo"
          />
        </div>
        <div className="relative w-72">
          <img
            className="absolute object-contain left-12 top-12 hover:z-10 "
            src="./assets/isagi_yoichi.png"
            alt="isagi_yoichi"
          />
          <img
            className="absolute object-contain left-24 top-24  hover:z-10"
            src="./assets/isagi_yoichi.png"
            alt="isagi_yoichi"
          />
          <img
            className="absolute object-contain left-36 top-36  hover:z-10"
            src="./assets/isagi_yoichi.png"
            alt="isagi_yoichi"
          />
        </div>
      </div>
      <div className="w-full lg:w-[50%] font-[roboto] flex flex-col justify-center lg:justify-start p-5 gap-2">
        <div className="text-black dark:text-white text-6xl lg:text-8xl">
          Profile Io
        </div>
        <div className="text-2xl lg:text-4xl">
          Fictional Character analysis and development App.
        </div>
        <div className="flex flex-wrap gap-1">
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
        <div className="flex flex-col text-xl pl-5 text-black dark:text-white">
          <TickText text={"Add Fictional/Real Characters"} checked={true} />
          <TickText text={"Explore and Analyse Different Characters"} />
          <TickText
            text={"Write down the incidents and story for the Character"}
          />
          <TickText
            text={"Search for generalised Traits and make list out of it."}
          />
          <TickText text={"Auto MBTI type detector"} checked={false} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
