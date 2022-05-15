import { FC, useState } from "react";
import cn from "classnames";

import styles from "./Select.module.scss";

type TOption = { id: string; name: string };

interface ISelectProps {
  label: string;
  value: TOption;
  options: TOption[];
  placeholder: string;
  name: string;
  onChange: ({ x: { id, name } }: { [x: string]: TOption }) => void;
}

export const Select: FC<ISelectProps> = ({
  label,
  value,
  options,
  placeholder,
  name,
  onChange,
}) => {
  const [isShown, setShown] = useState(false);

  const filterByValue = (item: TOption) => {
    return item?.name?.toLowerCase().includes(value?.name?.toLowerCase());
  };

  const onBlur = () => {
    setTimeout(() => {
      setShown(false);
    }, 10);
  };

  const nothinkFound = options.filter(filterByValue).length;

  return (
    <div className={styles.root}>
      <label className={styles.label} htmlFor="">
        {label}
      </label>
      <input
        onBlur={() => onBlur()}
        onFocus={() => setShown(true)}
        className={cn(styles.input, { [styles.isShown]: isShown })}
        type="text"
        value={value.name}
        placeholder={placeholder}
        onChange={(e) => onChange({ [name]: { id: "", name: e.target.value } })}
      />
      <div className={cn(styles.options, { [styles.isShown]: isShown })}>
        {options && nothinkFound ? (
          options.filter(filterByValue).map((option) => {
            return (
              <button
                key={option.id}
                onClick={() =>
                  onChange({ [name]: { id: option.id, name: option.name } })
                }
                className={styles.option}
              >
                {option.name}
              </button>
            );
          })
        ) : (
          <span className={styles.notFound}>Нічого не знайдено</span>
        )}
      </div>
    </div>
  );
};
