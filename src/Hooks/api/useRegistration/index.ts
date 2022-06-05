import { ProfileService } from "Helpers/api/Profile";
import { useAppDispatch } from "Hooks/redux";
import { useState } from "react";
import { useMutation } from "react-query";
import { IValidError } from "Types/common";

export const useRegistration = () => {
  const [errors, setErrors] = useState<IValidError[]>([]);
  const { setModalViewAction } = useAppDispatch();

  const { mutate, isLoading: isDisabled } = useMutation(
    ProfileService.registration,
    {
      onMutate: () => {
        setErrors([]);
      },
      onSuccess: (data) => {
        setModalViewAction("login");
      },
      onError: (errorsRes: IValidError[]) => {
        if (Array.isArray(errorsRes)) {
          setErrors(errorsRes);
        }
      },
    }
  );

  return { mutate, isDisabled, errors };
};
