import { Icon } from "Componens/common/Icon";
import { FC } from "react";
import { ICourceContent } from "Types/cources";

import styles from "./index.module.css";

export const ContentItem: FC<ICourceContent> = ({ type, title }) => {
  return (
    <div className={styles["item__block"]}>
      <div className={styles["decor"]} />
      <div className={styles["icon_row"]}>
        <Icon icon={type} className={styles["icon"]} />
        <div>
          <div>{title}</div>
          <div className={styles["type"]}>{type}</div>
        </div>
      </div>
    </div>
  );
};
