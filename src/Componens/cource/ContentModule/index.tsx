import classNames from "classnames";
import { Icon } from "Componens/common/Icon";
import { FC, useMemo, useState } from "react";
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

  const itemNumberString = useMemo(
    () => (itemNumber > 9 ? itemNumber : "0" + itemNumber),
    [itemNumber]
  );

  return (
    <div className={styles["item"]}>
      <div className={styles["moduleRow"]}>
        <div className={styles["itemNumber"]}>{itemNumberString}</div>
        <div className={styles["itemTitle"]}>
          <div className={styles["itemNumberTitle"]}>
            {itemNumberString} Модуль
          </div>
          <div className={styles["titleRow"]}>{title}</div>
        </div>
        <div
          className={styles["btn"]}
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
        >
          <span>Показать контент</span>
          <Icon
            icon={"chevronDown"}
            className={classNames(styles["chevron"], {
              [styles["chevronActive"]]: isExpanded,
            })}
          />
        </div>
      </div>
      <div className={styles["contentWrapper"]} {...getCollapseProps()}>
        <div className={styles["heightContentWrapper"]} />
        {courseContents.map(({ id, title, type }) => (
          <ContentItem key={id + type + "content"} {...{ id, title, type }} />
        ))}
      </div>
    </div>
  );
};
