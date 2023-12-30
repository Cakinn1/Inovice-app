import React, { useEffect, useState } from "react";
import { InvoiceDataProps } from "../../App";
import StatusVersion from "../StatusVersion";
import { stat } from "fs/promises";
import DeleteModal from "./DeleteModal";
import Buttons from "./Buttons";
import EditModal from "./EditModal";

interface EditOrDelete {
  id: string;
  status: string;
  handleDeleteInvoice: () => void;
  setIsDeleteModalOpen: (value: boolean) => void;
  isDeleteModalOpen: boolean;
  handleMarkAsPaid: () => void;
  objectData: InvoiceDataProps;
  setInvoiceData: (value: InvoiceDataProps[]) => void;
  invoiceData: InvoiceDataProps[];
}

export default function EditOrDelete(props: EditOrDelete) {
  const {
    id,
    status,
    handleDeleteInvoice,
    setIsDeleteModalOpen,
    isDeleteModalOpen,
    handleMarkAsPaid,
    objectData,
    invoiceData,
    setInvoiceData,
  } = props;

  const [editModal, setEditModal] = useState<boolean>(false);

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

  const [inputStreetAddress, setInputStreetAddress] = useState<string>(
    objectData.senderAddress.street
  );
  const [inputCity, setInputCity] = useState<string>(
    objectData.senderAddress.city
  );
  const [inputPostcode, setInputPostcode] = useState<string>(
    objectData.senderAddress.postCode
  );
  const [inputCountry, setInputCountry] = useState<string>(
    objectData.senderAddress.country
  );

  function updateInvoiceField(
    field: string,
    value: string,
    inputValue: string
  ) {
    const updateInvoice = invoiceData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          [field]: {
            ...item[field],
            [value]: inputValue,
          },
        };
      } else {
        return item;
      }
    });
    setInvoiceData(updateInvoice);
  }
  const [clientName, setClientName] = useState<string>(objectData.clientName);
  const [clientEmail, setClientEmail] = useState<string>(
    objectData.clientEmail
  );
  const [clientCity, setClientCity] = useState<string>(
    objectData.clientAddress.city
  );

  function updateInvoiceSingleVoice(field: string, inputValue: string) {
    const updateInvoice = invoiceData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          [field]: inputValue,
        };
      } else {
        return item;
      }
    });
    setInvoiceData(updateInvoice);
  }

  // bill from
  console.log(objectData);

  function handleChangeStreetAddress() {
    updateInvoiceField("senderAddress", "street", inputStreetAddress);
  }
  function handleChangeCity() {
    updateInvoiceField("senderAddress", "city", inputCity);
  }
  function handleChangePostcode() {
    updateInvoiceField("senderAddress", "postCode", inputPostcode);
  }
  function handleChangeCityCountry() {
    updateInvoiceField("senderAddress", "country", inputCountry);
  }

  useEffect(() => {
    handleChangeStreetAddress();
  }, [inputStreetAddress, id]);

  useEffect(() => {
    handleChangeCity();
  }, [inputCity, id]);

  useEffect(() => {
    handleChangePostcode();
  }, [inputPostcode, id]);

  useEffect(() => {
    handleChangeCityCountry();
  }, [inputCountry, id]);

  // Bill Form

  function handleChangeName() {
    updateInvoiceSingleVoice("clientName", clientName);
  }
  function handleChangeEmail() {
    updateInvoiceSingleVoice("clientEmail", clientEmail);
  }

  function handleChangeStreet() {
    updateInvoiceField("clientAddress", "street", clientCity);
  }

  useEffect(() => {
    handleChangeName();
  }, [clientName, id]);

  useEffect(() => {
    handleChangeEmail();
  }, [clientEmail, id]);

  useEffect(() => {
    handleChangeStreet();
  }, [inputCity, id]);

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
            setEditModal={setEditModal}
            text="Edit"
            handleDeleteInvoice={handleDeleteInvoice}
            isDeleteModalOpen={isDeleteModalOpen}
            setIsDeleteModalOpen={setIsDeleteModalOpen}
          />
          {(status === "pending" || status === "draft") && (
            <button
              className="bg-[#7c5dfa] text-sm font-semibold rounded-full py-3 hover:brightness-150 duration-300  px-6"
              onClick={() => handleMarkAsPaid()}
            >
              Mark As Paid
            </button>
          )}
        </div>
      </div>
      {isDeleteModalOpen && (
        <DeleteModal
          setEditModal={setEditModal}
          handleDeleteInvoice={handleDeleteInvoice}
          isDeleteModalOpen={isDeleteModalOpen}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
        />
      )}
      {editModal && (
        <EditModal
          clientCity={clientCity}
          clientName={clientName}
          clientEmail={clientEmail}
          setClientName={setClientName}
          setClientEmail={setClientEmail}
          setClientCity={setClientCity}
          inputCity={inputCity}
          setInputCity={setInputCity}
          setInputCountry={setInputCountry}
          setInputPostcode={setInputPostcode}
          inputPostcode={inputPostcode}
          inputCountry={inputCountry}
          inputStreetAddress={inputStreetAddress}
          setInputStreetAddress={setInputStreetAddress}
          setEditModal={setEditModal}
          objectData={objectData}
        />
      )}
    </>
  );
}
