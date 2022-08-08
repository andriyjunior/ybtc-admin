import { FC, useEffect, useState } from "react";
import { MainLayout } from "layouts";
import { EditForm, Loader, Toast } from "components";
import { useParams } from "react-router-dom";
import { getPage, PageDTO, putPage } from "api";
import { useQuerry } from "hooks";
import { Snackbar } from "@mui/material";

interface IEditPageProps {}

enum StatusEnum {
  Success,
  Error,
}

export const EditPage: FC<IEditPageProps> = () => {
  const { name } = useParams();

  const { data, isLoading } = useQuerry<PageDTO>(getPage, name);
  const [status, setStatus] = useState<StatusEnum | null>(null);

  const handleSubmit = (value) => {
    if (name) {
      putPage(name, value)
        .then(() => setStatus(StatusEnum.Success))
        .catch(() => setStatus(StatusEnum.Error));
    }
  };

  return (
    <MainLayout>
      {isLoading && <Loader />}
      {status === StatusEnum.Success && (
        <Toast
          message="Has been updated :)"
          open={status === StatusEnum.Success}
        />
      )}
      {status === StatusEnum.Error && (
        <Toast
          message="Something went wrong :("
          open={status === StatusEnum.Error}
        />
      )}

      {data && name && <EditForm onSubmit={handleSubmit} page={data} />}
    </MainLayout>
  );
};
