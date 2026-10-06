"use client";

import "./Button.css";

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button className="Button" onClick={onClick}>
      {children}
    </button>
  );
}
