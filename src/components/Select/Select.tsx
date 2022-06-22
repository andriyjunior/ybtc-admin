import { FC } from "react";

import { Form, Select as AntSelect } from "antd";

import { Rule } from "antd/lib/form";
import { DefaultOptionType } from "antd/lib/select";

interface ISelectProps {
  label: string;
  placeholder: string;
  name: string;
  options: any;
  onChange: (value: any) => void;
  value?: any;
  mode?: "multiple" | "tags" | undefined;
  rules?: Rule[];
}

export const Select: FC<ISelectProps> = ({
  label,
  name,
  onChange,
  mode,
  options,
  rules,
  value,
}) => {
  const filterOption = (input: string, option: DefaultOptionType | undefined) =>
    input.toLowerCase().includes(option?.label?.toString().toLowerCase() ?? "")
      ? true
      : false;

  return (
    <Form.Item label={label} name={name} rules={rules}>
      <AntSelect
        filterOption={filterOption}
        mode={mode}
        onChange={(_, option) => onChange(option)}
        options={options}
        defaultValue={value}
      />
    </Form.Item>
  );
};
