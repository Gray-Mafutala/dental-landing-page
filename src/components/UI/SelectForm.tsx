import React from "react";

type SelectFormProps = {
  id: string;
  name?: string;
  options: string[];
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectForm = ({
  id,
  name,
  options,
  label,
  value,
  onChange,
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
        onChange={onChange}
        value={value}
        required
        className="rounded-2xl border border-[#eee]
        text-base font-medium text-violet-dark cursor-pointer outline-none
        focus:shadow-[0_0_0_2px_#583fbc] focus:border-transparent duration-200
        text-ellipsis form-select appearance-none p-3 pr-8 bg-no-repeat"
      >
        {options.map((option, index) => (
          <option
            key={option}
            disabled={index === 0 ? true : false}
            value={index === 0 ? "" : getOptionValue(option)}
            className={
              index === 0
                ? `text-violet-dark/60 font-medium`
                : `text-violet-dark font-medium`
            }
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectForm;
