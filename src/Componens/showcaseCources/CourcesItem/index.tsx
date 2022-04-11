import { FC } from "react";
import { ICource } from "Types/cources";

import styles from "./index.module.css";

export const CourceItem: FC<ICource> = ({ title, description, img, id }) => {
  return (
    <div className={styles["item_wrapper"]}>
      <div className={styles["item"]}>
        <div className={styles["item_img"]}>
          <img src={img} alt="cource" />
        </div>
        <div className={styles["item_subTitle"]}>Video</div>
        <div className={styles["item_title"]}>{title}</div>
        <div className={styles["item_descr"]}>{description}</div>
      </div>
    </div>
  );
};
