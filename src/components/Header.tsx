import React, { useState } from "react";
import {
  IoAddOutline,
  IoChevronDownOutline,
  IoChevronUpOutline,
} from "react-icons/io5";
import Sorting from "./Sorting";

interface HeaderProps {
  numberOfInvoicesLeft: number;
  handleSortingOptions: (value: string) => void
}
export default function Header(props: HeaderProps) {
  const { numberOfInvoicesLeft, handleSortingOptions } = props;
  const [isSortingOpen, setIsSortingOpen] = useState<boolean>(false);

  // after fix making it checked or not check with background color aswell
  return (
    <div className=" flex justify-between items-center text-white  py-[60px]">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Invoices</h1>
        <p className="text-sm">
          There are ({numberOfInvoicesLeft}) total invoices
        </p>
      </div>
      <div className="flex items-center gap-x-3 relative">
        <div
          className="flex gap-x-3 items-center"
          onClick={() => setIsSortingOpen(!isSortingOpen)}
        >
          <h1 className="font-semibold  cursor-pointer">Filter by status</h1>
          <IoChevronDownOutline className="text-[#7c5dfa]  cursor-pointer" />
          {isSortingOpen && <Sorting  handleSortingOptions={handleSortingOptions} />}
        </div>
        <button className="bg-[#7c5dfa]  group hover:opacity-65 duration-300 text-sm font-semibold flex items-center gap-x-4 p-2  px-3 rounded-full">
          <div className="bg-white p-2 duration-300 group-hover:opacity-65  rounded-full">
            <IoAddOutline className="text-[#7c5dfa] text-lg" />
          </div>
          New Invoice
        </button>
      </div>
    </div>
  );
}
