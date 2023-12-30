import React from 'react'
import { InvoiceDataProps } from '../../App';

interface InputFieldProps {
    objectData: InvoiceDataProps
    text: string
}

export default function InputField(props: InputFieldProps) {
    const {objectData, text} = props
    const smallTitle = "text-white text-[14px]";
    const inputStyle = "bg-[#1e2139] border border-[#252945] focus:outline-none w-full rounded-md px-4 py-3 text-sm font-semibold text-white"
  return (
    <div className="space-y-2">
    <h1 className={smallTitle}>{text}</h1>
    <input className={inputStyle} value={objectData.senderAddress.street} type="text" />
  </div>
  )
}
