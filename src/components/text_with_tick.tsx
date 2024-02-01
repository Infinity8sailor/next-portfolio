import React from "react";

type Props = {
  checked?: boolean;
  text: string;
};

const TickText = ({ checked = false, text = "Info" }: Props) => {
  return (
    <div>
      <label className="flex gap-2">
        <input
          type="checkbox"
          className="rounded-e-md accent-slate-300"
          checked={checked}
          disabled
        />
        {text}
      </label>
    </div>
  );
};

export default TickText;
