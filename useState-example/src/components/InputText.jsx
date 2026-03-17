import React from "react";
const InputText = ({ label, placeholder,
     value, onChange, type }) => {
  return (
    <div>
      <h1>{label}</h1>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
 
export default InputText;