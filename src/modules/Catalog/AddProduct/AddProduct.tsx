import { FC, useState, useEffect } from "react";

import { Title, Input, Select, Button } from "components";
import {
  useAppSelector,
  tryGetCategories,
  useAppDispatch,
  selectProduct,
  tryPostProduct,
  selectCategories,
} from "store";

import styles from "./AddProduct.module.scss";
import { MainLayout } from "layouts";

interface IAddProductProps {}

export const AddProduct: FC<IAddProductProps> = () => {
  const dispatch = useAppDispatch();
  const { categories, isLoading } = useAppSelector(selectCategories);

  const [formData, setFormData] = useState({
    brand: "",
    category: { id: "", name: "" },
    name: "",
    color: "",
    size: [],
    amount: 0,
    price: 0,
  });

  const onChange = (data: any) => {
    Object.entries(data).forEach((item) => {
      setFormData((state) => {
        return { ...state, [item[0]]: item[1] };
      });
    });
  };

  const onSubmit = () => {
    const body = {
      ...formData,
      category: formData.category.id,
    };

    dispatch(tryPostProduct(body));
  };

  return (
    <MainLayout title="Додати товар">
      {isLoading === "pending" && <span>Loading...</span>}
      {isLoading === "fulfilled" && categories && (
        <div className={styles.content}>
          <Select
            options={categories}
            value={formData.category}
            label="Категорія"
            onChange={onChange}
            name={"category"}
            placeholder="Nike"
          />
          <Input
            value={formData.brand}
            label="Марка"
            onChange={onChange}
            name={"brand"}
            placeholder="Nike"
          />
          <Input
            value={formData.name}
            label="Назва товару"
            onChange={onChange}
            name={"name"}
            placeholder="Nike"
          />
          <Input
            value={formData.color}
            label="Колір"
            onChange={onChange}
            name={"color"}
            placeholder="Nike"
          />
          <Input
            value={formData.size.toString()}
            label="Розмір"
            onChange={({ size }) =>
              onChange({ size: size.split(",").map((item) => item.trim()) })
            }
            name={"size"}
            placeholder="41"
          />
          <Input
            value={formData.amount}
            label="Кількість"
            onChange={onChange}
            name={"amount"}
            type={"number"}
            placeholder="Nike"
          />
          <Input
            value={formData.price}
            label="Ціна"
            onChange={onChange}
            name={"price"}
            type={"number"}
            placeholder="Nike"
          />
          <Button title="Зберегти" onClick={onSubmit} />
        </div>
      )}
    </MainLayout>
  );
};
