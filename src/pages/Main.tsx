import React, { useState } from "react";
import { InvoiceDataProps } from "../App";
import Header from "../components/Header";
import data from "../constants/data.json";
import Card from "../components/Card";

interface MainProps {
  invoiceData: InvoiceDataProps[];
  setInvoiceData: (value: InvoiceDataProps[]) => void;
}

export default function Main(props: MainProps) {
  const { invoiceData, setInvoiceData } = props;
  const [filterItems, setFilterItems] =
    useState<InvoiceDataProps[]>(invoiceData);

  const numberOfInvoicesLeft = filterItems.length;

  function handleSortingOptions(value: string) {
    if (value === "Draft") {
      setFilterItems(
        invoiceData.slice().filter((item) => item.status === "draft")
      );
    } else if (value === "Paid") {
      setFilterItems(
        invoiceData.slice().filter((item) => item.status === "paid")
      );
    } else if (value === "Pending") {
      setFilterItems(
        invoiceData.slice().filter((item) => item.status === "pending")
      );
    } else if (value === "All") {
      setFilterItems(invoiceData);
    }
  }

  return (
    <section
      className=" max-w-[730px] mx-auto min-h-screen pb-[100px]"
    >
      <Header
        handleSortingOptions={handleSortingOptions}
        numberOfInvoicesLeft={numberOfInvoicesLeft}
      />
      <div className="space-y-4">
        {filterItems.map((item) => {
          return <Card {...item} />;
        })}
      </div>
    </section>
  );
}
