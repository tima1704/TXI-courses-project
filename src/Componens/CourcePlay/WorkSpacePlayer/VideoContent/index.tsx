import { host } from "Constants/API";
import { TOKEN } from "Constants/App";
import { FC, useMemo } from "react";
import ReactPlayer from "react-player";

// import {
//   BigPlayButton,
//   ControlBar,
//   LoadingSpinner,
//   PlaybackRateMenuButton,
//   Player,
//   // @ts-ignore:disable-next-line
// } from "video-react";

import styles from "./index.module.css";

interface IVideoContnet {
  data: string;
  title: string;
}

export const VideoContent: FC<IVideoContnet> = ({ data, title }) => {
  const urlContent = useMemo(() => {
    return (
      host +
      data.replace("video", "file") +
      "?token=" +
      localStorage.getItem(TOKEN)
    );
  }, [data]);
  console.log(urlContent);
  return (
    <div className={styles["videoContainer"]}>
      <ReactPlayer
        controls
        className={styles["video"]}
        url={urlContent}
        width={"100%"}
        height={"100%"}
        config={{ file: { attributes: { controlslist: ["nodownload"] } } }}
      />
      {/* <Player src={urlContent} playsInline>
          <BigPlayButton position="center" />
          <LoadingSpinner />
          <ControlBar>
            <PlaybackRateMenuButton rates={[2, 1, 0.5]} />
          </ControlBar>
        </Player> */}
      <div className={styles["title"]}>{title}</div>
    </div>
  );
};
