import { Button } from "Componens/common/Button";
import { host } from "Constants/API";
import { TOKEN } from "Constants/App";
import { FC, useMemo } from "react";
import { ICourceUserContent } from "Types/cources";

import {
  BigPlayButton,
  ControlBar,
  LoadingSpinner,
  PlaybackRateMenuButton,
  Player,
  // @ts-ignore:disable-next-line
} from "video-react";

import styles from "./index.module.css";

interface WorkSpacePlayerProps {
  data: ICourceUserContent;
  onClickNextLesson: () => void;
}

export const WorkSpacePlayer: FC<WorkSpacePlayerProps> = ({
  data,
  onClickNextLesson,
}) => {
  const urlContent = useMemo(() => {
    return host + data.data + "?token=" + localStorage.getItem(TOKEN);
  }, [data.data]);

  return (
    <div>
      <div className={styles["titleRow"]}>
        <div className={styles["title"]}>{data.title}</div>
        <Button variant="white" onClick={onClickNextLesson}>
          Следующий урок
        </Button>
      </div>
      <div className={styles["content"]}>
        {data.type === "text" && (
          <div
            className={styles["contentText"]}
            dangerouslySetInnerHTML={{ __html: data.data }}
          />
        )}
        {data.type === "video" && (
          <div style={{ width: "100%" }}>
            <Player src={urlContent} playsInline>
              <BigPlayButton position="center" />
              <LoadingSpinner />
              <ControlBar>
                <PlaybackRateMenuButton rates={[2, 1, 0.5]} />
              </ControlBar>
            </Player>
          </div>
        )}
        {data.type === "image" && <img alt="img" src={urlContent} />}
        {data.type === "file" && <div>{data.data}</div>}
      </div>
    </div>
  );
};
