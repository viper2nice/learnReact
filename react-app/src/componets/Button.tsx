import React from "react";

interface Props {
  children: string;
  onClick: () => void;
  color?: string; // can add a "?" to tell the complier that is optional
}

export const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};
