import { QueryClient, useSuspenseQuery } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // cacheTime: 1000 * 60 * 15,
      staleTime: 1000 * 5,
      retry: 2,
      retryDelay: 1000 * 5,
    },
  },
});

interface UseFetchProps<T> {
  fetchFunction: (params: any) => Promise<T>;
  queryKey: readonly unknown[];
}

const useFetch = <T,>({ fetchFunction, queryKey }: UseFetchProps<T>) => {
  const { data, isLoading, status } = useSuspenseQuery<T>({
    queryKey: queryKey,
    queryFn: fetchFunction,
    refetchInterval: 1000 * 60 * 5,

    // staleTime: 1000 * 60 * 5, // Data dianggap fresh selama 5 menit
    // cacheTime: 1000 * 60 * 10, // Data akan tetap ada di cache selama 10 menit setelah tidak digunakan
  });

  return { data, isLoading, status };
};

export default useFetch;
