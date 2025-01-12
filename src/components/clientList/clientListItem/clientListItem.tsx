import useClientsContext from "../../../hooks/useClientsContext/useClientsContext";
import { Client } from "../../../types/clients";
import { ClientButton } from "./clientListItem.style";

interface Props {
  client: Client;
}

const ClientListItem = ({ client }: Props) => {
  const { setSelectedClient } = useClientsContext();

  return (
    <ClientButton onClick={() => setSelectedClient(client.id)}>
      {`${client.givenName} ${client.familyName1} ${client.familyName2}`}
    </ClientButton>
  );
};

export default ClientListItem;
