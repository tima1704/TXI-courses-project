import { FC, useState } from "react";
import useCollapse from "react-collapsed";
import { ICourceModule } from "Types/cources";

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
          <div>0{itemNumber}</div> {title}
        </div>
        <button className={styles["content_btn_open"]}>Подробнее</button>
      </button>
      <div {...getCollapseProps()}>
        <div className={styles["content__body"]}>
          {courseContents.map(({ id, title, type }) => (
            <div key={id + type + "content"}>{title}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
