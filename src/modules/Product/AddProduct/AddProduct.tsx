import { FC, useState, useEffect } from "react";
import { useForm } from "antd/lib/form/Form";
// import { Title, Input, Select, Button, InputFile } from "components";
import {
  useAppSelector,
  useAppDispatch,
  selectCategories,
  selectProductOptions,
  selectProductOptionsLoading,
  tryPostProduct,
} from "store";

import { FormValues, IOption, ProductForm } from "../parts";
import ButtonGroup from "antd/lib/button/button-group";
import { Button } from "antd";

const getOptions = (arr: any[], key: string) => {
  return arr.map((item: { [x: string]: string }) => {
    const option: IOption = {
      label: item[key],
      value: item._id,
    };
    return option;
  });
};

type Option = {
  label: string;
  value: string;
};

const initialState: FormValues = {
  category: {
    label: "",
    value: "",
  },
  subCategory: {
    label: "",
    value: "",
  },
  name: "",
  description: "",
  brand: {
    label: "",
    value: "",
  },
  colors: [
    {
      label: "",
      value: "",
    },
  ],
  sizes: [
    {
      label: "",
      value: "",
    },
  ],
  amount: 0,
  price: 0,
};

export const AddProduct: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const dispatch = useAppDispatch();

  const form = useForm<FormValues>();

  const loading = useAppSelector(selectProductOptionsLoading);

  const { categories, colors, brands, sizes } =
    useAppSelector(selectProductOptions);

  // useEffect(() => {
  //   if (form) {
  //     const value = form.getFieldValue("category");

  //     console.log(value);

  //     const res = categories.find((item) => {
  //       return item._id === value;
  //     });

  //     setSelectedCategory(res);
  //   }
  // }, [form.getFieldsValue(), categories]);

  const colorOptions = getOptions(colors, "color");
  const sizeOptions = getOptions(sizes, "size");
  const brandOptions = getOptions(brands, "name");
  const categoryOptions = getOptions(categories, "name");

  const subCategoriesOptions =
    selectedCategory && getOptions(selectedCategory.subCategories, "name");

  const onSubmit = (body: {}) => {
    dispatch(tryPostProduct(body));
  };

  return (
    <ProductForm
      title={"Додати товар"}
      form={form}
      onSubmit={onSubmit}
      categories={categoryOptions}
      subCategories={subCategoriesOptions}
      brands={brandOptions}
      sizes={sizeOptions}
      colors={colorOptions}
      loading={loading}
    >
      <ButtonGroup size="small">
        <Button htmlType="submit" type="primary">
          Додати
        </Button>
      </ButtonGroup>
    </ProductForm>
  );
};
