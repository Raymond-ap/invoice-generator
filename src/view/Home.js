import React from "react";
import { Controls, Invoice, InvoiceForm } from "../components";

const Home = () => {
  const [showInvoice, setShowInvoice] = React.useState(false);
  const [invoice, setInvoice] = React.useState({
    billDate: "",
    dueDate: "",
    number: "",
    clientAddress: "",
    clientName: "",
    clientEmail: "",
    senderEmail: "",
    notes: "",
    billName: "",
    billType: "",
    totalAmount: "",
  });
  const handleprint = () => {
    window.print();
  };

  const handlepreview = () => {
    setShowInvoice(!showInvoice);
  };

  return (
    <>
      <main className="w-full items-center lg:p-10 px-3 py-3">
        <div className="grid lg:grid-cols-4 gap-4">
          <div className="lg:col-span-3">
            {showInvoice ? (
              <Invoice invoice={invoice} />
            ) : (
              <InvoiceForm setInvoice={setInvoice} invoice={invoice} />
            )}
          </div>
          <div className="col-span-1 ">
            <Controls
              handleprint={handleprint}
              handlepreview={handlepreview}
              showInvoice={showInvoice}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
