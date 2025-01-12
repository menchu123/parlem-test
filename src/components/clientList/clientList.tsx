import { Client } from "../../types/clients";
import { List, ListContainer } from "./clientList.style";
import ClientListItem from "./clientListItem";

interface Props {
  clients: Client[];
}

const ClientList = ({ clients }: Props) => {
  return (
    <ListContainer>
      <List>
        {!!clients &&
          clients.map((client) => (
            <li key={client.id}>
              <ClientListItem client={client} />
            </li>
          ))}
      </List>
    </ListContainer>
  );
};

export default ClientList;
