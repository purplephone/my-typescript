import React from "react";
type Option = {
  label: React.ReactNode;
  value: string | number;
};

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & { options: Option[] };

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, ...props }, ref) => (
    <select ref={ref} {...props}>
      {options.map(({ label, value }) => (
        <option value={value}>{label}</option>
      ))}
    </select>
  )
);

type CustomSelect = {
  register: Object;
  options: Option[];
};

const CustomSelect = ({ register, options }: CustomSelect) => {
  return (
    <React.Fragment>
      <Select {...register} options={options} />
    </React.Fragment>
  );
};

export default CustomSelect;
