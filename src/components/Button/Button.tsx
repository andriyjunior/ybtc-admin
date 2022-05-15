import { FC } from "react";

import styles from "./Button.module.scss";

interface IButtonProps {
  title: string;
  onClick: () => void;
}

export const Button: FC<IButtonProps> = ({ title, onClick }) => {
  return (
    <button className={styles.root} onClick={onClick}>
      {title}
    </button>
  );
};
