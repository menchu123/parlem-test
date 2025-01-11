import { useContext } from "react";
import { Context } from "./clientsProvider";

const useClientsContext = () => {
  const contextValue = useContext(Context);

  if (!contextValue) {
    throw new Error(
      "useClientsContexts must be used within a LanguageProvider"
    );
  }

  return contextValue;
};

export default useClientsContext;
