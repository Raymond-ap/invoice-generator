import React from "react";
import logo from '../logo.png'

const Invoice = ({ invoice }) => {
  return (
    <div className="py-3 px-5 bg-white rounded-md shadow-md transition delay-150">
      <div className="flex flex-row items-center justify-between">
       <img src={logo} alt="" className="w-20 object-cover" />
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
                Proposal type
                </th>
                <th scope="col" class="py-3 px-6">
                amount
                </th>
                <th scope="col" class="py-3 px-6">
                Paid by
                </th>
                <th scope="col" class="py-3 px-6">
                paid to
                </th>
                <th scope="col" class="py-3 px-6">
                payment method
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {invoice.billType}
                </th>
                <td class="py-4 px-6">{invoice.totalAmount}</td>
                <td class="py-4 px-6">{invoice.paidTo}</td>
                <td class="py-4 px-6">{invoice.paidBy}</td>
                <td class="py-4 px-6">{invoice.paymentMethod}</td>
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
