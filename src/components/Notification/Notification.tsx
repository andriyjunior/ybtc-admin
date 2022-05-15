import { FC, useEffect, useState } from "react";
import cn from "classnames";

import styles from "./Notification.module.scss";

interface INotificationProps {
  title: string;
  desc: string;
  status?: "success" | "failed";
}

export const Notification: FC<INotificationProps> = ({
  title,
  desc,
  status,
}) => {
  const [isHidden, setHidden] = useState(false);

  useEffect(() => {
    setTimeout(() => setHidden(true), 3000);
  }, []);
  const classNameByStatus = {
    success: styles.isSuccess,
    failed: styles.isFailed,
  };

  return (
    <div
      className={cn(styles.root, status && classNameByStatus[status], {
        [styles.isHidden]: isHidden,
      })}
    >
      <span className={styles.title}>{title}</span>
      {desc && <span className={styles.desc}>{desc}</span>}
    </div>
  );
};
