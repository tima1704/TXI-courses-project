import { Icon } from "Componens/common/Icon";
import { FC } from "react";
import { ICourceContent } from "Types/cources";

import styles from "./index.module.css";

export const ContentItem: FC<ICourceContent> = ({ type, title }) => {
  return (
    <div className={styles["icon_row"]}>
      <Icon icon={type} className={styles["icon"]} />
      <span>{title}</span>
    </div>
  );
};
