import React from "react";

interface ButtonProps {
  setIsDeleteModalOpen: (value: boolean) => void;
  isDeleteModalOpen: boolean;
  text: string;
  handleDeleteInvoice: () => void;
  setEditModal: (value: boolean) => void;
}

export default function Buttons(props: ButtonProps) {
  const {
    setIsDeleteModalOpen,
    isDeleteModalOpen,
    text,
    handleDeleteInvoice,
    setEditModal,
  } = props;
  return (
    <>
      <div>
        <button
          onClick={() => {
            if (text === "Cancel") {
              setIsDeleteModalOpen(!isDeleteModalOpen);
            } else {
              setEditModal(true);
            }
          }}
          className="bg-[#252945] text-sm font-semibold rounded-full py-3 hover:brightness-150 duration-300  px-6"
        >
          {text}
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            if (text === "Cancel") {
              handleDeleteInvoice();
              setIsDeleteModalOpen(!isDeleteModalOpen);
            } else {
              setIsDeleteModalOpen(!isDeleteModalOpen);
            }
          }}
          className="bg-red-500 text-sm font-semibold rounded-full py-3 hover:brightness-150 duration-300  px-6"
        >
          Delete
        </button>
      </div>
    </>
  );
}
