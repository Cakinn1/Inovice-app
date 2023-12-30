import React from "react";
import { InvoiceItem } from "../../App";

interface ItemInfoProps {
  items: InvoiceItem[];
  total: number;
}

export default function ItemInfo(props: ItemInfoProps) {
  const { items, total } = props;
  return (
    <>
    <div className="bg-[#252945] space-y-10 p-8 pb-12 rounded-t-lg flex-1">
      <div className="flex justify-between">
        <h1 className="text-[14px]">Item Name</h1>
        <div className="flex">
          <h1 className="w-[10px] justify-end flex text-[14px] ">QTY</h1>
          <h1 className="w-[140px] justify-end flex text-[14px] ">Price</h1>
          <h1 className="w-[140px] justify-end flex text-[14px] ">Total</h1>
        </div>
      </div>

      <div className="space-y-6">
        {items.map((item) => (
            <div className="flex justify-between items-center font-semibold">
            <p className="w-[200px] flex text-[14px]">{item.name}</p>
            <div className="flex">
              <p className="w-[10px] text-[14px] justify-start flex ">{item.quantity}</p>
              <p className="w-[140px] text-[14px] justify-end flex ">${item.price.toFixed(2)}</p>
              <p className="w-[140px] text-[14px] justify-end flex ">${item.total.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="bg-[#0c0e16] justify-between rounded-b-lg px-8 min-h-[80px] py-8 flex items-center">
        <h1 className="text-[14px]">Amount Due</h1>
        <p className="font-semibold text-2xl">${total.toFixed(2)}</p>
    </div>
    </>
  );
}
