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
      if (data === "sendEmail") {
        setModalViewAction("sentEmailMessege");
        return;
      }
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

export const useResetPasswordSent = () => {
  const [errors, setErrors] = useState<IValidError[]>([]);
  const { setModalViewAction } = useAppDispatch();

  const { mutate, isLoading: isDisabled } = useMutation(
    ProfileService.sendEmailResetPassword,
    {
      onMutate: () => {
        setErrors([]);
      },
      onSuccess: async (data) => {
        setModalViewAction("sentMail");
      },
      onError: (errorsRes: IValidError[]) => {
        if (Array.isArray(errorsRes)) {
          setErrors(errorsRes);
        }
      },
    }
  );

  return { errors, mutate, isDisabled };
};

export const useResetPassword = (setSearchParams: any) => {
  const [errors, setErrors] = useState<IValidError[]>([]);
  const { setModalViewAction } = useAppDispatch();

  const { mutate, isLoading: isDisabled } = useMutation(
    ProfileService.resetPassword,
    {
      onMutate: () => {
        setErrors([]);
      },
      onSuccess: async (data) => {
        setModalViewAction("passwordChanged");
        setSearchParams("");
      },
      onError: (errorsRes: IValidError[]) => {
        if (Array.isArray(errorsRes)) {
          if (errorsRes.find((i) => i.name === "idReset")) {
            setModalViewAction("someWrong");
          }
          setErrors(errorsRes);
        }
      },
    }
  );

  return { errors, mutate, isDisabled };
};
