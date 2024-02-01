import React from "react";

type Props = {};

const EcoSystem = (props: Props) => {
  return (
    <div
    //   id="Eco_System"
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
  );
};

export default EcoSystem;
