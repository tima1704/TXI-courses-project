import { FC, useState } from "react";
import useCollapse from "react-collapsed";
import { ICourceContent } from "Types/cources";

import styles from "./index.module.css";

export const CourcePlayItem: FC<ICourceContent> = ({ type, id, title }) => {
  switch (type) {
    case "text":
      return (
        <Collapse title={title}>
          <div>apdmpwomo</div>
        </Collapse>
      );

    case "video":
      return (
        <Collapse title={title}>
          <div>gmooemfpa[m</div>
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
        {title}
      </div>
      <div {...getCollapseProps()}>
        <div className={styles["content"]}>{children}</div>
      </div>
    </div>
  );
};
