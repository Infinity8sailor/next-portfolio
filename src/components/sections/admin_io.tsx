import React from "react";
import Kardz from "./kardz";
import Profile from "./profile";
import { NavSub } from "../nav";
import { TitleText } from "../ui_minor";

const tasks = [
  "Tasks Adder",
  "Sub Task Adder",
  "Random Wallpaper",
  "Google Login",
  "Ultimate Search",
  "Day logger",
  "Graphs for daily Activities",
  "Time on Dashboard",
  "Rein Search Bar",
  "Text To Speech",
  "Speech To Text",
  "Story Writting App",
  "Links Creator",
  "IFrame Viewer",
  "Clipboard to Input Feild",
  "Text To Clipboard",
  "Html Parser",
  "Ritual Creator",
  "Ritual Player",
  "Profile Creator",
  "Image Gallary",
  "Google Cloud Images Store",
  "English Dictionary",
  "Korean Dictionary",
  "Japanese Dictionary",
  "Mass Links Creator",
  "Duplicate Links Finder",
  "Random Word Generator For kardz",
  "Custom Data Editor",
];

export const Admin = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg p-2 lg:p-10 z-10">

      <div className="flex flex-col p-2 justify-center items-center mb-4 gap-2">
        <TitleText> Admin Io</TitleText>
        <div className="text-2xl">
          A Personal Side project, Where Random Imaginary Ideas meet Vs-Code
        </div>
        <div className="flex  flex-col gap-1 lg:gap-3 mt-2 lg:flex-row">
          {[
            "Lines of Code : 10000+",
            "Years into Development : 3+",
            "No. of Utilities : 100+",
          ].map((m) => (
            <div key={m} className="text-lg font-bold">
              {m}
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center lg:flex-row p-2 w-full dark:text-black ">
        <div className="hidden lg:flex animate-pulse animate-duration-[4000ms] flex-col z-10">
          <div className="text-base px-2 font-bold rounded-t-md bg-pink-100">
            Source
          </div>
          <ul className="max-h-72 overflow-y-auto bg-pink-300 rounded-b-md flex flex-col gap-1 py-2">
            {["Ideas", "Inspiration", "Clone", "Feature", "Random Thought"].map(
              (m) => (
                <li
                  key={m}
                  className="text-lg font-bold px-2 mx-2 bg-pink-200 rounded-md"
                >
                  {m}
                </li>
              )
            )}
          </ul>
        </div>
        <hr className="hidden lg:flex animate-fade-right animate-infinite animate-duration-[4000ms] animate-delay-1000 animate-ease-in-out z-0 rounded-md bg-gradient-to-r from-pink-300 to-purple-300 h-1.5 w-20"></hr>

        <div className="hidden lg:flex animate-pulse animate-duration-[4000ms]  flex-col  z-10">
          <div className="text-base px-2 font-bold rounded-t-md bg-violet-100">
            Major Sections
          </div>
          <ul className="max-h-72 overflow-y-auto bg-violet-300 rounded-b-md flex flex-col gap-1 py-2">
            {[
              "Kardz ( Memory )",
              "Profile-io ( Characters )",
              "Story ( Writing )",
              "Ritual ( Automation )",
              "Links-io (Information )",
              "Tasks ( Work )",
              "TimeLine ( Time )",
            ].map((m) => (
              <li
                key={m}
                className="text-lg font-bold px-2 mx-2 bg-violet-200 rounded-md"
              >
                {m}{" "}
              </li>
            ))}
          </ul>
        </div>
        <hr className="hidden lg:flex animate-fade-right animate-infinite animate-duration-[4000ms] animate-delay-2000 animate-ease-in-out z-0 rounded-md bg-gradient-to-r  from-purple-300 to-blue-300 h-1.5 w-20"></hr>

        <div className=" animate-pulse animate-duration-[4000ms] flex flex-col z-10">
          <div className="text-base px-2 font-bold rounded-t-lg bg-blue-100">
            List of Utilities ({tasks.length})
          </div>
          <ul className="max-h-72 overflow-y-auto bg-blue-300 rounded-b-lg flex flex-col gap-1 py-2">
            {tasks
              .map((value) => ({ value, sort: Math.random() }))
              .sort((a, b) => a.sort - b.sort)
              .map(({ value }) => value)
              .map((m) => (
                <li key={m} className="mx-2 px-2 bg-blue-200 rounded-md">
                  {m}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

type Props = {};

const AdminIo = ({}: Props) => {
  return (
    <div id="Admin_Io" className="w-full mb-20 p-2 lg:px-10">
      <div className="flex items-center w-full min-h-screen h-fit flex-col mb-20 p-2 lg:px-10  rounded-lg z-10">
        <NavSub
          nav_items={[
            {
              name: "Kardz",
              href: "/AdminIo#Kardz_Page",
            },
            {
              name: "Profile",
              href: "/AdminIo#Profile_Page",
            },
            // {
            //   name: "Ritual-Io",
            //   href: "Ritual_Page",
            // },
            // {
            //   name: "Story",
            //   href: "Story_Page",
            // },
            // {
            //   name: "Gallary",
            //   href: "Gallary",
            // },
            // {
            //   name: "YT",
            //   href: "YT",
            // },
          ]}
        />
        <Admin />
        <Kardz />
        <Profile />
        {/* <Story/> */}
      </div>
    </div>
  );
};

export default AdminIo;
