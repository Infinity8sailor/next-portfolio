import { Nav, NavSub } from "@/components/nav";
import CodeBase from "@/components/sections/codebase";
import HomeProfile from "@/components/sections/home";
import Kardz from "@/components/sections/kardz";
import MusicAi from "@/components/sections/musicAi";
import Profile from "@/components/sections/profile";
import Story from "@/components/sections/story";
import ThemeToggleBtn from "@/components/toggle_theme_button";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeProfile />
      <div
        id="Eco_System"
        className="flex items-center w-full  lg:min-h-screen h-fit flex-col  relative"
      >
        <div className="lg:h-screen w-full m-10">
          <iframe
            className="w-full h-[300px] lg:h-full"
            // style="border: none"
            width="100%"
            // height="300px"
            src="https://whimsical.com/embed/SNZjiDmQgv1v52UB4Bn7ak"
          ></iframe>
        </div>
      </div>

      <div
        id="Elemental"
        className="flex items-center w-full min-h-screen h-fit flex-col mt-3 mb-20"
      >
        <NavSub
          nav_id={"ElementNav"}
          class_name={"activeSub"}
          nav_items={[
            {
              name: "MusicAi",
              href: "Music_Ai",
            },
            {
              name: "CodeBase",
              href: "CodeBase",
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

        <MusicAi />
        <CodeBase />
      </div>
      <div
        id="Admin_Io"
        className="flex items-center w-full min-h-screen h-fit flex-col mb-20"
      >
        <NavSub
          nav_id={"AdminNav"}
          top="top-6"
          class_name={"activeSub"}
          nav_items={[
            {
              name: "Kardz",
              href: "Kardz_Page",
            },
            {
              name: "Profile",
              href: "Profile_Page",
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

        <Kardz />
        <Profile />
        {/* <Story/> */}
      </div>

      {/* {/* <!-- Versions --> */}
      {/* <div className="flex items-center p-5 lg:p-[300px] w-full justify-center">
        <ol className="list-disc ml-5">
          <li>
            Unsorted
            <ol className="list-none ml-5">
              <li>
                <label>
                  <input type="checkbox" disabled />
                  Web3 with information
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" disabled />
                  WhatsApp bot [ Duck Bot + Google Search + Google Images ]
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" disabled />
                  Ritual-Io [ Re-Design ]
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" disabled />
                  Korean Learning Notes
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" disabled />
                  Youtube chanenl links
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" disabled />
                  project I am working and Worked on
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" disabled />
                  Github link + Activity
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" disabled />
                  Kardz + [ Final Touch ] + GIF for the demo changing the Alphas
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" disabled />
                  Rein [ Improve + Solid Concept
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" disabled />
                  Code Base
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" disabled />
                  Renaming Admin-Io
                </label>
              </li>
            </ol>
          </li>
          <li>
            V0.2
            <ol className="list-none ml-5">
              <li>
                <label>
                  <input type="checkbox" disabled />
                  Fill the Time line Well [ temp sat ]
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" disabled />
                  Good About Info
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" disabled />
                  Remove all the External Links
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" disabled />
                  All the Lorem Epsum Text
                </label>
              </li>
            </ol>
          </li>
          <li>
            V0.1.1 [ Profile ]
            <ol className="list-none ml-5">
              <li>
                <label>
                  <input type="checkbox" disabled />
                  Behaviour tree based , Ritual-Io plugin to detect MBTI of
                  personality.
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" disabled />
                  Modify the schema and custom aditional info adder
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" checked disabled />
                  Filter Option for list [ fictional ]
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" checked disabled />
                  ON search basis [ you already have the list just filter ]
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" checked disabled />
                  image gallary remove [ Temp ]
                </label>
              </li>
            </ol>
          </li>
          <li>
            V0.1
            <ol className="list-none ml-5">
              <li>
                <label>
                  <input type="checkbox" checked disabled />
                  Tech Stack Icons Pack
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" checked disabled />
                  layout Markings
                </label>
              </li>
            </ol>
          </li>
        </ol>
      </div> */}
      <footer className="flex justify-center items-center m-2">
        Made by 🦆 with Next.js & Tailwind
      </footer>
    </>
  );
}
