import { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  variant?: "default" | "outline" | "ghost";
}>;

export function Button({ children, variant = "default" }: ButtonProps) {
  const base =
    "px-6 py-2 rounded-2xl font-medium transition hover:opacity-90";

  return (
    <button className={base}>
      {children}
    </button>
  );
}
