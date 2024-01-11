import Script from "next/script";
import React from "react";

type Props = {};

function ScriptCSS({}: Props) {
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" />
      <Script src="./resource/ghost.js" />;
    </>
  );
}

export default ScriptCSS;
