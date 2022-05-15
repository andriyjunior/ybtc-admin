import { MainLayout } from "layouts";
import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  selectCategory,
  tryGetCategoryById,
  useAppDispatch,
  useAppSelector,
} from "store";

import styles from "./Category.module.scss";

interface ICategoryProps {}

export const Category: FC<ICategoryProps> = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!id) return;
    dispatch(tryGetCategoryById(id));
  }, [id]);

  const { category, products, loading } = useAppSelector(selectCategory);

  return (
    <MainLayout title={category?.name}>
      {loading === "pending" && "Loading"}
      {loading === "fulfilled" &&
        products?.map((product) => {
          return <span>{product.brand}</span>;
        })}
    </MainLayout>
  );
};
