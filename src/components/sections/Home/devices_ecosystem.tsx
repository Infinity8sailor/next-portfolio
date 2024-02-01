import React from "react";

type Props = {};

function DevicesEcosystem({}: Props) {
  return (
    <div className="h-[300px] w-full rounded-t-xl rounded-b-3xl text-black dark:text-white ">
      <div className="bg-gray-600/50 backdrop-blur-sm mx-10 h-[300px] text-black dark:text-white rounded-t-xl rounded-b-3xl z-10 flex justify-center items-center">
        <div className="w-[300px] h-[300px] relative">
          <img className="absolute  top-10 h-32" src="./assets/windows.png" />
          <img
            className="absolute bottom-9 right-12 h-24"
            src="./assets/android_phone.png"
          />
          <img
            className="absolute bottom-5 left-6 h-16"
            src="./assets/wearos_watch.png"
          />
        </div>
        <h1 className="">Devices Ecosystem</h1>
      </div>
    </div>
  );
}

export default DevicesEcosystem;
