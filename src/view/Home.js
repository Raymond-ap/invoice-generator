import React from "react";
import { Controls, Invoice, InvoiceForm } from "../components";
import ReactToPrint from "react-to-print";
import {
  AiOutlineArrowLeft,
  AiOutlineCloudDownload,
  AiOutlineSave,
} from "react-icons/ai";

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
                    <div className="w-full flex flex-row items-center justify-between">
                      <button
                        className={``}
                        onClick={() => setShowInvoice(false)}
                      >
                        <AiOutlineArrowLeft size={25} />
                      </button>
                      <div className="mt-4 flex flex-row gap-4 items-center justify-end">
                        <button
                          className={`bg-red-500 text-white hover:bg-red-600 hover:text-white capitalize w-full  justify-center flex flex-row items-center gap-1  font-semibold py-2 px-4 rounded-md`}
                        >
                          <AiOutlineSave size={20} />
                          save
                        </button>
                        {showInvoice && (
                          <ReactToPrint
                            trigger={() => (
                              <button
                                onClick={handleprint}
                                className="bg-blue-800 text-white flex flex-row gap-1 hover:bg-blue-500 capitalize w-full items-center justify-center font-semibold py-2 px-4 rounded-md"
                              >
                                <AiOutlineCloudDownload size={20} />
                                download
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
