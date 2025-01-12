import ClientDetail from "../../components/clientDetail";
import ClientList from "../../components/clientList";
import useClientsContext from "../../hooks/useClientsContext/useClientsContext";

const Directory = () => {
  const { clients } = useClientsContext();
  return (
    <>
      <ClientList clients={clients} />
      <ClientDetail />
    </>
  );
};

export default Directory;
