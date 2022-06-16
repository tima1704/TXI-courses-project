import classNames from "classnames";
import { useProgress, useProgressSave } from "Hooks/api/useProgress";
import { FC, useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import { ICourceUserItem } from "Types/cources";
import { DescriptionPlayer } from "../DescriptionPlayer";
import { MenuModules } from "../MenuModules";
import { WorkSpacePlayer } from "../WorkSpacePlayer";

import styles from "./index.module.css";
import { useActiveContent } from "Hooks/common/useActiveContent";

export const MainCoursePlay: FC<ICourceUserItem> = ({
  courseMainInfo,
  courceModulesMain,
  progress,
}) => {
  const { title } = courseMainInfo;
  const courseModules = courceModulesMain?.courseModules;

  const { activeContent, setActiveContent } = useActiveContent(courseModules);

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

    setActiveContent(
      nextModule || { id: 0, title: "", type: "finish", data: "" }
    );

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

  const onCLickCanselActiveContent = () => {
    setActiveContent(undefined);
  };

  const onClickStartCourseAgain = () => {
    setActiveContent(courseModules?.[0]?.courseContents?.[0] || undefined);
  };

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["main"]}>
        <div
          className={classNames(styles["right"], {
            [styles["none"]]: activeContent,
          })}
        >
          <DescriptionPlayer title={title} progressPercent={progressPercent} />
          <MenuModules
            modules={courseModules}
            setActiveContent={setActiveContent}
            progressModel={progressModel}
            activeContentId={activeContent?.id}
          />
        </div>
        <div
          className={classNames(styles["workSpace"], {
            [styles["none"]]: !activeContent,
          })}
        >
          {activeContent && (
            <WorkSpacePlayer
              data={activeContent}
              onClickNextLesson={onClickNextLesson}
              onCLickCansel={onCLickCanselActiveContent}
              onClickStartCourseAgain={onClickStartCourseAgain}
              isFinish={activeContent?.id === 0}
            />
          )}
        </div>
      </div>
    </div>
  );
};
