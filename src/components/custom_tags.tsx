import React from "react";

type DomainTagProps = {
  children: React.ReactNode;
};

export const DomainTag = ({ children }: DomainTagProps) => {
  return <div className="bg-slate-300 p-1 px-2 rounded-md">{children}</div>;
};
