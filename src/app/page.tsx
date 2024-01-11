import { Nav } from "@/components/nav";
import HomeProfile from "@/components/sections/home";
import MusicAi from "@/components/sections/musicAi";
import Profile from "@/components/sections/profile";
import ThemeToggleBtn from "@/components/toggle_theme_button";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="sticky top-1  z-[100] h-0 w-0">
        <ThemeToggleBtn />
      </div>
      <Nav
        zidx={"z-50"}
        nav_id={"mainNav"}
        class_name={"active"}
        nav_items={[
          {
            name: "Home",
            href: "Home_page",
          },
          {
            name: "Eco-System",
            href: "Eco_System",
          },
          {
            name: "Admin-io",
            href: "Admin_Io",
          },
          {
            name: "Elemental",
            href: "Elemental",
          },
          {
            name: "Gallary",
            href: "Gallary",
          },
          {
            name: "YT",
            href: "YT",
          },
        ]}
      />
      <HomeProfile />
      {/* {/* <!-- Eco System --> */}
      <div
        id="Eco_System"
        className="flex items-center w-full min-h-screen h-fit flex-col  relative"
      >
        <div className="h-screen w-full m-20">
          <iframe
            className="h-full w-full"
            // style="border: none"
            width="100%"
            height="100%"
            src="https://whimsical.com/embed/SNZjiDmQgv1v52UB4Bn7ak"
          ></iframe>
        </div>
      </div>
      {/* {/* <!-- Admin_IO --> */}
      {/* {/* <!-- Admin-Io-Tabs --> */}
      <div
        id="Admin_Io"
        className="flex items-center w-full min-h-screen h-fit flex-col bg-red-700"
      >
        <Nav
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
            {
              name: "Ritual-Io",
              href: "Ritual_Page",
            },
            {
              name: "Story",
              href: "Story_Page",
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

        {/* {/* <!-- Kardz --> */}
        <div className="p-4 bg-gray-50 dark:bg-gray-800" id="Kardz_Page">
          <div className="relative">
            <img src="./assets/Kardz_demo.png" />
            <div className="h-96 w-40 absolute bottom-0 right-0 bg-white">
              <div className="h-full">Right</div>
            </div>
            <div className="h-96 w-40 absolute top-0 left-0 bg-white">
              <div className="h-full w-full">Left</div>
            </div>
          </div>
        </div>
        {/* {/* <!-- Profile Io Page --> */}
        <Profile />
        {/* {/* <!-- Story page --> */}
        <div
          className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="Story_Page"
        >
          <div className="">
            <img src="./assets/story_io_demo.png" alt="story-io-tab" />
          </div>
        </div>
      </div>
      <div
        id="Elemental"
        className="flex items-center w-full min-h-screen h-fit flex-col mt-3"
      >
        <Nav
          nav_id={"ElementNav"}
          top="top-6"
          class_name={"activeSub"}
          nav_items={[
            {
              name: "MusicAi",
              href: "Music_Ai",
            },
            {
              name: "xVision",
              href: "Music_Ai",
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
      </div>
      {/* {/* <!-- Caurousal --> */}
      <div
        id="Gallary"
        className="flex items-center h-screen w-full justify-center bg-green-400 mt-10"
      >
        <div
          id="default-carousel"
          className="relative w-[90%] lg:w-[70%] border-2 border-black rounded-lg"
          data-carousel="static"
        >
          {/* <!-- Carousel wrapper --> */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {/* <!-- Item 1 --> */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="./assets/profile_Io_demo.png"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
              <div>Hello there</div>
            </div>
            {/* {/* <!-- Item 2 --> */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="./assets/rein_1.png"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/* <!-- Item 3 --> */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="./assets/rein_2.png"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/* <!-- Item 4 --> */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="./assets/rein_3.png"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/* <!-- Item 5 --> */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="./assets/rein_4.png"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="./assets/rein_5.png"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="./assets/MusicAi_1.png"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>
          {/* <!-- Slider indicators --> */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
          </div>
          {/* <!-- Slider controls --> */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>

      {/* {/* <!-- External Links  --> */}
      <div
        id="YT"
        className="flex items-center h-[1080px] w-full justify-center flex-wrap"
      >
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <iframe
            width="384px"
            className="aspect-video rounded-t-md"
            src="https://www.youtube.com/embed/6C33PKdV710?si=pOIjp7jRijs805-H"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // allowfullscreen
          ></iframe>

          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <iframe
            width="384px"
            className="aspect-video rounded-t-md"
            src="https://www.youtube.com/embed/HB3rpFcM1Qg?si=3A7J_n0NVEcd9VZj"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // allowfullscreen
          ></iframe>

          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                IIT-B Robotics Competition 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* {/* <!-- Versions --> */}
      <div className="flex items-center p-5 lg:p-[300px] w-full justify-center">
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
      </div>
      <footer className="flex justify-center items-center m-2">
        Made by 🦆 with Next.js & Tailwind
      </footer>
    </>
  );
}
