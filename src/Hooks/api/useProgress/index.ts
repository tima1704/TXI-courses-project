import { ProgressServices } from "Helpers/api/Progress";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { IProgress } from "Types/cources";

export const useProgress = (progress: IProgress) => {
  const [progressModel, setProgressModel] = useState<any>(
    progress?.progressModel || {}
  );
  const [progressPercent, setProgressPercent] = useState<number>(
    +progress?.percent || 0
  );

  useEffect(() => {
    setProgressModel(progress?.progressModel || {});
    setProgressPercent(+progress?.percent || 0);
  }, [progress]);

  return {
    progressModel,
    setProgressModel,
    progressPercent,
    setProgressPercent,
  };
};

interface IProgressVariables {
  progressModel: object;
  percent: number;
  courseId: string;
}

export const useProgressSave = () => {
  const { mutate } = useMutation(
    ({ progressModel, percent, courseId }: IProgressVariables) =>
      ProgressServices.createOrUpdateServices(courseId, {
        progressModel,
        percent,
      })
  );

  return { mutate };
};
