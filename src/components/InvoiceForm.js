import React from "react";
import FormInput from "./FormInput";
import { Line } from "./Line";

const InvoiceForm = ({ handlepreview }) => {
  const tableItems = [
    {
      billDate: "12-07-2021",
      dueDate: "12-07-2021",
      number: "#322",
      clientAddress: "Accra central",
      clientName: "John Doe",
      clientEmail: "john@gmail.com",
      senderEmail: "ben@gmail.com",
      notes:
        "Lorem isum isum isum isum isum isumisum isumisumisum isum isum isum isumisum",
      billName: "Monthly task",
      billType: "One Type",
      totalAmount: "GHC 32823",
      paymentMethod: "Bank trnasfer",
      paidBy: "John",
      paidTo: "glico",
    },
    {
      billDate: "12-07-2021",
      dueDate: "12-07-2021",
      number: "#322",
      clientAddress: "Accra central",
      clientName: "John Doe",
      clientEmail: "john@gmail.com",
      senderEmail: "ben@gmail.com",
      notes:
        "Lorem isum isum isum isum isum isumisum isumisumisum isum isum isum isumisum",
      billName: "Monthly task",
      billType: "One Type",
      totalAmount: "GHC 32823",
      paymentMethod: "Bank trnasfer",
      paidBy: "John",
      paidTo: "glico",
    },
    {
      billDate: "12-07-2021",
      dueDate: "12-07-2021",
      number: "#322",
      clientAddress: "Accra central",
      clientName: "John Doe",
      clientEmail: "john@gmail.com",
      senderEmail: "ben@gmail.com",
      notes:
        "Lorem isum isum isum isum isum isumisum isumisumisum isum isum isum isumisum",
      billName: "Monthly task",
      billType: "One Type",
      totalAmount: "GHC 32823",
      paymentMethod: "Bank trnasfer",
      paidBy: "John",
      paidTo: "glico",
    },
    {
      billDate: "12-07-2021",
      dueDate: "12-07-2021",
      number: "#322",
      clientAddress: "Accra central",
      clientName: "John Doe",
      clientEmail: "john@gmail.com",
      senderEmail: "ben@gmail.com",
      notes:
        "Lorem isum isum isum isum isum isumisum isumisumisum isum isum isum isumisum",
      billName: "Monthly task",
      billType: "One Type",
      totalAmount: "GHC 32823",
      paymentMethod: "Bank trnasfer",
      paidBy: "John",
      paidTo: "glico",
    },
    {
      billDate: "12-07-2021",
      dueDate: "12-07-2021",
      number: "#322",
      clientAddress: "Accra central",
      clientName: "John Doe",
      clientEmail: "john@gmail.com",
      senderEmail: "ben@gmail.com",
      notes:
        "Lorem isum isum isum isum isum isumisum isumisumisum isum isum isum isumisum",
      billName: "Monthly task",
      billType: "One Type",
      totalAmount: "GHC 32823",
      paymentMethod: "Bank trnasfer",
      paidBy: "John",
      paidTo: "glico",
    },
    {
      billDate: "12-07-2021",
      dueDate: "12-07-2021",
      number: "#322",
      clientAddress: "Accra central",
      clientName: "John Doe",
      clientEmail: "john@gmail.com",
      senderEmail: "ben@gmail.com",
      notes:
        "Lorem isum isum isum isum isum isumisum isumisumisum isum isum isum isumisum",
      billName: "Monthly task",
      billType: "One Type",
      totalAmount: "GHC 32823",
      paymentMethod: "Bank trnasfer",
      paidBy: "John",
      paidTo: "glico",
    },
    {
      billDate: "12-07-2021",
      dueDate: "12-07-2021",
      number: "#322",
      clientAddress: "Accra central",
      clientName: "John Doe",
      clientEmail: "john@gmail.com",
      senderEmail: "ben@gmail.com",
      notes:
        "Lorem isum isum isum isum isum isumisum isumisumisum isum isum isum isumisum",
      billName: "Monthly task",
      billType: "One Type",
      totalAmount: "GHC 32823",
      paymentMethod: "Bank trnasfer",
      paidBy: "John",
      paidTo: "glico",
    },
  ];

  return (
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-white uppercase bg-gray-900">
          <tr>
            <th scope="col" class="py-3 px-6">
              number
            </th>
            <th scope="col" class="py-3 px-6">
              bill Type
            </th>
            <th scope="col" class="py-3 px-6">
              paid By
            </th>
            <th scope="col" class="py-3 px-6">
              paid To
            </th>
            <th scope="col" class="py-3 px-6">
              total Amount
            </th>
            <th scope="col" class="py-3 px-6">
              payment Method
            </th>
            <th scope="col" class="py-3 px-6">
              due Date
            </th>
          </tr>
        </thead>
        <tbody>
          {tableItems.map((items, index) => (
            <tr
              onClick={() => handlepreview(items)}
              key={index}
              class={`
              ${index % 2 === 0 ? "bg-white" : "bg-slate-100"}
              border-b dark:border-gray-700`}
            >
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="py-4 px-6">Sliver</td>
              <td class="py-4 px-6">Laptop</td>
              <td class="py-4 px-6">$2999</td>
              <td class="py-4 px-6">$2999</td>
              <td class="py-4 px-6">$2999</td>
              <td class="py-4 px-6">$2999</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceForm;
