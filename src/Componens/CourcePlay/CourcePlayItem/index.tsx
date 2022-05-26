import { Icon } from "Componens/common/Icon";
import { TOKEN } from "Constants/App";
import { FC, useMemo, useState } from "react";
import useCollapse from "react-collapsed";
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

export const CourcePlayItem: FC<ICourceUserContent> = ({
  type,
  id,
  title,
  data,
}) => {
  const contentUrl = useMemo(
    () =>
      process.env.REACT_APP_API_URL +
      data +
      "?token=" +
      localStorage.getItem(TOKEN),
    [data]
  );
  switch (type) {
    case "text":
      return (
        <Collapse title={title}>
          <div
            className={styles["text"]}
            dangerouslySetInnerHTML={{ __html: data }}
          />
        </Collapse>
      );

    case "video":
      return (
        <Collapse title={title}>
          <div style={{ width: "40%" }}>
            <Player src={contentUrl} playsInline>
              <BigPlayButton position="center" />
              <LoadingSpinner />
              <ControlBar>
                <PlaybackRateMenuButton rates={[2, 1, 0.5]} />
              </ControlBar>
            </Player>
          </div>
        </Collapse>
      );

    case "file":
      return (
        <div>
          <a href={contentUrl} target={"_blank"} rel="noreferrer">
            <Icon icon="file" />
            {title}
          </a>
        </div>
      );

    case "image":
      return (
        <Collapse title={title}>
          <img src={contentUrl} alt="" className={styles["image"]} />
        </Collapse>
      );

    default:
      return null;
  }
};

interface CollapseProps {
  children: React.ReactNode;
  title: string;
}

const Collapse: FC<CollapseProps> = ({ children, title }) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <div className={styles["item"]}>
      <div
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
        className={styles["titleContent"]}
      >
        <span>{title}</span>
      </div>
      <div {...getCollapseProps()}>
        <div className={styles["content"]}>
          <span>{children}</span>
        </div>
      </div>
    </div>
  );
};
