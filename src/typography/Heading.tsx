import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
}

export const Heading = ({ children }: HeadingProps) => {
  return (
    <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-100">
      {children}
    </h1>
  );
};
