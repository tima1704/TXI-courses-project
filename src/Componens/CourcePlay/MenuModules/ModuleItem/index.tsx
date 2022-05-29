import { Icon } from "Componens/common/Icon";
import { FC, useState } from "react";
import useCollapse from "react-collapsed";
import { ICourceUserModule } from "Types/cources";

import styles from "./index.module.css";

interface ICourceUserModuleProps extends ICourceUserModule {
  index: number;
}

export const ModuleItem: FC<ICourceUserModuleProps> = ({
  title,
  courseContents,
  index,
}) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <div className={styles["itemModule"]}>
      <div className={styles["row"]}>
        <div className={styles["check"]} />
        <div className={styles["module"]}>
          <div className={styles["itemNumber"]}>Модуль {index + 1}</div>
          <div className={styles["titleRow"]}>
            <div>{title}</div>
            <div
              className={styles["titleProgress"]}
              {...getToggleProps({
                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
              })}
            >
              <span>0/{courseContents.length}</span>
              <Icon icon={"chevronDown"} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles["content"]} {...getCollapseProps()}>
        {courseContents.map((item, indexCont) => (
          <div key={index + "cont" + item.id + "i" + indexCont}>
            <div className={styles["contentItemDecor"]} />
            <div className={styles["row"]}>
              <div className={styles["check"]} />
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
