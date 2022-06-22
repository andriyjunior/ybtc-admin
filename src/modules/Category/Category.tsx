import { Button, Table, Typography } from "antd";
import { MainLayout } from "layouts";
import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  selectCategory,
  tryGetCategoryById,
  useAppDispatch,
  useAppSelector,
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
    title: "",
    dataIndex: "_id",
    key: "",
    width: 50,
    render: (_, option, i) => (
      <Button>
        <Link to={option._id}>Перейти</Link>
      </Button>
    ),
  },
];

export const Category = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const { category, loading } = useAppSelector(selectCategory);

  useEffect(() => {
    if (!id) return;

    dispatch(tryGetCategoryById(id));
  }, [id]);

  return (
    <MainLayout title={category?.name}>
      <Table
        dataSource={category?.subCategories}
        columns={columns}
        loading={loading}
      />
    </MainLayout>
  );
};
