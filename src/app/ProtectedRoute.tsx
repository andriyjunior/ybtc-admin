import { CommonLayout } from "layouts";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { selectUser, useAppSelector } from "store";
import { getToken } from "utils/auth";

interface IProtectedRoute {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: IProtectedRoute) => {
  const user = useAppSelector(selectUser);
  const token = getToken();

  if (!token && !user.data) {
    return <Navigate to={"/auth"} />;
  }

  return <CommonLayout>{children}</CommonLayout>;
};
