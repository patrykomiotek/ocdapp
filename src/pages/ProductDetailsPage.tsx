import { useApi } from "@hooks/useApi";
import { Product } from "@model/Product";
import { Text, Header } from "@ui/atoms";
import { useParams } from "react-router-dom";

const API_URL = 'https://api.airtable.com/v0/appPyGC48mGbBsYNq/products';

export const ProductDetailsPage = () => {
  const params = useParams();
  const { data, isLoading, hasError } = useApi<Product>(`${API_URL}/${params.id!}`);

  // <Loading hidden={true} />

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {hasError && <p>Oh no, anyway!</p>}

      <Header>{data?.fields.name}</Header>
      <Text>{data?.fields.description}</Text>

    </div>
  );
}