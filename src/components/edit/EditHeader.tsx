import React from "react";
import { SenderAddressProps } from "../../App";

interface EditHeaderProps {
  senderAddress: SenderAddressProps;
  id: string;
  description: string;
}

export default function EditHeader(props: EditHeaderProps) {
  return (
    <div className="flex justify-between">
      <div className="text-[14px]">
        <p className="font-semibold">#{props.id}</p>
        <p>{props.description}</p>
      </div>
      <div className="text-[14px]">
        <p>{props.senderAddress.street}</p>
        <p>{props.senderAddress.city}</p>
        <p>{props.senderAddress.postCode}</p>
        <p>{props.senderAddress.country}</p>
      </div>
    </div>
  );
}
