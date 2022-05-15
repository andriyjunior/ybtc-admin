import { MainLayout } from "layouts";
import { useEffect } from "react";
import { FC } from "react";
import {
  selectCategories,
  tryGetCategories,
  useAppDispatch,
  useAppSelector,
} from "store";

import styles from "./Categories.module.scss";

interface ICategoriesProps {}

export const Categories: FC<ICategoriesProps> = () => {
  const dispatch = useAppDispatch();
  const { categories, isLoading } = useAppSelector(selectCategories);

  return (
    <MainLayout title="Категорії">
      {isLoading && categories?.map((category) => category.name)}
    </MainLayout>
  );
};
