import { SupportServices } from "Helpers/api/Support";
import { useAppSelector } from "Hooks/redux";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { IValidError } from "Types/common";

const initialDataSupport = {
  name: "",
  phone: "",
  orderNumber: "",
  email: "",
  description: "",
};

export const useSupport = () => {
  const [errors, setErrors] = useState<IValidError[]>([]);

  const [data, setData] = useState(initialDataSupport);

  const user = useAppSelector((s) => s.App.user);

  useEffect(() => {
    if (user) {
      setData({
        ...data,
        name: user.name,
        phone: user.phone,
        email: user.email,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const { mutate, isLoading: isDisabled } = useMutation(
    SupportServices.create,
    {
      onMutate: () => {
        setErrors([]);
      },
      onSuccess: () => {
        setData(initialDataSupport);
      },
      onError: (errorsRes: IValidError[] | any) => {
        if (Array.isArray(errorsRes)) {
          setErrors(errorsRes);
        }
      },
    }
  );

  return { mutate, isDisabled, errors, data, setData };
};
