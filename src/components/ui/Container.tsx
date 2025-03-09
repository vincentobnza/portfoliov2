import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-full flex flex-col justify-center items-center p-8 relative">
      {children}
    </div>
  );
};
