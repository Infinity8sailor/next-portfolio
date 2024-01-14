import React from "react";

type Props = {};

const Workflows = (props: Props) => {
  return (
    <div>
      <div
        id="Algo"
        className="flex items-center w-full min-h-screen h-fit flex-col  relative"
      >
        <div className="h-screen w-full m-20">
          <iframe
            className="h-full w-full"
            // style="border: none"
            width="100%"
            height="100%"
            src="https://whimsical.com/embed/95LqbP4R3g8yB2HAeDqh6R"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Workflows;
