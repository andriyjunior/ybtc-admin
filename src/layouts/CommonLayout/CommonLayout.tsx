import { Layout } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import { Typography } from "antd";
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
    <Layout>
      <div className={styles.root}>
        <Header>
          <Typography.Text style={{ color: "white" }}>Admin</Typography.Text>
        </Header>
        <LeftSidebar />
        <Content style={{ display: "flex" }}>{children}</Content>
        <AddProductLink />
        <div className={styles.notifications}>
          {notifications.map((item) => (
            <Notification {...item} />
          ))}
        </div>
      </div>
    </Layout>
  );
};
