import React from "react";
import { InvoiceDataProps } from "../App";
import { FaChevronRight } from "react-icons/fa";
export default function Card(props: InvoiceDataProps) {
  const {
    clientAddress,
    clientEmail,
    clientName,
    createdAt,
    description,
    id,
    items,
    paymentDue,
    paymentTerms,
    senderAddress,
    status,
    total,
  } = props;

  const statusBackground =
    status === "paid"
      ? "bg-[#33d69f0f] text-[#33d69f]"
      : status === "pending"
      ? "text-[#ff8f00] bg-[#ff8f000f]"
      : status === "draft"
      ? "bg-[#dfe3fa0f] text-white"
      : "";
  const statusDot =
    status === "paid"
      ? "bg-[#33d69f]"
      : status === "pending"
      ? "bg-[#ff8f00]"
      : status === "draft"
      ? "bg-white"
      : "";

  return (
    <div className="justify-between text-white h-[90px] w-full rounded-lg flex items-center px-6 bg-[#1e2139]">
      <div className="text-sm flex items-center gap-x-4">
        <p>#{id}</p>
        <h1>Due {paymentDue}</h1>
        <div className="flex ">
          <h1 className="ml-[80px] ">{clientName}</h1>
        </div>
      </div>

      <div className="flex items-center gap-x-6">
        <h1 className="text-lg font-bold">${total.toFixed(2)}</h1>
        <div className="flex gap-x-4 items-center">
          <h1
            className={`${statusBackground} text-sm gap-x-2 font-bold w-[100px] flex rounded-lg justify-center items-center py-[10px]`}
          >
            <div className={`w-2 h-2 rounded-full ${statusDot}`}></div>
            {status.slice(0, 1).toLocaleUpperCase() + status.slice(1)}
          </h1>
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
}
