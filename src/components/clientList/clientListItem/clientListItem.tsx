import { Client } from "../../../types/clients";

interface Props {
  client: Client;
}

const ClientListItem = ({ client }: Props) => {
  return <div>{client.name}</div>;
};

export default ClientListItem;
