import React from "react";

type Props = {
  className?: string;
  color?: "blue" | "lightBlue" | "purple" | "orange" | "none";
  darkColor?: "blue" | "lightBlue" | "purple" | "orange" | "none";
  children: React.ReactElement | React.ReactElement[];
  direction?: "right" | "left" | "top" | "bottom";
};

function GlowBox({
  className,
  color = "none",
  darkColor = "none",
  children,
  direction = "right",
}: Props) {
  const directions = {
    left: "bg-gradient-to-l",
    right: "bg-gradient-to-r",
    top: "bg-gradient-to-t",
    bottom: "bg-gradient-to-b",
  };
  const colors = {
    blue: "from-blue-900 to-transparent",
    lightBlue: "from-cyan-400 to-transparent",
    purple: "from-purple-900 to-transparent",
    orange: "from-orange-400 to-transparent",
    none: "",
  };
  const darkColors = {
    blue: "dark:from-blue-900 dark:to-transparent",
    lightBlue: "dark:from-cyan-400 dark:to-transparent",
    purple: "dark:from-purple-900 dark:to-transparent",
    orange: "dark:from-orange-400 dark:to-transparent",
    none: "",
  };
  return (
    <div
      className={` h-full w-full ${directions[direction]} ${colors[color]} ${darkColors[darkColor]} ${className}`}
    >
      {children}
    </div>
  );
}

export default GlowBox;
