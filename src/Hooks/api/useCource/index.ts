import { CourcesService } from "Helpers/api/Cources";
import { useQuery } from "react-query";

export const useCource = (id?: string) => {
  const {
    isError,
    isLoading,
    data: cource,
  } = useQuery(["cources", id], () => CourcesService.getCourceById(id), {
    enabled: !!id,
  });

  return { isError, isLoading, cource };
};

export const useCourceUser = (id: string) => {
  const {
    isError,
    isLoading,
    data: cource,
  } = useQuery(
    ["cources", "user", id],
    () => CourcesService.getUserCource(id),
    {
      enabled: !!id,
    }
  );

  return { isError, isLoading, cource };
};
