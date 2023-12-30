import React from "react";
import { FaChevronRight } from "react-icons/fa";

interface StatusProps {
  statusBackground: string;
  statusDot: string;
  status: string;
  isTrue: boolean;
}

export default function StatusVersion(props: StatusProps) {
  const { statusBackground, statusDot, status, isTrue } = props;
  return (
    <div className="flex gap-x-4 items-center">
      <h1
        className={`${statusBackground} text-sm gap-x-2 font-bold w-[100px] flex rounded-lg justify-center items-center py-[10px]`}
      >
        <div className={`w-2 h-2 rounded-full ${statusDot}`}></div>
        {status.slice(0, 1).toUpperCase() + status.slice(1)}
      </h1>
      {isTrue && <FaChevronRight />}
    </div>
  );
}
