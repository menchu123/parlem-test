import ClientDetail from "../../components/clientDetail";
import ClientList from "../../components/clientList";
import useClientsContext from "../../hooks/useClientsContext/useClientsContext";

const Directory = () => {
  const { clients } = useClientsContext();
  return (
    <>
      <div>{JSON.stringify(clients)}</div>
      <ClientList />
      <ClientDetail />
    </>
  );
};

export default Directory;
