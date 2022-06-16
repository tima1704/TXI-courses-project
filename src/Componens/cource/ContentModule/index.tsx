import classNames from "classnames";
import { Icon } from "Componens/common/Icon";
import { FC, useMemo, useState } from "react";
import useCollapse from "react-collapsed";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <div className={styles["item"]}>
      <div className={styles["moduleRow"]}>
        <div className={styles["itemNumberWrapper"]}>
          <div className={styles["itemNumber"]}>{itemNumberString}</div>
        </div>
        <div className={styles["itemTitle"]}>
          <div className={styles["itemNumberTitle"]}>
            {/* {itemNumberString} */}
            {t("cource.contentModule.module")}
          </div>
          <div
            className={
              title.length > 40 ? styles["BigtitleRow"] : styles["titleRow"]
            }
          >
            {title}
          </div>
        </div>
        <div
          className={styles["btn"]}
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
        >
          <div>
            <span>{t("cource.contentModule.showContent")}</span>
            <Icon
              icon={"chevronDown"}
              className={classNames(styles["chevron"], {
                [styles["chevronActive"]]: isExpanded,
              })}
            />
          </div>
        </div>
      </div>
      <div {...getCollapseProps()}>
        <div className={styles["heightContentWrapper"]} />
        <div className={styles["contentWrapper"]} style={{ width: "100%" }}>
          {courseContents.map(({ id, title, type }) => (
            <ContentItem key={id + type + "content"} {...{ id, title, type }} />
          ))}
        </div>
      </div>
    </div>
  );
};
