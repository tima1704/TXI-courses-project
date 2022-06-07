import classNames from "classnames";
import { Icon } from "Componens/common/Icon";
import { FC, useMemo, useState } from "react";
import useCollapse from "react-collapsed";
import { useTranslation } from "react-i18next";
import { ICourceUserModule } from "Types/cources";

import styles from "./index.module.css";

interface ICourceUserModuleProps extends ICourceUserModule {
  index: number;
  setActiveContent: React.Dispatch<React.SetStateAction<any | undefined>>;
  progressModel?: any;
}

export const ModuleItem: FC<ICourceUserModuleProps> = ({
  title,
  courseContents,
  index,
  setActiveContent,
  progressModel,
}) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  const checkModule = useMemo(() => {
    if (progressModel) {
      return Object.keys(progressModel).length;
    } else {
      return false;
    }
  }, [progressModel]);

  const { t } = useTranslation();

  return (
    <div className={styles["itemModule"]}>
      <div className={styles["row"]}>
        {checkModule && checkModule >= courseContents.length ? (
          <Icon icon={"check"} className={styles["checkIcon"]} />
        ) : (
          <div className={styles["check"]} />
        )}
        <div
          className={styles["module"]}
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
        >
          <div className={styles["itemNumber"]}>
            {t("cource.contentModule.module")} {index + 1}
          </div>
          <div className={styles["titleRow"]}>
            <div>{title}</div>
            <div className={styles["titleProgress"]}>
              <span>
                {courseContents.length < checkModule
                  ? courseContents.length
                  : checkModule || 0}
                /{courseContents.length}
              </span>
              <Icon
                icon={"chevronDown"}
                className={classNames({ [styles["activeIMG"]]: isExpanded })}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles["content"]} {...getCollapseProps()}>
        {courseContents.map((item, indexCont) => (
          <div
            key={index + "cont" + item.id + "i" + indexCont}
            onClick={() => setActiveContent(item)}
          >
            <div className={styles["contentItemDecor"]} />
            <div className={styles["row"]}>
              {progressModel?.[item.id] ? (
                <Icon icon={"check"} className={styles["checkIcon"]} />
              ) : (
                <div className={styles["check"]} />
              )}
              <div>
                <div className={styles["contentTitle"]}>{item.title}</div>
                <div className={styles["contentType"]}>{item.type}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
