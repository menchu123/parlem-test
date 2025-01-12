import { createContext, ReactNode, useMemo, useState } from "react";
import useGetClients from "../../services/useGetClients";
import { Client } from "../../types/clients";

interface ClientsContext {
  clients: Client[];
  isLoading: boolean;
  isError: boolean;
  selectedClient: number | null;
  setSelectedClient: (selectedClientId: number) => void;
}

const Context = createContext<ClientsContext | null>(null);

const ClientsProvider = ({ children }: { children: ReactNode }) => {
  const { clients, isLoading, isError } = useGetClients();
  const [selectedClient, setSelectedClient] = useState<number | null>(null);

  const contextValue = useMemo(
    () => ({
      clients,
      isLoading,
      isError,
      selectedClient,
      setSelectedClient,
    }),
    [clients, isLoading, isError, selectedClient]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export { Context };
export default ClientsProvider;
