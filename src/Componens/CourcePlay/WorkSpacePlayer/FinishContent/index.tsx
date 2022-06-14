import { Button } from "Componens/common/Button";
import { LinkTo } from "Componens/common/Links";
import { URL_HOME } from "Constants/URL";
import { FC } from "react";
import styles from "./index.module.css";
export const FinishContent: FC = () => {
  return (
    <div className={styles["finish_content"]}>
      <div className={styles["body_content"]}>
        <h3>Поздравляем!</h3>
        <p>Поздравляем с прохождением курса.
          Доступ к видео у вас остаётся навсегда, чтобы вы могли в любой момент освежить память.</p>
        <span>Так-же, дарим вам 30% скидки на любоый новый курс!</span>
      </div>
      <LinkTo link={URL_HOME}>
        <Button type="button">К списку курсов</Button>
      </LinkTo>
    </div>
  )
};
