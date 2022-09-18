import React from "react";

const FormInput = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-900 font-semibold capitalize">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="outline-none bg-gray-100 p-2 rounded-md w-full"
      />
    </div>
  );
};

export default FormInput;
