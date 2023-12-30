import React from "react";

interface ButtonProps {
  setIsDeleteModalOpen: (value: boolean) => void;
  isDeleteModalOpen: boolean;
  text: string;
  handleDeleteInvoice: () => void;
}

export default function Buttons(props: ButtonProps) {
  const { setIsDeleteModalOpen, isDeleteModalOpen, text, handleDeleteInvoice } =
    props;
  return (
    <>
      <div>
        <button
          onClick={() => {
            if (text === "Cancel") {
              setIsDeleteModalOpen(!isDeleteModalOpen);
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
