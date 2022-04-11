import { CourcesService } from "Helpers/api/Cources";
import { useQuery } from "react-query";

export const useCource = (id: string) => {
  const {
    isError,
    isLoading,
    data: cource,
  } = useQuery(["cources", id], () => CourcesService.getCourceById(id), {
    enabled: !!id,
  });

  return { isError, isLoading, cource };
};
