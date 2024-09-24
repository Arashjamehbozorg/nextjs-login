import React from "react";

interface InputFieldProps {
  label: string;
  type: "text" | "password";
  name: string;
  placeholder: string;
}
const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  name,
  placeholder,
}) => {
  return (
    <div className="wrap-input border-b-2 border-[#d9d9d9] mb-6">
      <label className="text-sm" htmlFor={name}>
        {label}
      </label>
      <input
        className="input-login"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};
export default InputField;
