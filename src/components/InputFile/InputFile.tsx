import { ChangeEvent, FC } from "react";

import styles from "./InputFile.module.scss";

interface IInputFileProps {
  label: string;
  onChange: (files: ChangeEvent<HTMLInputElement>) => void;
}

export const InputFile: FC<IInputFileProps> = ({ label, onChange }) => {
  return (
    <div className={styles.root}>
      <label className={styles.label} htmlFor="">
        {label}
      </label>
      <input
        className={styles.input}
        type="file"
        multiple={true}
        onChange={onChange}
      />
    </div>
  );
};
