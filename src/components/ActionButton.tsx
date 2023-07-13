import React from "react";

type Props = {
  label: string;
};

export const ActionButton = ({ label }: Props) => {
  return (
    <div className="inline px-8 py-3 rounded-lg cursor-pointer w-fit h-fit bg-secondary-500 hover: hover:bg-primary-500 hover:text-white">
      {label}
    </div>
  );
};
