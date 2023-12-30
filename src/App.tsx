import Main from "./pages/Main";
import Nav from "./pages/Nav";
import data from "./constants/data.json";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditInvoice from "./pages/EditInvoice";

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
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <Main invoiceData={invoiceData} setInvoiceData={setInvoiceData} />
            }
          />
          <Route path="/invoice/:id" element={<EditInvoice setInvoiceData={setInvoiceData} invoiceData={invoiceData} />} />
        </Routes>
      </Router>
    </div>
  );
}
