import React from "react";
import { FiSend } from "react-icons/fi";

const Controls = ({ handleprint, handlepreview, showInvoice }) => {
  return (
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
          <button
            onClick={handleprint}
            className="bg-white hover:bg-[#ccc] capitalize w-full items-center justify-center text-black font-semibold py-2 px-4 rounded-md"
          >
            download
          </button>
        )}
      </div>
    </div>
  );
};

export default Controls;
