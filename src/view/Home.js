import React from "react";
import { Controls, Invoice, InvoiceForm } from "../components";
import ReactToPrint from "react-to-print";
import { FiSend } from "react-icons/fi";

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
    paymentMethod: "",
    paidBy: "",
    paidTo: "",
  });
  const handleprint = () => {
    window.print();
  };

  const handlepreview = () => {
    setShowInvoice(!showInvoice);
  };

  let componentRef = React.useRef();

  return (
    <>
      <main className="w-full items-center lg:p-10 px-3 py-3">
        <div className="grid lg:grid-cols-4 gap-4">
          <div className="lg:col-span-3">
            {showInvoice ? (
              <div ref={componentRef}>
                <Invoice invoice={invoice} />
              </div>
            ) : (
              <InvoiceForm setInvoice={setInvoice} invoice={invoice} />
            )}
          </div>
          <div className="col-span-1 ">
            <div className="w-full">
              <button className="bg-blue-800  shadow-lg capitalize w-full items-center justify-center flex flex-row hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-md">
                <FiSend size={18} />
                <span className="ml-3">Send invoice</span>
              </button>
              <div className="mt-4 flex flex-row gap-4 items-center">
                <button
                  onClick={handlepreview}
                  className={`
            ${
              showInvoice
                ? "bg-red-500 hover:bg-red-600 hover:text-white"
                : "bg-white hover:bg-[#ccc]"
            }
           capitalize w-full items-center justify-center text-black font-semibold py-2 px-4 rounded-md`}
                >
                  {showInvoice ? "Edit" : "Preview"}
                </button>
                {showInvoice && (
                  <ReactToPrint
                    trigger={() => (
                      <button
                        onClick={handleprint}
                        className="bg-white hover:bg-[#ccc] capitalize w-full items-center justify-center text-black font-semibold py-2 px-4 rounded-md"
                      >
                        download
                      </button>
                    )}
                    content={() => componentRef.current}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
