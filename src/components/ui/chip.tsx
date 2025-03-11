import React from "react";

interface ChipProps {
  label: string;
}

const Chip: React.FC<ChipProps> = ({ label }) => {
  return (
    <div className="bg-white dark:bg-zinc-800/40 py-1 px-3 rounded-sm border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-500 text-xs font-bold">
      {label}
    </div>
  );
};

export default Chip;
