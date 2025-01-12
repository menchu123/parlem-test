import { Client } from "../../types/clients";
import ClientListItem from "./clientListItem";
import Filter from "./filters";

interface Props {
  clients: Client[];
}

const ClientList = ({ clients }: Props) => {
  return (
    <>
      <Filter />
      {clients.map((client) => (
        <ClientListItem client={client} key={client.id} />
      ))}
    </>
  );
};

export default ClientList;
