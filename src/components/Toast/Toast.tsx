import { Snackbar } from "@mui/material";
import { FC, useState } from "react";

import styles from "./Toast.module.scss";

interface IToastProps {
  message: string;
  open: boolean;
}

export const Toast: FC<IToastProps> = ({ message, open }) => {
  return <Snackbar message={message} autoHideDuration={2000} open={open} />;
};
