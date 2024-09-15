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
    <div
      className="wrap-input100 validate-input border-b-2 border-[#d9d9d9] mb-6"
      data-validate="Valid email is required: ex@abc.xyz"
    >
      <label className="text-sm" htmlFor={name}>
        {label}
      </label>
      <input
        className="text-right input100"
        type={type}
        name={name}
        placeholder={placeholder}
      />
      ;<span className="focus-input100"></span>
    </div>
  );
};
export default InputField;
