import React from "react";

type SelectFormProps = {
  id: string;
  name?: string;
  placeholder?: string;
  options: string[];
  label: string;
};

const SelectForm = ({
  id,
  name,
  placeholder,
  options,
  label,
}: SelectFormProps) => {
  const getOptionValue = (option: string) => {
    return option.replace(" ", "-").toLocaleLowerCase();
  };

  return (
    <div className="flex flex-col gap-y-3">
      <label
        htmlFor={`${id}`}
        className="text-sm leading-5 font-bold tracking-[8%] uppercase"
      >
        {label}
      </label>
      <select
        id={id}
        name={name}
        className="rounded-2xl border border-[#eee] p-3
        text-base font-medium cursor-pointer text-violet-dark
        outline-none focus:shadow-[0_0_0_2px_#583fbc]
        focus:border-transparent duration-200"
        defaultValue={"DEFAULT"}
      >
        <option
          disabled
          className="text-violet-dark/60"
        >
          {placeholder}
        </option>
        {options.map((option) => (
          <option
            key={option}
            value={getOptionValue(option)}
            className="text-violet-dark cursor-pointer font-medium p-4"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectForm;
