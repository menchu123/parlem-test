import { useQuery } from "@tanstack/react-query";
import api from "./api";
import { Client } from "../types/clients";

const checkSearch = (search: string, item: string) => {
  return item.toLowerCase().includes(search.toLowerCase());
};

const fetchClients = async (searchTerm: string | null) => {
  const { data } = await api.get("/clients");
  const filteredData = searchTerm
    ? data.filter(
        (client: Client) =>
          checkSearch(searchTerm, client.givenName) ||
          checkSearch(searchTerm, client.familyName1) ||
          checkSearch(searchTerm, client.familyName2)
      )
    : data;

  return filteredData;
};

const useGetClients = (searchTerm: string | null) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["clients", searchTerm],
    queryFn: () => fetchClients(searchTerm),
  });

  return { clients: data, isLoading, isError };
};

export default useGetClients;
