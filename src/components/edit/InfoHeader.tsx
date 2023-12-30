import { ClientAddressProps } from "../../App";

interface InfoProps {
  clientAddress: ClientAddressProps;
  clientEmail: string;
  createdAt: string;
  paymentDue: string;
  clientName: string;
}
export default function InfoHeader(props: InfoProps) {
  const { clientAddress, clientEmail, clientName, createdAt, paymentDue } =
    props;
  return (
    <div className="flex gap-x-20 w-full">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-[12px]">Invoice Date</h1>
          <p className="font-semibold">{createdAt}</p>
        </div>

        <div className="space-y-2">
          <h1 className="text-[12px]">Payment Due</h1>
          <p className="font-semibold">{paymentDue}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-[12px]">Bill To</h1>
          <p className="font-semibold">{clientName}</p>

          <div className="space-y-[2px]">
            <p className="text-[12px]">{clientAddress.street}</p>
            <p className="text-[12px]">{clientAddress.city}</p>
            <p className="text-[12px]">{clientAddress.postCode}</p>
            <p className="text-[12px]">{clientAddress.country}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col space-y-2   ml-[60px]">
        <h1 className="text-[12px]">Send To</h1>
        <p className="font-semibold">{clientEmail}</p>
      </div>
    </div>
  );
}
