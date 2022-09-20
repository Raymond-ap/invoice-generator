import React from "react";
import { Controls, Invoice, InvoiceForm } from "../components";
import ReactToPrint from "react-to-print";
import { FiSend } from "react-icons/fi";

const Home = () => {
  const [showInvoice, setShowInvoice] = React.useState(false);
  const [invoice, setInvoice] = React.useState([]);

  const handleprint = () => {
    window.print();
  };

  const handlepreview = (row) => {
    setInvoice(row);
    setShowInvoice(!showInvoice);
  };

  let componentRef = React.useRef();

  return (
    <>
      <main className="w-full items-center lg:p-10 px-3 py-3">
        <div>
          <div>
            {showInvoice ? (
              <>
                <div
                  className={`items-center justify-center mx-auto max-w-3xl`}
                >
                  <div className="my-3">
                    <div className="w-full">
                      <div className="mt-4 flex flex-row gap-4 items-center">
                        <button
                          onClick={() => setShowInvoice(false)}
                          className={`bg-red-500 hover:bg-red-600 hover:text-white
           capitalize w-full items-center justify-center text-black font-semibold py-2 px-4 rounded-md`}
                        >
                          {"back"}
                        </button>
                        {showInvoice && (
                          <ReactToPrint
                            trigger={() => (
                              <button
                                onClick={handleprint}
                                className="bg-blue-800 text-white hover:bg-blue-500 capitalize w-full items-center justify-center font-semibold py-2 px-4 rounded-md"
                              >
                                download / save
                              </button>
                            )}
                            content={() => componentRef.current}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div ref={componentRef}>
                    <Invoice invoice={invoice} />
                  </div>
                </div>
              </>
            ) : (
              <InvoiceForm handlepreview={handlepreview} />
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
