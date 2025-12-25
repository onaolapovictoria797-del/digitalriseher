import type { PropsWithChildren } from "react";

export function Card({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`bg-white rounded-2xl shadow ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}
