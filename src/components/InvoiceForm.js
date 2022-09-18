import React from "react";
import FormInput from "./FormInput";
import { Line } from "./Line";

const InvoiceForm = ({ setInvoice, invoice }) => {
  return (
    <div className="p-3 bg-white rounded-md shadow-md transition delay-150">
      <InvoiceHeader invoice={invoice} />
      <Line />
      <FormWrapper setInvoice={setInvoice} invoice={invoice} />
    </div>
  );
};

const FormWrapper = ({ setInvoice, invoice }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 my-2">
        <FormInput
          label={"bill date"}
          type={"date"}
          placeholder={"Date"}
          value={invoice.billDate}
          onChange={(e) => setInvoice({ ...invoice, billDate: e.target.value })}
        />
        <FormInput
          label={"due date"}
          type={"date"}
          placeholder={"Due Date"}
          value={invoice.dueDate}
          onChange={(e) => setInvoice({ ...invoice, dueDate: e.target.value })}
        />
        <FormInput
          label={"bill name"}
          type={"text"}
          placeholder={"Bill name"}
          value={invoice.billName}
          onChange={(e) => setInvoice({ ...invoice, billName: e.target.value })}
        />
        <FormInput
          label={"bill type"}
          type={"text"}
          placeholder={"Bill type"}
          value={invoice.billType}
          onChange={(e) => setInvoice({ ...invoice, billType: e.target.value })}
        />
      </div>
      <Line />
      <div className="grid grid-cols-2 gap-4 my-2">
        <FormInput
          label={"invoice number"}
          type={"text"}
          placeholder={"001"}
          value={invoice.number}
          onChange={(e) => setInvoice({ ...invoice, number: e.target.value })}
        />
        <FormInput
          label={"Client's address"}
          type={"text"}
          placeholder={"Client's address"}
          value={invoice.clientAddress}
          onChange={(e) =>
            setInvoice({ ...invoice, clientAddress: e.target.value })
          }
        />
      </div>
      <div className="grid grid-cols-2 gap-4 my-2">
        <FormInput
          label={"bill from"}
          type={"email"}
          placeholder={"Email"}
          value={invoice.senderEmail}
          onChange={(e) =>
            setInvoice({ ...invoice, senderEmail: e.target.value })
          }
        />
        <FormInput
          label={"bill to"}
          type={"email"}
          placeholder={"Client Email"}
          value={invoice.clientEmail}
          onChange={(e) =>
            setInvoice({ ...invoice, clientEmail: e.target.value })
          }
        />
      </div>
      <Line />

      <div className="grid grid-cols-2 gap-4 my-2">
        <FormInput
          label={"total amount"}
          type={"number"}
          placeholder={"0.00"}
          value={invoice.totalAmount}
          onChange={(e) =>
            setInvoice({ ...invoice, totalAmount: e.target.value })
          }
        />
      </div>
      <Line />
      <div className="my-2">
        <FormInput
          label={"notes"}
          type={"text"}
          placeholder={"Notes"}
          value={invoice.notes}
          onChange={(e) => setInvoice({ ...invoice, notes: e.target.value })}
        />
      </div>
    </>
  );
};

const InvoiceHeader = ({ invoice }) => {
  return (
    <>
      <div className="flex justify-center items-center my-5">
        <h1 className="text-3xl font-bold text-gray-900">
          Invoice
          <span className="ml-2 text-gray-500">#{invoice.number}</span>
        </h1>
      </div>
    </>
  );
};

export default InvoiceForm;
