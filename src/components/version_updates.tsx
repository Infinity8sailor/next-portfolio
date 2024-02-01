import React from "react";
import TickText from "./text_with_tick";

type Props = {};

const Updates = (props: Props) => {
  return (
    <div className="flex items-center p-5 lg:p-[300px] w-full justify-center">
      <ol className="list-disc ml-5">
        <li>
          New Home page
          <ol>
            <TickText checked={false} text="React Utility Yard minim Design" />
            <TickText checked={false} text="Admin Io minim Design" />
            <TickText checked={false} text="Code Base minim Design" />
            <TickText checked={false} text="Music Ai minim Design" />
          </ol>
        </li>
        <li>
          Unsorted
          <ol className="">
            <TickText text="WhatsApp bot [ Duck Bot + Google Search + Google Images ]" />
            <TickText text="Code Base" />
            <TickText text="Ritual-Io [ Re-Design ] " />
            <TickText text="Korean Learning Notes" />
            <TickText text="Youtube chanenl links" />
            <TickText text="project I am working and Worked on" />
            <TickText text="Github link + Activity" />
            <TickText text="Kardz + [ Final Touch ] + GIF for the demo changing the Alphas" />
            <TickText text="Rein [ Improve + Solid Concept" />
            <TickText text="Renaming Admin-Io" />
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
  );
};

export default Updates;
