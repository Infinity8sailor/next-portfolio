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
          className="hidden dark:flex"
          width={"25px"}
          src={"./assets/moon.svg"}
        />
        <img
          className="flex dark:hidden"
          width={"25px"}
          src={"./assets/sun.png"}
        />
      </button>
    </>
  );
};

export default ThemeToggleBtn;
