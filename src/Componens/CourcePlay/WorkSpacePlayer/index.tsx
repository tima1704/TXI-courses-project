import { Button } from "Componens/common/Button";
import { FC } from "react";
import { ICourceUserContent } from "Types/cources";

import styles from "./index.module.css";

export const WorkSpacePlayer: FC<ICourceUserContent> = ({ title }) => {
  return (
    <div>
      <div className={styles["titleRow"]}>
        <div className={styles["title"]}>{title}</div>
        <Button variant="white">Следующий урок</Button>
      </div>
    </div>
  );
};
