import type React from "react";

const textVariants = {
  default: "text-xl",
  muted: "text-xl text-(--txt-secondary)",
  heading: "text-2xl",
  blast: "text-3xl",
};

type TextVariant = keyof typeof textVariants;

type TextProps = {
  variant: TextVariant;
  children: React.ReactNode;
  className?: string | undefined;
};

export function Text({ variant = "default", children, className }: TextProps) {
  return (
    <span className={`${textVariants[variant]} ${className ? className : ""}`}>
      {children}
    </span>
  );
}
