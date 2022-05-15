import { FC } from "react";

import styles from "./Input.module.scss";

interface IInputProps {
  label: string;
  value: string | number;
  type?: "text" | "number";
  placeholder: string;
  name: string;
  onChange: ({ x: value }: { [x: string]: string }) => void;
}

export const Input: FC<IInputProps> = ({
  label,
  value,
  placeholder,
  name,
  onChange,
  ...rest
}) => {
  return (
    <div className={styles.root}>
      <label className={styles.label} htmlFor="">
        {label}
      </label>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange({ [name]: e.target.value })}
        {...rest}
      />
    </div>
  );
};
