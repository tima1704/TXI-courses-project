import { host } from "Constants/API";
import { TOKEN } from "Constants/App";
import { FC, useMemo } from "react";

import styles from "./index.module.css";

interface IImageContnet {
  data: string;
  title: string;
}

export const ImageContent: FC<IImageContnet> = ({ data, title }) => {
  const urlContent = useMemo(() => {
    return host + data + "?token=" + localStorage.getItem(TOKEN);
  }, [data]);
  return (
    <div>
      <div className={styles["title"]}>{title}</div>
      <img alt="img" src={urlContent} className={styles["img"]} />
    </div>
  );
};
