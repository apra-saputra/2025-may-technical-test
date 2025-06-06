import useFetch from "@/features/shared/hooks/useQuery";
import { fetching } from "@/libs/fetching";
import type { Dairy } from "@/libs/types/dairy";

const useFetchDailryDetail = (id: number) => {
  const { data, isLoading, status } = useFetch({
    queryKey: ["/dairies/detail", id.toString()],
    fetchFunction: async () => {
      const data = await fetching<Dairy>(`/dairies/${id}`);
      return data;
    },
  });
  return {
    data,
    isLoading,
    status,
  };
};

export default useFetchDailryDetail;
