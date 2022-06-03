import { WidthContext } from "Componens/main/widthWrapper";
import { FC, useContext, useState } from "react";
import { ICourceUserItem } from "Types/cources";
import { DescriptionPlayer } from "../DescriptionPlayer";
import { MenuModules } from "../MenuModules";
import { WorkSpacePlayer } from "../WorkSpacePlayer";

import styles from "./index.module.css";

export const MainCoursePlay: FC<ICourceUserItem> = ({
  courseMainInfo,
  courceModulesMain,
}) => {
  const { title } = courseMainInfo;
  const { courseModules } = courceModulesMain;

  const width = useContext(WidthContext);

  const [activeContent] = useState(
    width > 1080 ? courseModules[0].courseContents[1] : undefined
  );

  return (
    <div className={styles["main"]}>
      <div className={styles["right"]}>
        <DescriptionPlayer title={title} />
        <MenuModules modules={courseModules} />
      </div>
      <div className={styles["workSpace"]}>
        {activeContent && <WorkSpacePlayer {...activeContent} />}
      </div>
    </div>
  );
};
