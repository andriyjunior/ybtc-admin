import { FC } from "react";
import { SizeProductDTO } from "api";
import cn from "classnames";

import styles from "./Card.module.scss";
import { tryRemoveProduct, useAppDispatch } from "store";

interface ICardProps {
  id: string;
  img: string;
  brand: string;
  amount: number;
  price: number;
  name: string;
  size: SizeProductDTO[];
}

export const Card: FC<ICardProps> = ({
  id,
  img,
  brand,
  name,
  amount,
  price,
  size,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.root}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={img} alt="" />
      </div>
      <div className={styles.body}>
        <div className={styles.name}>{name}</div>
        <div className={styles.brand}>{brand}</div>
        <span className={styles.about}>
          <div className={styles.amount}>Кількість: {amount}</div>
          <div className={styles.price}>Ціна: {price}грн</div>
        </span>
      </div>
      <div className={styles.buttons}>
        <button className={cn(styles.button, styles.isBlue)}>Редагувати</button>
        <button
          onClick={() => dispatch(tryRemoveProduct(id))}
          className={cn(styles.button, styles.isRed)}
        >
          Видалити
        </button>
      </div>
    </div>
  );
};
