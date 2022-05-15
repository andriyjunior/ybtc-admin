import { FC } from "react";

import styles from "./Button.module.scss";

interface IButtonProps {
  title: string;
}

export const Button: FC<IButtonProps> = ({ title }) => {
  return (
    <div className={styles.root}>
      <span className={styles.title}>{title}</span>
    </div>
  );
};
