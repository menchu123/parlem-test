import useClientsContext from "../../hooks/useClientsContext/useClientsContext";
import useGetClient from "../../services/useGetClient";

const ClientDetail = () => {
  const { selectedClient } = useClientsContext();
  const { client } = useGetClient(selectedClient);

  return (
    <>
      {!client && <div>Please select a client to see the details</div>}
      <section>{client?.name}</section>
    </>
  );
};

export default ClientDetail;
