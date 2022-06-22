import { FC } from "react";
import { Form } from "antd";
import { Rule } from "antd/lib/form";
import TextArea from "antd/lib/input/TextArea";

interface ITextAreaProps {
  label: string;
  value?: string | number;
  type?: "text" | "number";
  placeholder: string;
  name: string;
  onChange: ({ x: value }: { [x: string]: string }) => void;
  rules?: Rule[];
}

export const CustomTextArea: FC<ITextAreaProps> = ({
  label,
  value,
  placeholder,
  name,
  onChange,
  rules,
}) => {
  return (
    <Form.Item label={label} name={name} rules={rules}>
      <TextArea
        onChange={(e) => onChange({ name: e.target.value })}
        value={value}
        placeholder={placeholder}
      />
    </Form.Item>
  );
};
