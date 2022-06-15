import { Button } from "Componens/common/Button";
import { LinkTo } from "Componens/common/Links";
import { URL_HOME } from "Constants/URL";
import { FC } from "react";
import styles from "./index.module.css";
import { t } from "i18next";

export const FinishContent: FC = () => {
  return (
    <div className={styles["finish_content"]}>
      <div className={styles["body_content"]}>
        <h3>{t("CourcePlay.finish.title")}</h3>
        <p>{t("CourcePlay.finish.text")}</p>
        {/* <span>{t("CourcePlay.finish.discount")}</span> */}
      </div>
      <LinkTo link={URL_HOME}>
        <Button type="button">{t("CourcePlay.finish.backToCourses")}</Button>
      </LinkTo>
    </div>
  );
};
