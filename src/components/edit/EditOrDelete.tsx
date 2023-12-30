import React from "react";
import { InvoiceDataProps } from "../../App";
import StatusVersion from "../StatusVersion";
import { stat } from "fs/promises";
import DeleteModal from "./DeleteModal";
import Buttons from "./Buttons";

interface EditOrDelete {
  id: string;
  status: string;
  handleDeleteInvoice: () => void;
  setIsDeleteModalOpen: (value: boolean) => void;
  isDeleteModalOpen: boolean;
}

export default function EditOrDelete(props: EditOrDelete) {
  const {
    id,
    status,
    handleDeleteInvoice,
    setIsDeleteModalOpen,
    isDeleteModalOpen,
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
    <>
      <div className="bg-[#1e2139] px-8 text-white rounded-lg h-[110px] flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          <h1>Status</h1>
          <StatusVersion
            isTrue={false}
            status={status}
            statusBackground={statusBackground}
            statusDot={statusDot}
            key={status}
          />
        </div>
        <div className="flex items-center gap-x-4">
          <Buttons
            text="Edit"
            handleDeleteInvoice={handleDeleteInvoice}
            isDeleteModalOpen={isDeleteModalOpen}
            setIsDeleteModalOpen={setIsDeleteModalOpen}
          />
        </div>
      </div>
      {isDeleteModalOpen && (
        <DeleteModal
          handleDeleteInvoice={handleDeleteInvoice}
          isDeleteModalOpen={isDeleteModalOpen}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
        />
      )}
    </>
  );
}
