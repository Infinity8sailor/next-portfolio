"use client";
import React from "react";
import { useTheme } from "next-themes";

const ThemeToggleBtn = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <button
        onClick={() =>
          currentTheme == "dark" ? setTheme("light") : setTheme("dark")
        }
        className="
    transition-all duration-100 rounded-sm"
      >
        <img
          width={"25px"}
          src={
            currentTheme !== "dark" ? "./assets/sun.png" : "./assets/moon.svg"
          }
        />
      </button>
    </>
  );
};

export default ThemeToggleBtn;
