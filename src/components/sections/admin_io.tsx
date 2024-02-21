import React from "react";
import Kardz from "./kardz";
import Profile from "./profile";
import { NavSub } from "../nav";
import { TitleText } from "../ui_minor";
import Story from "./story";
import Tasks from "./tasks";
import GlowBox from "../glowBox";

const tasks = [
  // Tasks
  "Tasks Adder",
  "Quick Sub-Task Adder",
  "Mini view for Tasks ",
  "week and day viewer",
  "Time-Status based tasks Sorting",
  "Tasks Manager",
  // Home page
  "Random Wallpaper",
  "Wallpaper Changer",
  "Google Login",
  "Ultimate Search",
  "Time on Dashboard",
  "Rein Search Bar",
  "Auto Fetch Raw Info",
  // Day/Today
  "Day logger",
  "Graphs for daily Activities",

  // Live Verse
  "Sticky notes Creator",
  "Drag and Drop support -Sticky Notes",
  "Sticky Notes Manager",
  // Custom Data Editor
  "Custom Data Formatter and Viewer",
  "Custom Data Creator",
  // Features
  "Text To Speech",
  "Speech To Text",
  "Clipboard to Input Feild",
  "Text To Clipboard",
  "Html Parser",
  "data64 PNG to File Converter",
  "Words Extractor and Checker",
  // Story
  "Story Writting App",
  "Story Adder",
  "Lexical Based Story Editor",
  "Story Manager",
  // Links
  "Links Adder",
  "Mass Links Creator",
  "Duplicate Links checker",
  "sync local links",
  "search links",
  "links group support",
  "Auto fetch grouped links",
  "image support for links",

  // Rituals
  "Ritual Creator",
  "Ritual Player",
  "Ritual State Editor",
  "Ritual Agent Editor",
  // Profile
  "Profile Creator",
  "Sort Fictional-Real Characters",
  "Search characters",
  "Character Gallary",
  "Character Insights Adder",
  "links Support for Profiles",

  // Google CLoud Storage
  "Image Gallary",
  "Google Cloud Images Store",
  "Upload From file or Clipboard",
  "Image name availability Checker",
  // Dictionary
  "English Dictionary",
  "Korean Dictionary",
  "Japanese Dictionary",
  "Dictionary Ui similar to google",
  // Iframe
  "Auto IFrame Search and play",
  "Iframe Manager",
  // Kardz
  "Flash Card App",
  "Randomize Cards",
  "Links as flash Cards",
  "Dictionary as flash Cards",
  "Random Word Generator For kardz",
];

export const Admin = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg p-2 lg:p-10 z-10">
      <div className="flex flex-col p-2 justify-center items-center mb-4 gap-2">
        <TitleText> Admin Io</TitleText>
        <div className="text-2xl">
          A Personal Side project, Where Random Imaginary Ideas meet Vs-Code
        </div>
        <div className="flex justify-center gap-1">
          {[
            ["3+", "Dev Years"],
            ["100+", "Utilities"],
            ["Fast", "Integration"],
          ].map((m) => (
            <GlowBox
              color="lightBlue"
              direction="bottom"
              className="p-8 flex flex-col items-center gap-2 rounded-md dark:from-[#024A3D] "
            >
              <h1 className="text-5xl font-bold">{m[0]}</h1>
              <h1 className="text-2xl  text-gray-400">{m[1]}</h1>
            </GlowBox>
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
            Major Apps
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
    <div id="admin_Io" className="w-full mb-20 p-2 lg:px-10">
      <div className="flex items-center w-full min-h-screen h-fit flex-col mb-10 p-2 lg:px-10  rounded-lg z-10">
        <NavSub
          nav_items={[
            {
              name: "Kardz",
              href: "/admin_io#Kardz_Page",
            },
            {
              name: "Profile",
              href: "/admin_io#Profile_Page",
            },
            // {
            //   name: "Ritual-Io",
            //   href: "Ritual_Page",
            // },
            {
              name: "Story",
              href: "/admin_io#Story_Page",
            },
            {
              name: "Tasks",
              href: "/admin_io#Tasks_Page",
            },
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
        <Story />
        <Tasks />
      </div>
    </div>
  );
};

export default AdminIo;
