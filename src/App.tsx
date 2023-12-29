import Main from "./pages/Main";
import Nav from "./pages/Nav";
import data from "./constants/data.json";
import { useEffect, useState } from "react";

export interface InvoiceDataProps {
  clientAddress: ClientAddressProps;
  clientEmail: string;
  clientName: string;
  createdAt: string;
  description: string;
  id: string;
  items: InvoiceItem[];
  paymentDue: string;
  paymentTerms: number;
  senderAddress: SenderAddressProps;
  // status: "paid" | "pending" | "draft"
  status: string;
  total: number;
}

interface SenderAddressProps {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

interface ClientAddressProps {
  street: string;
  city: string;
  postCode: string;
  country: string;
}
interface InvoiceItem {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export default function App() {
  const [invoiceData, setInvoiceData] = useState<InvoiceDataProps[]>(data);
  return (
    <div>
      <Nav />
      <Main invoiceData={invoiceData} setInvoiceData={setInvoiceData} />
    </div>
  );
}
