import { Accordion } from "components";
import { FC } from "react";
import { selectCategories, useAppSelector } from "store";

import styles from "./LeftSidebar.module.scss";
import { Button, Link } from "./parts";

interface ILeftSidebarProps {}

export const LeftSidebar: FC<ILeftSidebarProps> = () => {
  const { categories } = useAppSelector(selectCategories);

  const createCategories = () => {
    return categories?.map((category) => {
      return <Link title={category.name} to={`categories/${category.id}`} />;
    });
  };
  return (
    <div className={styles.root}>
      <div className={styles.body}>
        <Accordion
          classNameHead={styles.button}
          head={<Button title="Каталог" />}
          body={<div>{createCategories()}</div>}
        />
      </div>
    </div>
  );
};
