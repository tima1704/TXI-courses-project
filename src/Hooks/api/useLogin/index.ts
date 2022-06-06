import { TOKEN } from "Constants/App";

import { ProfileService } from "Helpers/api/Profile";
import { useAppDispatch } from "Hooks/redux";
import { useState } from "react";
import { useMutation } from "react-query";

import { IValidError } from "Types/common";

export const useLogin = () => {
  const [errors, setErrors] = useState<IValidError[]>([]);
  const { checkAuth, setModalViewAction } = useAppDispatch();

  const { mutate, isLoading: isDisabled } = useMutation(ProfileService.login, {
    onMutate: () => {
      setErrors([]);
    },
    onSuccess: async (data) => {
      if (data?.jwt) {
        localStorage.setItem(TOKEN, data.jwt);
      }
      await checkAuth();
      setModalViewAction();
    },
    onError: (errorsRes: IValidError[]) => {
      setErrors(errorsRes);
    },
  });

  return { mutate, isDisabled, errors };
};
