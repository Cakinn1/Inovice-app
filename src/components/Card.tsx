import React from "react";
import { InvoiceDataProps } from "../App";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import StatusVersion from "./StatusVersion";
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
    <Link
      to={`/invoice/${id}`}
      className="justify-between hover:border-[#7c5dfa] border-[#1e2139] border duration-300 text-white h-[90px] w-full rounded-lg flex items-center px-6 bg-[#1e2139]"
    >
      <div className="text-sm flex items-center gap-x-4">
        <p>#{id}</p>
        <h1>Due {paymentDue}</h1>
        <div className="flex ">
          <h1 className="ml-[80px] ">{clientName}</h1>
        </div>
      </div>

      <div className="flex items-center gap-x-6">
        <h1 className="text-lg font-bold">${total.toFixed(2)}</h1>
        <StatusVersion
          key={status}
          isTrue={true}
          status={status}
          statusDot={statusDot}
          statusBackground={statusBackground}
        />
      </div>
    </Link>
  );
}
