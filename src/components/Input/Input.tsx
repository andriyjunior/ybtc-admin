import { FC } from "react";
import { Form, Input as AntInput } from "antd";

import styles from "./Input.module.scss";
import { Rule } from "antd/lib/form";

interface IInputProps {
  label: string;
  value?: string | number;
  type?: "text" | "number";
  placeholder: string;
  name: string;
  onChange: ({ x: value }: { [x: string]: string }) => void;
  rules?: Rule[];
}

export const Input: FC<IInputProps> = ({
  label,
  value,
  placeholder,
  name,
  onChange,
  rules,
  type = "text",
}) => {
  return (
    <Form.Item label={label} name={name} rules={rules}>
      <AntInput
        defaultValue={value}
        type={type}
        onChange={(e) => onChange({ name: e.target.value })}
        value={value}
        placeholder={placeholder}
      />
    </Form.Item>
  );
};
