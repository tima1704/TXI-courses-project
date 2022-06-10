import { ProfileService } from "Helpers/api/Profile";
import { useAppDispatch } from "Hooks/redux";
import { useState } from "react";
import { useMutation } from "react-query";
import { IValidError } from "Types/common";

interface IVariables {
  data: FormData;
  email: string;
}

export const useRegistration = () => {
  const [errors, setErrors] = useState<IValidError[]>([]);
  const { setModalViewAction } = useAppDispatch();

  const { mutate, isLoading: isDisabled } = useMutation(
    ({ data, email }: IVariables) => {
      return ProfileService.registration(data, email);
    },
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
