import { FC, useEffect, useState } from "react";
import { useForm } from "antd/lib/form/Form";
// import { Title, Input, Select, Button, InputFile } from "components";
import {
  useAppSelector,
  useAppDispatch,
  selectProductOptions,
  selectProductOptionsLoading,
  tryPostProduct,
  selectProduct,
  tryGetProduct,
  IApiError,
} from "store";

import { FormValues, ProductForm } from "../parts";
import { useParams } from "react-router-dom";
import { Button, Divider, message } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import { PopConfirm } from "components";
import { getProductById, ProductDTO, removeProduct } from "api";
import axios from "axios";

const getOptions = (arr: any[], key: string) => {
  return arr.map((item: { [x: string]: string }) => {
    return {
      label: item[key],
      value: item._id,
    };
  });
};

interface IState {
  product: ProductDTO | null;
  error: IApiError | null;
  loading: boolean;
}

const initialState: IState = {
  product: null,
  error: null,
  loading: true,
};

export const EditProduct: FC = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>();
  const form = useForm<FormValues>();

  const [data, setData] = useState<IState>(initialState);

  const { product, loading } = data;

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchData = async () => {
      try {
        const response = await getProductById(id);
        if (response.data.success) {
          setData({ product: response.data.data, loading: false, error: null });
        } else {
          setData({ product: null, loading: false, error: response.data });
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setData({ product: null, loading: false, error: err });
        }
      }
    };
    fetchData();
  }, [id]);

  const { categories, subCategories, colors, brands, sizes } =
    useAppSelector(selectProductOptions);

  const colorOptions = getOptions(colors, "color");
  const sizeOptions = getOptions(sizes, "size");
  const brandOptions = getOptions(brands, "name");
  const categoryOptions = getOptions(categories, "name");
  const subCategoryOptions = getOptions(subCategories, "name");

  const onSubmit = (body: {}) => {
    console.log(body);
  };

  const onRemove = () => {
    if (id) {
      removeProduct(id)
        .then((res) =>
          message.success(`${data.product?.name} успішно видалено!`)
        )
        .catch((err) => message.error("Виникла помилка при видаленні"));
    }
  };

  return (
    product && (
      <ProductForm
        title={"Редагувати товар"}
        form={form}
        onSubmit={onSubmit}
        categories={categoryOptions}
        subCategories={subCategoryOptions}
        brands={brandOptions}
        sizes={sizeOptions}
        colors={colorOptions}
        product={product}
        loading={loading}
      >
        <ButtonGroup size="small">
          <Button htmlType="submit" type="primary">
            Зберегти
          </Button>
          <Divider type="vertical" />
          <PopConfirm
            title={"Ви впевнені, що хочете видалити?"}
            handleOk={onRemove}
          >
            <Button type="dashed">Видалити</Button>
          </PopConfirm>
        </ButtonGroup>
      </ProductForm>
    )
  );
};
