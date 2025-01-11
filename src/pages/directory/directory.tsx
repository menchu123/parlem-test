import ClientDetail from "../../components/clientDetail";
import ClientList from "../../components/clientList";
import useGetClients from "../../services/useGetClients";

const Directory = () => {
  const { clients } = useGetClients();
  return (
    <>
      <div>{JSON.stringify(clients)}</div>
      <ClientList />
      <ClientDetail />
    </>
  );
};

export default Directory;
