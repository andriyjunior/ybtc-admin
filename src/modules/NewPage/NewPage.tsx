import { FC, useState } from "react";
import { MainLayout } from "layouts";
import { EditForm } from "components";
import { KeyEnum } from "../types";
import { PageDTO, postPage } from "api";
import { selectUser, useAppSelector } from "store";
import { checkOnRole } from "utils";

interface INewPageProps {}

export const NewPage: FC<INewPageProps> = () => {
  const user = useAppSelector(selectUser);

  const handleSubmit = (value: Omit<PageDTO, "_id">) => {
    if (!user.data?.roles) return;

    if (
      checkOnRole.isModerator(user.data?.roles) &&
      checkOnRole.isAdmin(user.data?.roles)
    ) {
      postPage(value);
    }
  };

  return (
    <MainLayout>
      <EditForm onSubmit={handleSubmit} />
    </MainLayout>
  );
};
