import { URL_HOME } from "Constants/URL";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

export const NoByCources = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["content"]}>
        <div className={styles["title"]}>У вас нету купленных курсов</div>
        <Link to={URL_HOME} className={styles["link"]}>
          Перейти к курсам
        </Link>
      </div>
    </div>
  );
};
