import React from "react";
const Invoice = ({ invoice }) => {
  return (
    <div className="py-3 px-5 bg-white rounded-md shadow-md transition delay-150">
      <div className="flex flex-row items-center justify-between">
        <div className="capitalize flex items-center justify-center w-20 h-20 bg-pink-700 text-2xl text-white font-bold rounded-md">
          <h1>Logo</h1>
        </div>
        <div className="text-right">
          <h1 className="text-2xl font-bold">Invoice</h1>
          <p className="text-gray-500">Bill No: #{invoice.number}</p>
          <p className="text-gray-500">
            Issued on: {new Date(invoice.billDate).toDateString()}
          </p>
          <p className="text-gray-500">
            Due on: {new Date(invoice.dueDate).toDateString()}
          </p>
        </div>
      </div>
      <div className="capitalize flex flex-row items-center justify-between my-10">
        <div>
          <h1 className="text-xl font-bold">From</h1>
          <h1 className="text-2xl font-bold">{invoice.senderEmail}</h1>
        </div>
        <div className="text-right">
          <h1 className="text-xl font-bold">to</h1>
          <h1 className="text-gray-500">{invoice.clientEmail}</h1>
          <p className="text-gray-500">{invoice.clientAddress}</p>
        </div>
      </div>
      <div>
        <div class="overflow-x-auto relative">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6">
                  bill name
                </th>
                <th scope="col" class="py-3 px-6">
                  type
                </th>
                <th scope="col" class="py-3 px-6">
                  amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {invoice.billName}
                </th>
                <td class="py-4 px-6">{invoice.billType}</td>
                <td class="py-4 px-6">{invoice.totalAmount}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-xl font-bold">Notes</h1>
        <p className="text-gray-500">{invoice.notes}</p>
      </div>
    </div>
  );
};

export default Invoice;
