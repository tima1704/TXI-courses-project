import { useState } from "react";
import { useMutation } from "react-query";

export const useProgress = () => {
  const [progressModel, setProgressModel] = useState<any>({});
  const [progressPercent, setProgressPercent] = useState<number>(0);

  return {
    progressModel,
    setProgressModel,
    progressPercent,
    setProgressPercent,
  };
};

export const useProgressSave = () => {
  const { mutate } = useMutation(({ progressModel, percentage }: any) => {
    return new Promise(() => {});
  });
};
