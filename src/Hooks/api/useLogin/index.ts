import { TOKEN } from "Constants/App";
import { URL_USER_COURSE } from "Constants/URL";
import { ProfileService } from "Helpers/api/Profile";
import { useAppDispatch } from "Hooks/redux";
import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { IValidError } from "Types/common";

export const useLogin = () => {
  const [errors, setErrors] = useState<IValidError[]>([]);
  const { checkAuth, setModalViewAction } = useAppDispatch();
  const navigate = useNavigate();

  const { mutate, isLoading: isDisabled } = useMutation(ProfileService.login, {
    onMutate: () => {
      setErrors([]);
    },
    onSuccess: async (data) => {
      if (data?.jwt) {
        localStorage.setItem(TOKEN, data.jwt);
      }
      await checkAuth();
      navigate(URL_USER_COURSE);
      setModalViewAction();
    },
    onError: (errorsRes: IValidError[]) => {
      setErrors(errorsRes);
    },
  });

  return { mutate, isDisabled, errors };
};
