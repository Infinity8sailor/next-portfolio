// import Image from "next/image";
import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  tag?: string;
  color?: string;
  colorTag?: string;
  logo?: string;
  logoColor?: string;
};

export const Badge = ({
  name,
  tag = "",
  color,
  colorTag,
  logo,
  logoColor,
}: Props) => {
  return (
    <Image
      alt={name}
      src={`https://img.shields.io/badge/${
        tag === "" ? name : name + "-" + tag
      }-${colorTag}?logo=${logo}&labelColor=${color}&logoColor=${logoColor}`}
      width={0}
      height={0}
      style={{ width: "auto", height: "25px" }} // optional}
    />
  );
};
