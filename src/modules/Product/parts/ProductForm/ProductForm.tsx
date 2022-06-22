import { FC, ReactNode } from "react";

import { MainLayout } from "layouts";
import { Button, Divider, Form } from "antd";

import { Input, Select, CustomTextArea } from "components";
import { CategoryDTO, ProductDTO } from "api";
import { FormInstance } from "rc-field-form/lib/interface";

export interface IOption {
  label: string;
  value: string;
}

export type FormValues = {
  category: IOption;
  subCategory: IOption;
  name: string;
  description: string;
  brand: IOption;
  colors: IOption[];
  sizes: IOption[];
  amount: number;
  price: number;
};

interface IProductForm {
  title: string;
  form: [FormInstance<any>];
  onSubmit: (values: any) => void;
  product?: ProductDTO;
  categories: IOption[];
  subCategories?: IOption[];
  brands?: IOption[];
  sizes: IOption[];
  colors: IOption[];
  loading: boolean;
  children?: ReactNode;
}

export const ProductForm: FC<IProductForm> = ({
  title,
  form,
  onSubmit,
  categories,
  subCategories,
  colors,
  brands,
  sizes,
  loading,
  product,
  children,
}) => {
  const colorsValue = product?.colors.map((item) => {
    return {
      label: item.color,
      value: item._id,
    };
  });

  const sizesValue = product?.sizes.map((item) => {
    return {
      label: item.size,
      value: item._id,
    };
  });

  return (
    <MainLayout title={title}>
      {loading && <span>Loading...</span>}
      {!loading && (
        <div>
          <Form onFinish={onSubmit} requiredMark={"optional"}>
            <Select
              label="Категорія"
              name="category"
              options={categories}
              value={
                product && {
                  label: product?.category.name,
                  value: product?.category._id,
                }
              }
              placeholder={""}
              onChange={(values) => console.log(values)}
              rules={[{ required: true, message: "Необхідно обрати" }]}
            />
            {subCategories && (
              <Select
                label="Підкатегорія"
                name="subCategory"
                options={subCategories}
                value={
                  product && {
                    label: product?.subCategory.name,
                    value: product?.subCategory._id,
                  }
                }
                placeholder={""}
                onChange={(values) => console.log(values)}
                rules={[{ required: true, message: "Необхідно обрати" }]}
              />
            )}
            <Input
              label={"Назва товару"}
              value={product?.name}
              placeholder={"Кросіки Nike"}
              name={"name"}
              onChange={() => {}}
              rules={[{ required: true, message: "Необхідно заповнити" }]}
            />
            <Select
              label="Бренд"
              name="brand"
              options={brands}
              value={{
                label: product?.brand.name,
                value: product?.brand._id,
              }}
              placeholder={""}
              onChange={(values) => console.log(values)}
              rules={[{ required: true, message: "Необхідно обрати" }]}
            />
            <CustomTextArea
              label="Опис"
              name="description"
              value={product && product?.description}
              placeholder={""}
              onChange={() => {}}
            />
            <Divider />
            <Select
              label="Колір"
              name="colors"
              options={colors}
              value={product && colorsValue}
              placeholder={""}
              onChange={(values) => console.log(values)}
              mode="multiple"
              rules={[{ required: true, message: "Необхідно обрати" }]}
            />
            <Select
              label="Розмір"
              name="sizes"
              options={sizes}
              value={product && sizesValue}
              placeholder={""}
              onChange={(values) => {}}
              mode="multiple"
              rules={[{ required: true, message: "Необхідно обрати" }]}
            />

            <Input
              label={"Ціна"}
              value={product && product?.price}
              placeholder={"1000"}
              name={"price"}
              onChange={() => {}}
              rules={[{ required: true, message: "Вкажіть ціну" }]}
            />
            <Input
              label={"Кількість товару"}
              value={product && product?.amount}
              placeholder={"30"}
              name={"amount"}
              onChange={() => {}}
              rules={[{ required: true, message: "Вкажіть кількість" }]}
            />
            <br />
            <br />
            {children}
          </Form>
          {/* <div className={styles.form}>
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
            <InputFile
              label={"Додайте файли"}
              onChange={(e) => {
                if (!e.target.files) return;
                const urls: string[] = [];

                Array.from(e.target.files).forEach((item) =>
                  urls.push(URL.createObjectURL(item))
                );
                setImages(urls);

                onChange({ images: e.target.files });
              }}
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
          </div> */}
        </div>
      )}
    </MainLayout>
  );
};
