import useClientsContext from "../../hooks/useClientsContext/useClientsContext";
import useGetClient from "../../services/useGetClient";
import { Detail } from "./clientDetail.style";

const ClientDetail = () => {
  const { selectedClient } = useClientsContext();
  const { client, isLoading } = useGetClient(selectedClient);

  return (
    <>
      {!client && !isLoading && (
        <div>Please select a client to see the details</div>
      )}
      {client && <Detail>{client?.givenName}</Detail>}
    </>
  );
};

export default ClientDetail;
