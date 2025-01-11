import { createContext, ReactNode, useMemo } from "react";
import useGetClients from "../../services/useGetClients";
import { Client } from "../../types/clients";

interface ClientsContext {
  clients: Client[];
  isLoading: boolean;
  isError: boolean;
}

const Context = createContext<ClientsContext | null>(null);

const ClientsProvider = ({ children }: { children: ReactNode }) => {
  const { clients, isLoading, isError } = useGetClients();

  const contextValue = useMemo(
    () => ({
      clients,
      isLoading,
      isError,
    }),
    [clients, isLoading, isError]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export { Context };
export default ClientsProvider;
