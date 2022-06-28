import { FC, useState } from "react";
import { MainLayout } from "layouts";
import { EditForm } from "components";
import { KeyEnum } from "../types";
import { postPage } from "api";

interface INewPageProps {}

export const NewPage: FC<INewPageProps> = () => {
  return (
    <MainLayout>
      <EditForm onSubmit={(value) => postPage(value)} />
    </MainLayout>
  );
};
