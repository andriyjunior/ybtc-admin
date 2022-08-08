import { FC, useEffect, useState } from "react";
import { MainLayout } from "layouts";
import { EditForm, Loader, Toast } from "components";
import { useParams } from "react-router-dom";
import { getPage, PageDTO, putPage } from "api";
import { useQuerry } from "hooks";
import { Snackbar } from "@mui/material";
import { checkOnRole } from "utils";
import { selectUser, useAppSelector } from "store";

interface IEditPageProps {}

enum StatusEnum {
  Success,
  Error,
}

const clearToast = (setStatus: (value: null) => void) => {
  setTimeout(() => setStatus(null), 2500);
};

export const EditPage: FC<IEditPageProps> = () => {
  const { name } = useParams();
  const user = useAppSelector(selectUser);

  const { data, isLoading } = useQuerry<PageDTO>(getPage, name);
  const [status, setStatus] = useState<StatusEnum | null>(null);

  const handleSubmit = (value) => {
    if (!user.data?.roles) return;

    if (
      checkOnRole.isModerator(user.data?.roles) &&
      checkOnRole.isAdmin(user.data?.roles)
    ) {
      if (name) {
        putPage(name, value)
          .then(() => {
            setStatus(StatusEnum.Success);
            clearToast(setStatus);
          })
          .catch(() => {
            setStatus(StatusEnum.Error);
            clearToast(setStatus);
          });
      }
    } else {
      setStatus(StatusEnum.Error);
      clearToast(setStatus);
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
