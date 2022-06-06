import { PaymentsServices } from "Helpers/api/Payments";
import { useQuery } from "react-query";

export const useTransactions = () => {
  const { data, isLoading, isError } = useQuery(
    ["transactions"],
    PaymentsServices.getAllTransactions
  );

  return { data, isLoading, isError };
};
