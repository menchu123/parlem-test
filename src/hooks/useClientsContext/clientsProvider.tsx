import { createContext, useMemo } from "react";
import useGetClients from "../../services/useGetClients";

const Context = createContext(null);

const ClientsProvider = ({ children }) => {
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
