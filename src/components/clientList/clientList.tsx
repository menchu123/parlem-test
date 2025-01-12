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
        {clients.map((client) => (
          <li>
            <ClientListItem client={client} key={client.id} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ClientList;
