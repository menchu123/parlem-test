import useClientsContext from "../../hooks/useClientsContext/useClientsContext";
import useGetClient from "../../services/useGetClient";
import { Product as ProductType } from "../../types/clients";
import {
  Detail,
  DetailContainer,
  Product,
  ProductList,
} from "./clientDetail.style";

const ClientDetail = () => {
  const { selectedClientId } = useClientsContext();
  const { client, isError } = useGetClient(selectedClientId);

  return (
    <DetailContainer>
      {!selectedClientId && <p>Selecciona a un cliente para ver su ficha</p>}
      {isError && <div>No se ha podido cargar la ficha del cliente</div>}
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
          <ProductList>
            {client.products.map((product: ProductType) => (
              <Product key={product.id}>
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
              </Product>
            ))}
          </ProductList>
        </Detail>
      )}
    </DetailContainer>
  );
};

export default ClientDetail;
