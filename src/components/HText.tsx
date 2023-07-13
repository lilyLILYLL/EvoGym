import React from "react";

export type Props = {
  children: React.ReactNode;
};

export const HText = ({ children }: Props) => {
  return <div className="text-2xl font-montserrat">{children}</div>;
};
