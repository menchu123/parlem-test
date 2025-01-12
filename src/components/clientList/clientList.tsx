import { Client } from "../../types/clients";
import { ListContainer } from "./clientList.style";
import ClientListItem from "./clientListItem";

interface Props {
  clients: Client[];
}

const ClientList = ({ clients }: Props) => {
  return (
    <ListContainer>
      <ul>
        {!!clients &&
          clients.map((client) => (
            <li key={client.id}>
              <ClientListItem client={client} />
            </li>
          ))}
      </ul>
    </ListContainer>
  );
};

export default ClientList;
