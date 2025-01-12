import useClientsContext from "../../hooks/useClientsContext/useClientsContext";
import useGetClient from "../../services/useGetClient";
import { Product } from "../../types/clients";
import { Detail, DetailContainer } from "./clientDetail.style";

const ClientDetail = () => {
  const { selectedClient } = useClientsContext();
  const { client, isLoading } = useGetClient(selectedClient);

  return (
    <DetailContainer>
      {!client && !isLoading && (
        <p>Please select a client to see the details</p>
      )}
      {client && (
        <Detail>
          <h2>{`${client.givenName} ${client.familyName1} ${client.familyName2}`}</h2>
          <p>
            <strong>Documento:</strong> {client.docType.toUpperCase()} -{" "}
            {client.docNum}
          </p>
          <p>
            <strong>Email:</strong> {client.email}
          </p>
          <p>
            <strong>Teléfono:</strong> {client.phone}
          </p>
          <p>
            <strong>ID Cliente:</strong> {client.customerId}
          </p>
          <h2>Productos</h2>
          <ul>
            {client.products.map((product: Product) => (
              <li key={product.id}>
                <p>
                  <strong>Nombre:</strong> {product.productName}
                </p>
                <p>
                  <strong>Velocidad:</strong>{" "}
                  {product.mbSpeed ? `${product.mbSpeed} Mbps` : "n/a"}
                </p>
                <p>
                  <strong>Datos:</strong>{" "}
                  {product.gbData ? `${product.gbData} GB` : "n/a"}
                </p>
                <p>
                  <strong>Número Terminal:</strong> {product.numeracioTerminal}
                </p>
                <p>
                  <strong>Fecha de Venta:</strong>{" "}
                  {new Date(product.soldAt).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        </Detail>
      )}
    </DetailContainer>
  );
};

export default ClientDetail;
