import { CommonLayout } from "layouts";
import { AddProduct, Categories, EditProduct, SubCategory } from "modules";
import { Category } from "modules/Category";
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { tryGetCategories, tryGetProductOptions, useAppDispatch } from "store";

import "antd/dist/antd.css";

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(tryGetProductOptions());
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
          <Route path=":id/edit" element={<EditProduct />} />
        </Route>
        <Route path="/categories" element={<Categories />} />

        <Route path="/category/:id">
          <Route element={<Category />} index />
          <Route path=":subId" element={<SubCategory />} />
        </Route>
      </Routes>
    </CommonLayout>
  );
};
