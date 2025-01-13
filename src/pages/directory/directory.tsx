import ClientDetail from "../../components/clientDetail";
import ClientList from "../../components/clientList";
import Layout from "../../components/layout";

const Directory = () => {
  return (
    <Layout>
      <ClientList />
      <ClientDetail />
    </Layout>
  );
};

export default Directory;
