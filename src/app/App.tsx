import { Route, Routes } from "react-router-dom";

import { NewPage, EditPage } from "modules";
import { CommonLayout } from "layouts";
import { useAppDispatch } from "store";
import { isAuth } from "utils/auth";
import { useEffect } from "react";

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    isAuth();
  }, []);

  return (
    <CommonLayout>
      <Routes>
        <Route path="/">
          <Route index element={"home"} />
          <Route path="/add" element={"home"} />
        </Route>
        <Route path="/pages">
          <Route path="add" element={<NewPage />} />
          <Route path="edit/:name" element={<EditPage />} />
        </Route>
      </Routes>
    </CommonLayout>
  );
};
