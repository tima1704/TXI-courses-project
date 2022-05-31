import { Button } from "Componens/common/Button";
import { FC } from "react";
import { ICourceUserContent } from "Types/cources";

import styles from "./index.module.css";

export const WorkSpacePlayer: FC<ICourceUserContent> = ({
  title,
  type,
  data,
}) => {
  return (
    <div>
      <div className={styles["titleRow"]}>
        <div className={styles["title"]}>{title}</div>
        <Button variant="white">Следующий урок</Button>
      </div>
      <div>
        {type === "text" && (
          <div
            className={styles["contentText"]}
            dangerouslySetInnerHTML={{ __html: data }}
          />
        )}
        {type === "video" && <div>{data}</div>}
        {type === "image" && <div>{data}</div>}
        {type === "file" && <div>{data}</div>}
      </div>
    </div>
  );
};
