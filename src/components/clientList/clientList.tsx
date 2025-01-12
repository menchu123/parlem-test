import { Client } from "../../types/clients";
import ClientListItem from "./clientListItem";
import Filter from "./filters";

interface Props {
  clients: Client[];
}

const ClientList = ({ clients }: Props) => {
  return (
    <section>
      <Filter />
      <ul>
        {!!clients &&
          clients.map((client) => (
            <li key={client.id}>
              <ClientListItem client={client} />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default ClientList;
