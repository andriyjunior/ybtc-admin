import { FC, ReactNode } from "react";
import { selectApp, useAppDispatch, useAppSelector } from "store";

import { LeftSidebar, AppBar } from "./parts";

import styles from "./CommonLayout.module.scss";

interface ICommonLayoutProps {
  children: ReactNode;
}

export const CommonLayout: FC<ICommonLayoutProps> = ({ children }) => {
  const { notifications } = useAppSelector(selectApp);

  const dispatch = useAppDispatch();

  return (
    <div className={styles.root}>
      <AppBar />
      <div className={styles.body}>
        <LeftSidebar />
        {children}
      </div>
    </div>
  );
};
