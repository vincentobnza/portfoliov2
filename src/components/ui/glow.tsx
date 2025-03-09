import React from "react";

interface GlowProps {
  blur: keyof typeof blurClasses;
}

const blurClasses = {
  sm: "blur-sm",
  md: "blur-md",
  lg: "blur-lg",
  xl: "blur-xl",
  "2xl": "blur-2xl",
  "3xl": "blur-3xl",
};

export const Glow: React.FC<GlowProps> = ({ blur }) => {
  return (
    <div
      className={`absolute size-16 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-green-300/60 to-gray-500/80 ${blurClasses[blur]} z-[-1]`}
    ></div>
  );
};
