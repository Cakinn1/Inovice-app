import React from "react";
import { SenderAddressProps } from "../../App";

interface EditHeaderProps {
  senderAddress: SenderAddressProps;
  id: string;
  description: string;
}

export default function EditHeader(props: EditHeaderProps) {
  const { description, id, senderAddress } = props;
  return (
    <div className="flex justify-between">
      <div className="text-[14px]">
        <p className="font-semibold">#{id}</p>
        <p>{description}</p>
      </div>
      <div className="text-[14px]">
        <p>{senderAddress.street}</p>
        <p>{senderAddress.city}</p>
        <p>{senderAddress.postCode}</p>
        <p>{senderAddress.country}</p>
      </div>
    </div>
  );
}
