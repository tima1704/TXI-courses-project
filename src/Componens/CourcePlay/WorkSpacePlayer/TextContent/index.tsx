import { FC } from "react";

import styles from "./index.module.css";

interface ITextContnet {
  data: string;
  title: string;
}

export const TextContent: FC<ITextContnet> = ({ data, title }) => {
  return (
    <div>
      <div className={styles["title"]}>{title}</div>
      <div
        className={styles["contentText"]}
        dangerouslySetInnerHTML={{ __html: data }}
      />
    </div>
  );
};
