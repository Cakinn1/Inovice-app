import React from "react";
import { sortingVariables } from "../constants/constants";

interface SortingProps {
  handleSortingOptions: (value: string) => void;
}

export default function Sorting(props: SortingProps) {
  const { handleSortingOptions } = props;
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute p-6 shadow-2xl space-y-1 -bottom-[160px] -left-[70px] rounded-md bg-[#252945] min-h-[120px] w-[210px]"
    >
      {sortingVariables.map((variables) => {
        return (
          <div
            key={variables.title}
            className="flex gap-x-3 cursor-pointer"
            onClick={() => handleSortingOptions(variables.title)}
          >
            <input type="checkbox" className="bg-transparent duration-300 hover:opacity-70" />
            <h1 className="font-semibold duration-300 hover:opacity-70">{variables.title}</h1>
          </div>
        );
      })}
    </div>
  );
}
