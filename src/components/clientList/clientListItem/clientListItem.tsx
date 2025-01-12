import useClientsContext from "../../../hooks/useClientsContext/useClientsContext";
import { Client } from "../../../types/clients";

interface Props {
  client: Client;
}

const ClientListItem = ({ client }: Props) => {
  const { setSelectedClient } = useClientsContext();

  return (
    <button onClick={() => setSelectedClient(client.id)}>{client.name}</button>
  );
};

export default ClientListItem;
