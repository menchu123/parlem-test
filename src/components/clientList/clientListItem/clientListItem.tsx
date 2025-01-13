import useClientsContext from "../../../hooks/useClientsContext/useClientsContext";
import { Client } from "../../../types/clients";
import { ClientButton } from "./clientListItem.style";

interface Props {
  client: Client;
}

const ClientListItem = ({ client }: Props) => {
  const { selectedClientId, setSelectedClientId } = useClientsContext();

  const isSelected = client.id === selectedClientId;

  return (
    <ClientButton
      onClick={() => setSelectedClientId(client.id)}
      $isSelected={isSelected}
      aria-label="Seleccionar Cliente"
      aria-expanded={isSelected}
    >
      {`${client.givenName} ${client.familyName1} ${client.familyName2}`}
    </ClientButton>
  );
};

export default ClientListItem;
