import { Button, Table, Typography } from "antd";
import { MainLayout } from "layouts";
import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  selectCategory,
  tryGetCategoryById,
  tryGetSubCategory,
  useAppDispatch,
  useAppSelector,
  selectSubCategory,
} from "store";

type AlignType = "left" | "center" | "right";

const columns = [
  {
    title: "#",
    dataIndex: "index",
    key: "index",
    width: 50,
    render: (_, __, i) => <Typography.Text strong>{i + 1}</Typography.Text>,
  },
  {
    title: "Назва",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Ціна",
    dataIndex: "price",
    key: "price",
    align: "right" as AlignType,
  },
  {
    title: "Кількість",
    dataIndex: "amount",
    key: "amount",
    width: 140,
    align: "right" as AlignType,
  },
  {
    title: "",
    dataIndex: "_id",
    key: "",
    width: 50,
    render: (_, option, i) => (
      <Button>
        <Link to={`/product/${option._id}/edit`}>Редагувати</Link>
      </Button>
    ),
  },
];

export const SubCategory = () => {
  const dispatch = useAppDispatch();
  const { subId } = useParams<{ subId: string }>();
  const { subCategory, loading } = useAppSelector(selectSubCategory);

  useEffect(() => {
    if (!subId) return;

    dispatch(tryGetSubCategory(subId));
  }, [subId]);

  return (
    <MainLayout title={subCategory?.name}>
      <Table
        dataSource={subCategory?.products}
        columns={columns}
        loading={loading}
      />
    </MainLayout>
  );
};
