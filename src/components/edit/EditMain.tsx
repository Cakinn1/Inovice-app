import React from "react";
import EditHeader from "./EditHeader";
import { InvoiceDataProps } from "../../App";
import InfoHeader from "./InfoHeader";
import ItemInfo from "./ItemInfo";

interface EditMainProps {
  objectData: InvoiceDataProps;
}

export default function EditMain(props: EditMainProps) {
  const { objectData } = props;

  console.log(objectData);


  return (
    <section className="bg-[#1e2139] space-y-4 text-white rounded-lg p-6 ">
      <div>
        <EditHeader
          id={objectData.id}
          description={objectData.description}
          senderAddress={objectData.senderAddress}
        />
      </div>
      <div>
        <InfoHeader
          createdAt={objectData.createdAt}
          paymentDue={objectData.paymentDue}
          clientName={objectData.clientName}
          clientEmail={objectData.clientEmail}
          clientAddress={objectData.clientAddress}
        />
      </div>

      <div className="pt-10">
        <ItemInfo items={objectData.items} total={objectData.total} />
      </div>
    </section>
  );
}
