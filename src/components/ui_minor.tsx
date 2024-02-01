import React from "react";

type Props = { children: React.ReactNode; className?: string };

export const TitleText = ({ children, className }: Props) => {
  return (
    <div className={`text-6xl lg:text-8xl font-[roboto] ${className}`}>
      {children}
    </div>
  );
};
