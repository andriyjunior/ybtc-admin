import { FC } from "react";

import styles from "./Title.module.scss";

interface ITitleProps {
  text: string;
}

export const Title: FC<ITitleProps> = ({ text }) => {
  return <div className={styles.text}>{text}</div>;
};
