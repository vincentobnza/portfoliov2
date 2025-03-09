import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
}

export const Text = ({ children }: HeadingProps) => {
  return (
    <h1 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
      {children}
    </h1>
  );
};
