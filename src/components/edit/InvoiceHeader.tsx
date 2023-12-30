import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function InvoiceHeader() {
  return (
    <Link to="/" className="flex gap-x-3 font-semibold text-white items-center text-sm">
      <img src="/assets/icon-arrow-left.svg" alt="" />
      <h1 className="hover:opacity-40 duration-300">Go Back</h1>
    </Link>
  );
}
