import React, { HTMLInputTypeAttribute } from "react";

type InputFormProps = {
  type?: HTMLInputTypeAttribute | undefined;
  id: string;
  name?: string;
  placeholder: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const InputForm = ({
  type = "text",
  id,
  name,
  placeholder,
  label,
  onChange,
  value,
}: InputFormProps) => {
  return (
    <div className="flex flex-col gap-y-3">
      <label
        htmlFor={id}
        className="text-sm leading-5 font-bold tracking-[8%] uppercase"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="text-base font-medium p-3 rounded-2xl border
        border-[#eee] text-violet-dark outline-none
        focus:shadow-[0_0_0_2px_#583fbc] focus:border-transparent
        duration-200"
      />
    </div>
  );
};

export default InputForm;
