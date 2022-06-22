import { Button, Popconfirm } from "antd";
import { FC, ReactNode, useState } from "react";

// import styles from "./PopConfirm.module.scss";

interface IPopConfirmProps {
  title: string;
  handleOk: () => void;

  children: ReactNode;
}

export const PopConfirm: FC<IPopConfirmProps> = ({
  title,
  handleOk,
  children,
}) => {
  return (
    <Popconfirm title={title} onConfirm={handleOk}>
      {children}
    </Popconfirm>
  );
};
