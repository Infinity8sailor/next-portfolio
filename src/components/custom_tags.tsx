import React from "react";

type DomainTagProps = {
  children: React.ReactNode;
};

export const DomainTag = ({ children }: DomainTagProps) => {
  return <div className="bg-cyan-200 text-cyan-700 dark:bg-orange-100 dark:text-orange-900 font-bold p-1 px-2 rounded-md">{children}</div>;
};
