import ClientDetail from "../../components/clientDetail";
import ClientList from "../../components/clientList";
import Layout from "../../components/layout";
import useClientsContext from "../../hooks/useClientsContext/useClientsContext";

const Directory = () => {
  const { clients } = useClientsContext();
  return (
    <Layout>
      <ClientList clients={clients} />
      <ClientDetail />
    </Layout>
  );
};

export default Directory;
