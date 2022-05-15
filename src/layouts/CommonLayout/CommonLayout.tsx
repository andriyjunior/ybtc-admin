import { Notification } from "components";
import { FC, ReactNode } from "react";
import { selectApp, useAppSelector } from "store";

import styles from "./CommonLayout.module.scss";
import { AddProductLink, LeftSidebar } from "./parts";

interface ICommonLayoutProps {
  children: ReactNode;
}

export const CommonLayout: FC<ICommonLayoutProps> = ({ children }) => {
  const { notifications } = useAppSelector(selectApp);

  return (
    <div className={styles.root}>
      <div className={styles.leftSidebar}>
        <LeftSidebar />
      </div>
      <div className={styles.content}>{children}</div>
      <AddProductLink />
      <div className={styles.notifications}>
        {notifications.map((item) => (
          <Notification {...item} />
        ))}
      </div>
    </div>
  );
};
