import { URL_COURSE_ID, URL_USER_COURSE_ID } from "Constants/URL";
import { FC } from "react";
import { ICource } from "Types/cources";

import c from "classnames";

import styles from "./index.module.css";
import { getUrlImg } from "Helpers/common";
import { Button } from "Componens/common/Button";
import ProgresBar from "Componens/common/ProgressBar";
import { useTranslation } from "react-i18next";
import { LinkTo } from "Componens/common/Links";

interface CourceItemProps extends ICource {
  user?: boolean;
}

export const CourceItem: FC<CourceItemProps> = ({
  courseMainInfo,
  id,
  user,
}) => {
  const { t } = useTranslation();

  return (
    <div className={c(styles["item_wrapper"], "anim_opacity")}>
      <LinkTo link={!user ? URL_COURSE_ID(id) : URL_USER_COURSE_ID(id)}>
        <div className={styles["item"]}>
          <div className={styles["item_img"]}>
            <img src={getUrlImg(courseMainInfo.img)} alt="cource" />
          </div>
          <div className={styles["item_title"]}>{courseMainInfo.title}</div>
          <div className={styles["item_descr"]}>
            {courseMainInfo.description}
          </div>
          <div className={styles["item_row"]}>
            {user ? (
              <>
                <ProgresBar
                  value={courseMainInfo.progress ? +courseMainInfo.progress : 0}
                  classNameBar={styles["progressBar"]}
                />
                <Button className={styles["startCours"]}>
                  {t("common.start")}
                </Button>
              </>
            ) : (
              <>
                {/* <div className={styles["price"]}>
                  {t("showcaseCoursces.courcesItem.price")}
                </div> */}
                <Button>{t("showcaseCoursces.courcesItem.buy")}</Button>
              </>
            )}
          </div>
        </div>
      </LinkTo>
    </div>
  );
};
