import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex h-10 justify-center items-center relative">
      <img
        src="./assets/Circular_fire.png"
        className="dark:block hidden absolute object-cover h-[230px] lg:h-[900px] w-full object-top -z-10 bottom-0"
      />
      {/* <img
        src="./assets/Circular_fire.png"
        className="dark:block hidden absolute object-cover h-[230px] w-full object-top -z-10 -bottom-0"
      /> */}
      <img
        // src="./assets/ice_mountain_2.png"
        src="./assets/ice_mountain.png"
        className="dark:hidden absolute object-contain h-[230] lg:h-[400px] w-full object-top -z-10 -bottom-0"
      />
      <div className="z-10 bg-blue-300 px-2 rounded-t-md dark:bg-transparent">
        Made by 🦆 with Next.js & Tailwind
      </div>
    </footer>
  );
};

export default Footer;
