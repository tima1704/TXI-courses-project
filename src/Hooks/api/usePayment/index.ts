import { IInvoice, PaymentsServices } from "Helpers/api/Payments";
import { useAppDispatch } from "Hooks/redux";
import { useState } from "react";
import { useMutation } from "react-query";

export const usePayment = () => {
  const { setModalViewAction } = useAppDispatch();

  const [pay, setPay] = useState<IInvoice | undefined>();

  const { mutate, isLoading } = useMutation(
    PaymentsServices.createPaymentInvoise,
    {
      onSuccess: async (invoiceData) => {
        if (!invoiceData) return;

        setPay(invoiceData);
      },
      onError: (err) => {
        if (Array.isArray(err)) {
          setModalViewAction("errorCoursePaid");
        }
      },
    }
  );

  return { mutate, isLoading, setModalViewAction, pay, setPay };
};
