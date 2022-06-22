import { Menu, MenuProps } from "antd";
import { Link } from "react-router-dom";
import Sider from "antd/lib/layout/Sider";
import { FC, useEffect, useState } from "react";
import { selectCategories, selectProductOptions, useAppSelector } from "store";

import styles from "./LeftSidebar.module.scss";
import { getInitialOptions } from "api/initial";
import { CategoryDTO } from "api";

interface ILeftSidebarProps {}

export const LeftSidebar: FC<ILeftSidebarProps> = () => {
  const [data, setData] = useState<{
    categories: CategoryDTO[];
    loading: boolean;
  }>({ categories: [], loading: true });

  useEffect(() => {
    const fetch = async () => {
      const response = await getInitialOptions();
      setData({ ...data, categories: response.data.data, loading: false });
    };

    fetch();
  }, []);
  console.log(data.categories);
  return (
    <Sider
      style={{ float: "left", position: "sticky", top: 0 }}
      collapsible
      width={300}
    >
      <div className={styles.root}>
        <div className={styles.body}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.SubMenu title={<Link to="#">Категорії</Link>}>
              {data?.categories?.map((category) => (
                <Menu.SubMenu
                  key={category._id}
                  title={
                    <Link to={`category/${category._id}`}>{category.name}</Link>
                  }
                >
                  {category.subCategories?.map((subCategory) => (
                    <Menu.Item key={subCategory._id}>
                      <Link to={`category/${category._id}/${subCategory._id}`}>
                        {subCategory.name}
                      </Link>
                    </Menu.Item>
                  ))}
                </Menu.SubMenu>
              ))}
            </Menu.SubMenu>
            <Menu.SubMenu title="Замовлення">
              {/* {categories?.map((category) => (
                <Menu.Item key={category.id}>
                  <Link to={`categories/${category.id}`}>{category.name}</Link>
                </Menu.Item>
              ))} */}
            </Menu.SubMenu>
          </Menu>
        </div>
      </div>
    </Sider>
  );
};
