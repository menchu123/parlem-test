import { useQuery } from "@tanstack/react-query";
import api from "./api";

const fetchClient = async (clientId: number) => {
  const { data } = await api.get(`/clients/${clientId}`);
  return data;
};

const useGetClient = (clientId: number | null) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["client", clientId],
    queryFn: () => fetchClient(clientId as number),
    enabled: clientId !== null,
  });

  return { client: data, isLoading, isError };
};

export default useGetClient;
