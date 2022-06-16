import { WidthContext } from "Componens/main/widthWrapper";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICourceUserContent, ICourceUserModule } from "Types/cources";

export const useActiveContent = (courseModules: ICourceUserModule[]) => {
  const width = useContext(WidthContext);
  const { id } = useParams<string>();

  const historyActiveContentId = localStorage.getItem(`LESSON:${id}`);
  const [activeContent, setActiveContentState] = useState<
    ICourceUserContent | undefined
  >();

  useEffect(() => {
    if (historyActiveContentId && courseModules) {
      if (+historyActiveContentId === 0) {
        // if FINISH
        return setActiveContentState({
          id: 0,
          title: "",
          type: "finish",
          data: "",
        });
      }

      let activeContentItem;
      courseModules.forEach(({ courseContents }) => {
        let content = courseContents.find(
          (i) => i.id === +historyActiveContentId
        );
        if (content) {
          activeContentItem = content;
        }
      });
      if (activeContentItem) {
        setActiveContentState(activeContentItem);
      }
    } else {
      setActiveContentState(
        width > 900 ? courseModules?.[0]?.courseContents?.[0] : undefined
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseModules, historyActiveContentId]);

  const setActiveContent = (data: ICourceUserContent | undefined) => {
    setActiveContentState(data);
    if (data) {
      localStorage.setItem(`LESSON:${id}`, data.id.toString());
    }
  };

  return { activeContent, setActiveContent };
};
