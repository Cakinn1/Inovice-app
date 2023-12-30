import React from "react";
import { InvoiceDataProps } from "../../App";
import InputField from "./InputField";
import { FaRegTrashAlt } from "react-icons/fa";

interface EditModalProps {
  setEditModal: (value: boolean) => void;
  objectData: InvoiceDataProps;
  inputStreetAddress: string;
  inputCity: string;
  inputCountry: string;
  inputPostcode: string;
  clientName: string;
  clientEmail: string;
  clientCity: string;
  setInputStreetAddress: (value: string) => void;
  setInputCity: (value: string) => void;
  setInputCountry: (value: string) => void;
  setInputPostcode: (value: string) => void;
  setClientName: (value: string) => void;
  setClientEmail: (value: string) => void;
  setClientCity: (value: string) => void;
}
export default function EditModal(props: EditModalProps) {
  const {
    objectData,
    setEditModal,
    setInputStreetAddress,
    inputStreetAddress,
    inputCity,
    inputCountry,
    inputPostcode,
    setInputCity,
    setInputCountry,
    setInputPostcode,
    clientCity,
    clientEmail,
    clientName,
    setClientCity,
    setClientEmail,
    setClientName,
  } = props;

  const headerTitle = "text-[#7c5dfa] text-[14px] font-semibold";
  const smallTitle = "text-white text-[14px]";
  const inputStyle =
    "bg-[#1e2139] border border-[#252945] focus:outline-none w-full rounded-md px-4 py-3 text-sm font-semibold text-white";
  return (
    <div
      onClick={() => setEditModal(false)}
      className="absolute cursor-pointer w-full h-[95vh] bg-opacity-45 top-14 left-0 bg-black"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // SubmitInfo();
        }}
        onClick={(e) => e.stopPropagation()}
        className="w-[620px] h-full space-y-4 p-6 overflow-y-scroll rounded-r-3xl text-white  bg-[#141625]"
      >
        <h1 className="font-bold text-3xl">
          Edit <span className="text-[#7e88c3]">#</span>
          {objectData.id}
        </h1>
        <div className="space-y-4">
          <h1 className={headerTitle}>Bill From</h1>

          <div className="space-y-4">
            <h1 className={smallTitle}>Street Address</h1>
            <input
              onChange={(e) => setInputStreetAddress(e.target.value)}
              className={inputStyle}
              value={inputStreetAddress}
              type="text"
            />
          </div>

          <div className="space-y-4 w-full ">
            <h1 className={smallTitle}>City</h1>
            <input
              onChange={(e) => setInputCity(e.target.value)}
              className={`${inputStyle} flex-1 max-w-[31%]`}
              value={inputCity}
              type="text"
            />
            <input
              onChange={(e) => setInputPostcode(e.target.value)}
              className={`${inputStyle}  flex-1 max-w-[31%] mx-3`}
              value={inputPostcode}
              type="text"
            />
            <input
              onChange={(e) => setInputCountry(e.target.value)}
              className={`${inputStyle} flex-1 max-w-[33%]`}
              value={inputCountry}
              type="text"
            />
          </div>
        </div>
        <div className="space-y-4">
          <h1 className={headerTitle}>Bill To</h1>

          <div className="space-y-4">
            <h1 className={smallTitle}>Client's Name</h1>
            <input
              onChange={(e) => setClientName(e.target.value)}
              className={inputStyle}
              value={clientName}
              type="text"
            />
          </div>
          <div className="space-y-4">
            <h1 className={smallTitle}>Client's Email</h1>
            <input
              onChange={(e) => setClientEmail(e.target.value)}
              className={inputStyle}
              value={clientEmail}
              type="text"
            />
          </div>
          <div className="space-y-4">
            <h1 className={smallTitle}>Street Address</h1>
            <input
              onChange={(e) => setClientCity(e.target.value)}
              className={inputStyle}
              value={clientCity}
              type="text"
            />
          </div>
        </div>
        <div className="space-y-4 w-full ">
          <h1 className={smallTitle}>City</h1>
          <input
            className={`${inputStyle} flex-1 max-w-[31%]`}
            value={objectData.clientAddress.city}
            type="text"
          />
          <input
            className={`${inputStyle}  flex-1 max-w-[31%] mx-3`}
            value={objectData.clientAddress.postCode}
            type="text"
          />
          <input
            className={`${inputStyle} flex-1 max-w-[33%]`}
            value={objectData.clientAddress.country}
            type="text"
          />
        </div>
        <div className="space-y-4">
          <h1 className={smallTitle}>Invoice Date</h1>
          <input
            className={`${inputStyle} cursor-not-allowed text-opacity-25`}
            value={objectData.paymentDue}
            type="text"
          />
        </div>
        <div className="space-y-4">
          <h1 className={smallTitle}>Payment Terms (change this)</h1>
          <input className={inputStyle} type="text" />
        </div>
        <div className="space-y-4">
          <h1 className={smallTitle}>Project Description</h1>
          <input
            className={inputStyle}
            value={objectData.description}
            type="text"
          />
        </div>

        <div className="space-y-4">
          <h1 className="opacity-35 font-bold text-lg">Item List</h1>
          <div className="flex justify-between">
            <h1 className={`${smallTitle} w-[100px] flex justify-start`}>
              Item Name
            </h1>
            <h1 className={`${smallTitle} w-[10px] flex justify-start`}>QTY</h1>
            <h1 className={`${smallTitle} w-[5px] flex justify-start`}>
              Price
            </h1>
            <h1 className={`${smallTitle} w-[130px] flex justify-start`}>
              Total
            </h1>
          </div>
          <div className="space-y-6">
            {objectData.items.map((item) => {
              return (
                <div className="flex items-center gap-x-4 w-full">
                  <input
                    className={`${inputStyle} w-[33%]`}
                    value={item.name}
                    type="text"
                  />
                  <input
                    className={`${inputStyle} w-[18%]`}
                    value={item.quantity}
                    type="text"
                  />
                  <input
                    className={`${inputStyle} w-[18%]`}
                    value={item.price.toFixed(2)}
                    type="text"
                  />
                  <div className="items-center flex gap-x-4 flex-1">
                    <h1>${item.total.toFixed(2)}</h1>
                    <FaRegTrashAlt className="text-[#7e88c3] hover:text-red-500 duration-300" />
                  </div>
                </div>
              );
            })}
            <button className="flex  duration-300 hover:brightness-150 bg-[#1e2139] w-full rounded-full py-3 font-semibold text-[14px] justify-center items-center">
              + Add New Item
            </button>
          </div>
          <div className="flex justify-end pt-12 gap-x-3">
            <button className="bg-[#252945] text-sm font-semibold rounded-full py-3 hover:brightness-150 duration-300  px-6">
              Cancel
            </button>
            <button
             
              className="bg-[#7c5dfa] text-sm font-semibold rounded-full py-4 hover:brightness-150 duration-300  px-6"
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
