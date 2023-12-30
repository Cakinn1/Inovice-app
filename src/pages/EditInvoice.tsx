import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InvoiceHeader from "../components/edit/InvoiceHeader";
import EditOrDelete from "../components/edit/EditOrDelete";
import { InvoiceDataProps } from "../App";
import { Navigation } from "react-router-dom";
import EditMain from "../components/edit/EditMain";

interface EditInvoiceProps {
  invoiceData: InvoiceDataProps[];
  setInvoiceData: (value: InvoiceDataProps[]) => void;
}

export default function EditInvoice(props: EditInvoiceProps) {
  const { invoiceData, setInvoiceData } = props;
  const navigate = useNavigate();
  const { id } = useParams();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const filterOutData = invoiceData.filter((item) => {
    return item.id === id;
  });
  const objectData = Object.assign({}, filterOutData[0]);

  function handleDeleteInvoice() {
    const filterOutData = invoiceData.filter((item) => {
      return item.id !== id;
    });
    navigate("/");
    setInvoiceData(filterOutData);
  }

  function handleMarkAsPaid() {
    const updateObject = invoiceData.map((item) => {
      return item.id === id ? { ...item, status: "paid" } : item;
    });
    setInvoiceData(updateObject);
  }

  return (
    <div className="max-w-[730px]  space-y-4  py-[60px] mx-auto">
      <InvoiceHeader />
      <EditOrDelete
        invoiceData={invoiceData}
        setInvoiceData={setInvoiceData}
        objectData={objectData}
        handleMarkAsPaid={handleMarkAsPaid}
        isDeleteModalOpen={isDeleteModalOpen}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
        handleDeleteInvoice={handleDeleteInvoice}
        id={objectData.id}
        status={objectData.status}
      />
      <EditMain objectData={objectData} />
    </div>
  );
}
