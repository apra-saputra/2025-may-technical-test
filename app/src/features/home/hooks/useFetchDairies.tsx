import useFetch from "@/features/shared/hooks/useQuery";
import { fetching } from "@/libs/fetching";
import type { Dairy } from "@/libs/types/dairy";

const useFetchDairies = () => {
  const { data, isLoading, status } = useFetch({
    queryKey: ["/dairies"],
    fetchFunction: async () => {
      const data = await fetching<{ record_count: number; content: Dairy[] }>(
        "/dairies"
      );
      console.log(data);
      return data;
    },
  });

  return { data, isLoading, status };
};

export default useFetchDairies;
