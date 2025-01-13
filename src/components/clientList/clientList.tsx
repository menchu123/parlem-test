import useClientsContext from "../../hooks/useClientsContext/useClientsContext";
import { ListContainer } from "./clientList.style";
import ClientListItem from "./clientListItem";

const ClientList = () => {
  const { clients, isError } = useClientsContext();

  return (
    <ListContainer>
      {isError && <div>No se ha podido cargar el listado de clientes</div>}
      {!!clients && !clients.length && <div>No hay resultados</div>}
      {!!clients && (
        <ul>
          {clients.map((client) => (
            <li key={client.id}>
              <ClientListItem client={client} />
            </li>
          ))}
        </ul>
      )}
    </ListContainer>
  );
};

export default ClientList;
