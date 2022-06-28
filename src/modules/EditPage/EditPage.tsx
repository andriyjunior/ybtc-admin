import { FC, useEffect, useState } from "react";
import { MainLayout } from "layouts";
import { EditForm } from "components";
import { useParams } from "react-router-dom";
import { KeyEnum } from "../types";
import { getPage, PageDTO, putPage } from "api";

interface IEditPageProps {}

const initialState = {
  route: "",
  meta: {
    title: { en: "", ua: "" },
    description: { en: "", ua: "" },
  },
  body: { en: "", ua: "" },
};

export const EditPage: FC<IEditPageProps> = () => {
  const [data, setData] = useState<PageDTO>();
  const [isLoading, setLoading] = useState(true);

  const { name } = useParams();

  useEffect(() => {
    if (name) {
      const fetchData = async () => {
        setLoading(true);

        const response = await getPage(name);
        setData(response.data.data);
        setLoading(false);
      };

      fetchData();
    }
  }, [name]);

  return (
    <MainLayout>
      {isLoading && "Loading"}
      {!isLoading && name && (
        <EditForm onSubmit={(value) => putPage(name, value)} page={data} />
      )}
    </MainLayout>
  );
};
