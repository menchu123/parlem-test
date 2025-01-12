import { useQuery } from "@tanstack/react-query";
import api from "./api";

const fetchClients = async () => {
  const { data } = await api.get("/clients");
  return data;
};

const useGetClients = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["clients"],
    queryFn: fetchClients,
  });

  return { clients: data, isLoading, isError };
};

export default useGetClients;
