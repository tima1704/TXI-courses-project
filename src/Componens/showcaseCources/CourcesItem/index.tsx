import { URL_COURSE_ID, URL_USER_COURSE_ID } from "Constants/URL";
import { FC } from "react";
import { Link } from "react-router-dom";
import { ICource } from "Types/cources";

import c from "classnames";

import styles from "./index.module.css";

interface CourceItemProps extends ICource {
  user?: boolean;
}

export const CourceItem: FC<CourceItemProps> = ({
  title,
  description,
  img,
  id,
  user,
}) => {
  return (
    <div className={c(styles["item_wrapper"], "anim_opacity")}>
      <Link to={!user ? URL_COURSE_ID(id) : URL_USER_COURSE_ID(id)}>
        <div className={styles["item"]}>
          <div className={styles["item_img"]}>
            <img src={img} alt="cource" />
          </div>
          <div className={styles["item_subTitle"]}>Video</div>
          <div className={styles["item_title"]}>{title}</div>
          <div className={styles["item_descr"]}>{description}</div>
        </div>
      </Link>
    </div>
  );
};
