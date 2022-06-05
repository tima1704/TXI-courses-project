// import { WidthContext } from "Componens/main/widthWrapper";
import { useProgress, useProgressSave } from "Hooks/api/useProgress";
import { FC, useCallback, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { ICourceUserContent, ICourceUserItem } from "Types/cources";
import { DescriptionPlayer } from "../DescriptionPlayer";
import { MenuModules } from "../MenuModules";
import { WorkSpacePlayer } from "../WorkSpacePlayer";

import styles from "./index.module.css";

export const MainCoursePlay: FC<ICourceUserItem> = ({
  courseMainInfo,
  courceModulesMain,
  progress,
}) => {
  const { title } = courseMainInfo;
  const { courseModules } = courceModulesMain;

  // const width = useContext(WidthContext);

  const [activeContent, setActiveContent] = useState<
    ICourceUserContent | undefined
  >(undefined);

  const {
    progressModel,
    setProgressModel,
    setProgressPercent,
    progressPercent,
  } = useProgress(progress);

  const { mutate } = useProgressSave();
  const { id: courseId } = useParams<string>();

  const lengthContent = useMemo(() => {
    let lengthContent = 0;
    courseModules.forEach((item) => {
      lengthContent = lengthContent + item.courseContents.length;
    });
    return lengthContent;
  }, [courseModules]);

  const onClickNextLesson = useCallback(() => {
    if (!activeContent) return;
    let positionContent = [0, 0];
    for (let index = 0; index < courseModules.length; index++) {
      const element = courseModules[index];

      let indexContent = element.courseContents.findIndex(
        (content) => content.id === activeContent?.id
      );

      if (indexContent >= 0) {
        positionContent = [index, indexContent];
        break;
      }
    }

    let nextModule =
      courseModules[positionContent[0]].courseContents[positionContent[1] + 1];

    if (!nextModule) {
      nextModule = courseModules[positionContent[0] + 1]?.courseContents[0];
    }

    setActiveContent(nextModule);

    const courseModuleId = courseModules[positionContent[0]].id;
    const newProgressModel = {
      ...progressModel,
      [courseModuleId]: {
        ...progressModel[courseModuleId],
        [activeContent.id]: true,
      },
    };
    setProgressModel(newProgressModel);

    // PERCENT PROGRESS
    let progressLength = 0;
    Object.values(newProgressModel).forEach(
      (item) =>
        (progressLength = progressLength + Object.values(item as any).length)
    );

    let newProgressPercent = +((progressLength / lengthContent) * 100).toFixed(
      2
    );
    if (newProgressPercent > 100) {
      newProgressPercent = 100;
    }
    if (newProgressPercent < 0) {
      newProgressPercent = 0;
    }

    setProgressPercent(newProgressPercent);

    // SAVE PROGRESS
    mutate({
      progressModel: newProgressModel,
      percent: newProgressPercent,
      courseId: courseId as string,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseModules, activeContent, progressModel, lengthContent]);

  return (
    <div className={styles["main"]}>
      <div className={styles["right"]}>
        <DescriptionPlayer title={title} progressPercent={progressPercent} />
        <MenuModules
          modules={courseModules}
          setActiveContent={setActiveContent}
          progressModel={progressModel}
        />
      </div>
      <div className={styles["workSpace"]}>
        {activeContent && (
          <WorkSpacePlayer
            data={activeContent}
            onClickNextLesson={onClickNextLesson}
          />
        )}
      </div>
    </div>
  );
};
