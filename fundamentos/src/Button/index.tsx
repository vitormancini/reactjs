import type React from "react";

const buttonVariants = {
  default: "bg-(--background)",
  primary: "bg-(--primary)",
};

type buttonVariant = keyof typeof buttonVariants;

type ButtonProps = {
  variant: buttonVariant;
  children: React.ReactNode;
  className?: string | undefined;
};

export function Button({
  variant,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`flex items-center justify-center rounded-xl p-3 cursor-pointer text-(--text) bg-linear-(--gradient) hover:bg-linear-(--gradient-hover) shadow-(--shadow) ${
        buttonVariants[variant]
      } ${className ? className : ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
