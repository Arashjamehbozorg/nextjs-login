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
    <div className="wrap-input mb-2">
      <label
        className="relative right-5 font-normal text-base text-[#002361]"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="pr-5 mt-1 text-sm font-light input-login placeholder:text-[#002361]"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};
export default InputField;
