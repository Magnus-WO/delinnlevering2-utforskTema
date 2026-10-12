"use client";

import "./Button.css";

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type: "submit" | "reset" | "button";
};

export default function Button({
  children,
  onClick,
  className = "Button-primary",
  type,
}: ButtonProps) {
  return (
    <button className={`Button ${className}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
