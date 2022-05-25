import { FC, useState } from "react";
import useCollapse from "react-collapsed";
import { ICourceModule } from "Types/cources";
import { ContentItem } from "./ContentItem";

import styles from "./index.module.css";

export const ContentModule: FC<ICourceModule> = ({
  title,
  id,
  courseContents,
  itemNumber,
}) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <div className={styles["content"]}>
      <button
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
        className={styles["content_btn"]}
      >
        <div className={styles["content__title"]}>
          <div>{itemNumber < 10 ? `0${itemNumber}` : `${itemNumber}`}</div>
          {title.length > 45 ? <p className={styles["maxText"]}>{title}</p> : <p>{title}</p>}
        </div>
        <span className={styles["content_btn_open"]}>Подробнее</span>
      </button>
      <div {...getCollapseProps()}>
        <div className={styles["content__body"]}>
          {courseContents.map(({ id, title, type }) => (
            <ContentItem key={id + type + "content"} {...{ id, title, type }} />
          ))}
        </div>
      </div>
    </div>
  );
};
