import { CommonLayout } from "layouts";
import { AddProduct, Categories } from "modules";
import { Category } from "modules/Category";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { tryGetCategories, useAppDispatch } from "store";

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(tryGetCategories());
  }, []);

  return (
    <CommonLayout>
      <Routes>
        <Route path="/">
          <Route index element={"home"} />
          <Route path="/add" element={"home"} />
        </Route>
        <Route path="/product">
          <Route index element={"home"} />
          <Route path="add" element={<AddProduct />} />
        </Route>
        <Route path="/categories">
          <Route index element={<Categories />} />
          <Route path=":id" element={<Category />} />
        </Route>
      </Routes>
    </CommonLayout>
  );
};
