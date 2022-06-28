import { ReactNode } from "react";
import { FC } from "react";

import styles from "./MainLayout.module.scss";

interface IMainLayoutProps {
  title?: string;
  children: ReactNode;
}

export const MainLayout: FC<IMainLayoutProps> = ({ title, children }) => {
  return (
    <div className={styles.root}>
      {/* {title && <Title text={title} />} */}
      <div className={styles.body}>{children}</div>
    </div>
  );
};
