import type React from "react";

type CardProps = {
  children: React.ReactNode;
  className: string | undefined;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={`bg-(--background) shadow-(--shadow) rounded-2xl ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
}
