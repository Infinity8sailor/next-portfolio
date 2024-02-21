"use client";
import React, { useState } from "react";
import GlowBox from "../glowBox";
import { Button, Input, ToggleSwitch } from "react-utility-yard";
import { ClassNames } from "@emotion/react";

type Props = { mini?: boolean };

function Elemental({ mini = false }: Props) {
  const [state, setState] = useState({
    inputText: "Annie Leonhart",
    time: "10:45",
    datetime: "2024-02-23T21:48",
    date: "2024-02-23",
  });
  return (
    <div className="flex flex-col items-center pt-10">
      <h1 className="text-7xl"> Elemental</h1>
      <h1 className="text-4xl text-gray-500 dark:text-gray-300">
        Individual Experimentation and Utility Projects
      </h1>
      <div className="flex justify-center gap-2">
        <div className="flex flex-col gap-2">
          <GlowBox
            color="lightBlue"
            darkColor="darkBlue"
            direction="top"
            className="p-5 flex justify-center items-center text-xl"
          >
            <h1 className="text-2xl">Music</h1>
          </GlowBox>
          {!mini && (
            <GlowBox
              color="lightBlue"
              darkColor="darkPurple"
              direction="bottom"
              className="p-2 rounded-md flex gap-2 flex-col"
            >
              <div className="flex text-xl w-full">
                <h1 className="text-2xl">MusicAi</h1>
              </div>
              <div className="flex flex-col gap-1 w-full list-disc pl-6 text-lg">
                {[
                  "Auto detect Vocals Only Regions",
                  "Auto Demix Vocals, Drums, Bass, Others",
                  "Personalised Mash-ups",
                ].map((m) => (
                  <h1 className="list-item">{m}</h1>
                ))}
              </div>
              <div className="flex justify-center items-center p-2">
                <img
                  className="rounded-md"
                  src="./assets/demixes.png"
                  alt="Demixes"
                />
              </div>
            </GlowBox>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <GlowBox
            color="lightBlue"
            darkColor="darkBlue"
            direction="top"
            className="p-5 flex justify-center items-center text-xl"
          >
            <h1 className="text-2xl">Code</h1>
          </GlowBox>
          {!mini && (
            <GlowBox
              color="lightBlue"
              darkColor="darkPurple"
              direction="bottom"
              className="p-2 rounded-md flex gap-2 flex-col"
            >
              <div className="flex text-xl w-full">
                <h1 className="text-2xl">CodeBase</h1>
              </div>
              <div className="flex flex-col gap-1 w-full list-disc pl-6 text-lg">
                {[
                  "Add Problem details and solution",
                  "Multiple solutions can be added",
                  "Code syntax highlighting for Different of languages",
                  "Search from list of questions available",
                ].map((m) => (
                  <h1 className="list-item">{m}</h1>
                ))}
              </div>
              <div className="flex justify-center items-center p-2">
                <img
                  className="rounded-md max-h-96"
                  src="./assets/mini_code.png"
                  alt="Demixes"
                />
              </div>
            </GlowBox>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <GlowBox
            color="lightBlue"
            darkColor="darkBlue"
            direction="top"
            className="p-5 flex justify-center items-center text-xl"
          >
            <h1 className="text-2xl">UI/UX</h1>
          </GlowBox>
          {!mini && (
            <GlowBox
              color="lightBlue"
              darkColor="darkPurple"
              direction="bottom"
              className="p-2 rounded-md flex gap-2 flex-col"
            >
              <div className="flex text-xl w-full">
                <h1 className="text-2xl">React Utility Yard</h1>
              </div>
              <div className="flex flex-col gap-1 w-full list-disc pl-6 text-lg">
                {[
                  "React Component Library",
                  "Published on NPM",
                  "Uses Tailwind & Material UI Components",
                  "One UI, Many Apps",
                ].map((m) => (
                  <h1 className="list-item">{m}</h1>
                ))}
              </div>
              <div className="flex justify-center items-center p-2 flex-col gap-2">
                <div className="text-white dark:text-black flex flex-wrap gap-1 justify-center items-center max-w-80">
                  <Button text="Click me!" />
                  <Button text="Icon" icon="girl" />
                  <Button color="warm" text="Warm Click!" />
                  <Button color="warm" text="Icon pack" icon="boy" />
                  <Button color="cool" text="Edit" icon="edit" />
                </div>
                <div className="text-white dark:text-black flex flex-wrap gap-1 justify-center items-center max-w-80">
                  <ToggleSwitch color="blue" onChange={() => null} size="sm" />
                  <ToggleSwitch
                    color="blue"
                    onChange={() => null}
                    size="md"
                    check={true}
                  />
                  <ToggleSwitch color="blue" onChange={() => null} size="lg" />
                  <ToggleSwitch color="red" onChange={() => null} size="lg" />
                  <ToggleSwitch
                    color="green"
                    onChange={() => null}
                    size="md"
                    check={true}
                  />
                  <ToggleSwitch color="blue" onChange={() => null} size="sm" />
                </div>
                <div className="flex  flex-col flex-wrap gap-1 justify-center items-center max-w-80">
                  <Input
                    className="bg-white w-32 text-black"
                    placeholder="Type for me...."
                    editOn
                    size="sm"
                    type="text"
                    value={state.inputText}
                    onchange={(value: any) =>
                      setState({ ...state, inputText: value })
                    }
                  />
                  <Input
                    className="bg-lime-300 w-44"
                    placeholder="Type for me...."
                    editOn
                    size="md"
                    type="text"
                    value={state.inputText}
                    onchange={(value: any) =>
                      setState({ ...state, inputText: value })
                    }
                  />

                  <Input
                    className="bg-blue-500 text-white w-56 font-bold"
                    placeholder="Type for me...."
                    editOn
                    size="lg"
                    type="text"
                    value={state.inputText}
                    onchange={(value: any) =>
                      setState({ ...state, inputText: value })
                    }
                  />
                  <div className="flex gap-1">
                    <Input
                      className=""
                      placeholder="Type for me...."
                      editOn
                      size="lg"
                      type="date"
                      value={state.date}
                      onchange={(value: any) =>
                        setState({ ...state, date: value })
                      }
                    />{" "}
                    <Input
                      className=""
                      placeholder="Type for me...."
                      editOn
                      size="lg"
                      type="time"
                      value={state.time}
                      onchange={(value: any) =>
                        setState({ ...state, time: value })
                      }
                    />
                  </div>
                  <Input
                    className="dark:bg-black"
                    placeholder="Type for me...."
                    editOn
                    size="lg"
                    type="datetime-local"
                    value={state.datetime}
                    onchange={(value: any) =>
                      // console.log(value)
                      setState({ ...state, datetime: value })
                    }
                  />
                </div>
              </div>
            </GlowBox>
          )}
        </div>
      </div>
    </div>
  );
}

export default Elemental;
