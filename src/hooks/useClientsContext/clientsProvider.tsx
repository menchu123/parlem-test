import { createContext, ReactNode, useMemo, useState } from "react";
import useGetClients from "../../services/useGetClients";
import { Client } from "../../types/clients";

interface ClientsContext {
  clients: Client[];
  isLoading: boolean;
  isError: boolean;
  selectedClientId: number | null;
  setSelectedClientId: (selectedClientIdId: number) => void;
  setSearchTerm: (searchTerm: string) => void;
}

const Context = createContext<ClientsContext | null>(null);

const ClientsProvider = ({ children }: { children: ReactNode }) => {
  const [selectedClientId, setSelectedClientId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  const { clients, isLoading, isError } = useGetClients(searchTerm);

  const contextValue = useMemo(
    () => ({
      clients,
      isLoading,
      isError,
      selectedClientId,
      setSelectedClientId,
      setSearchTerm,
    }),
    [clients, isLoading, isError, selectedClientId]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export { Context };
export default ClientsProvider;
