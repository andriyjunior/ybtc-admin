import { ReactNode } from "react";
import { useState } from "react";
import { FC } from "react";
import cn from "classnames";

import styles from "./Accordion.module.scss";

interface IAccordionProps {
  head: ReactNode;
  body: ReactNode;
  classNameHead?: string;
  classNameBody?: string;
}

export const Accordion: FC<IAccordionProps> = ({
  head,
  body,
  classNameBody,
  classNameHead,
}) => {
  const [isShown, setShown] = useState(false);

  return (
    <>
      <div
        className={classNameHead}
        onClick={() => setShown((state) => !state)}
      >
        {head}
      </div>
      <div
        className={cn(styles.body, classNameBody, {
          [styles.isShown]: isShown,
        })}
      >
        {body}
      </div>
    </>
  );
};
