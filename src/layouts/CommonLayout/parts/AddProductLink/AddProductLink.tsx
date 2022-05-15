import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./AddProductLink.module.scss";

interface IAddProductLinkProps {}

export const AddProductLink: FC<IAddProductLinkProps> = () => {
  return (
    <Link to={"product/add"} className={styles.root}>
      <span className={styles.plus} />
    </Link>
  );
};
