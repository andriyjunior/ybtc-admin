import { FC } from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";

import styles from "./Link.module.scss";

interface ILinkProps {
  title: string;
  to: string;
}

export const Link: FC<ILinkProps> = ({ title, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(styles.root, { [styles.isActive]: isActive })
      }
    >
      {title}
    </NavLink>
  );
};
