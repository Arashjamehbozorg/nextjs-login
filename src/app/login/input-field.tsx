import React from "react";

interface InputFieldProps {
  id: string;
  type: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  labelName: string;
  required?: boolean;
}
const InputField: React.FC<InputFieldProps> = ({
  id,
  type,
  name,
  value,
  onChange,
  placeholder,
  labelName,
  required = true,
}) => {
  return (
    <div className="wrap-input mb-2">
      <label
        className="relative right-5 font-normal text-base text-[#002361]"
        htmlFor={id}
      >
        {labelName}
      </label>
      <input
        className="pr-5 mt-1 text-sm font-light input-login placeholder:text-[#002361]"
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};
export default InputField;
