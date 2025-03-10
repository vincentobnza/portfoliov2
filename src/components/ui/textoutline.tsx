interface TextOutlineProps {
  children: React.ReactNode;
}

export const TextOutline = ({ children }: TextOutlineProps) => {
  return (
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-[-1]">
      <h1 className="text-7xl md:text-[140px] font-extrabold uppercase tracking-wide text-transparent stroke-text">
        {children}
      </h1>
    </div>
  );
};
