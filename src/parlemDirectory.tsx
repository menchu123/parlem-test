import ClientsProvider from "./hooks/useClientsContext/clientsProvider";
import Directory from "./pages/directory";

const ParlemDirectory = () => {
  return (
    <ClientsProvider>
      <Directory />
    </ClientsProvider>
  );
};

export default ParlemDirectory;
