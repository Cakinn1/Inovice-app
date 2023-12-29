import React, { useState } from "react";
import { InvoiceDataProps } from "../App";
import Header from "../components/Header";
import data from "../constants/data.json";

interface MainProps {
  invoiceData: InvoiceDataProps[];
  setInvoiceData: (value: InvoiceDataProps[]) => void;
}

export default function Main(props: MainProps) {
  const { invoiceData, setInvoiceData } = props;
  const [filterItems, setFilterItems] =
    useState<InvoiceDataProps[]>(invoiceData);
  const numberOfInvoicesLeft = invoiceData.length

  function handleSortingOptions(value: string) {
    if (value === "Draft") {
      setInvoiceData(
        filterItems.slice().filter((item) => item.status === "draft")
      );
    } else if (value === "Paid") {
      setInvoiceData(
        filterItems.slice().filter((item) => item.status === "paid")
      );
    } else if (value === "Pending") {
      setInvoiceData(
        filterItems.slice().filter((item) => item.status === "pending")
      );
    } else if (value === "") {
      setInvoiceData(invoiceData);
    }
  }
  console.log(invoiceData);

  return (
    <section style={{ height: "calc(100vh - 72px)" }} className="bg-[#141625]">
      <Header
        handleSortingOptions={handleSortingOptions}
        numberOfInvoicesLeft={numberOfInvoicesLeft}
      />
    </section>
  );
}
