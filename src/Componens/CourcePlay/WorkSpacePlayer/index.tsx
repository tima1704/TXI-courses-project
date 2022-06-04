import { Button } from "Componens/common/Button";
import { FC } from "react";
import { ICourceUserContent } from "Types/cources";

import styles from "./index.module.css";

interface WorkSpacePlayerProps {
  data: ICourceUserContent;
  onClickNextLesson: () => void;
}

export const WorkSpacePlayer: FC<WorkSpacePlayerProps> = ({
  data,
  onClickNextLesson,
}) => {
  return (
    <div>
      <div className={styles["titleRow"]}>
        <div className={styles["title"]}>{data.title}</div>
        <Button variant="white" onClick={onClickNextLesson}>
          Следующий урок
        </Button>
      </div>
      <div>
        {data.type === "text" && (
          <div
            className={styles["contentText"]}
            dangerouslySetInnerHTML={{ __html: data.data }}
          />
        )}
        {data.type === "video" && <div>{data.data}</div>}
        {data.type === "image" && <div>{data.data}</div>}
        {data.type === "file" && <div>{data.data}</div>}
      </div>
    </div>
  );
};
