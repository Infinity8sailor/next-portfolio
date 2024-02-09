import React from "react";

type Props = {};

const Workflows = (props: Props) => {
  return (
    <div
      id="Workflows"
      className="flex items-center w-full min-h-full flex-col pt-10"
    >
      <div className="w-full h-full p-5 lg:p-20 flex flex-col gap-5">
        <iframe
          className=" h-[250px] lg:h-screen w-full"
          src="https://whimsical.com/embed/95LqbP4R3g8yB2HAeDqh6R"
        ></iframe>
        <iframe
          className=" h-[250px] lg:h-screen w-full"
          src="https://whimsical.com/embed/SNZjiDmQgv1v52UB4Bn7ak"
        ></iframe>
      </div>
    </div>
  );
};

export default Workflows;
