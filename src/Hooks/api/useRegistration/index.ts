import { ProfileService } from "Helpers/api/Profile";
import { useState } from "react";
import { useMutation } from "react-query";
import { IValidError } from "Types/common";

interface IVariables {
  data: FormData;
  email: string;
}

export const useRegistration = () => {
  const [errors, setErrors] = useState<IValidError[]>([]);

  const { mutate, isLoading: isDisabled } = useMutation(
    ({ data, email }: IVariables) => {
      return ProfileService.registration(data, email);
    },
    {
      onMutate: () => {
        setErrors([]);
      },
      onError: (errorsRes: IValidError[]) => {
        if (Array.isArray(errorsRes)) {
          setErrors(errorsRes);
        }
      },
    }
  );

  return { mutate, isDisabled, errors, setErrors };
};
