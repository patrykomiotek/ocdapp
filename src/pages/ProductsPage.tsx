import { ApiResponse, useApi } from "@hooks/useApi";
import { Header } from "@ui/atoms";
import { Product } from "@model/Product";
import { Link } from "@ui/atoms/Link";

// $ curl https://api.airtable.com/v0/appPyGC48mGbBsYNq/products \
// -H "Authorization: Bearer YOUR_SECRET_API_TOKEN"
// patKsWe7VZFgmCOU9.04bea28c521ca4e0630a424bbedd9a7c3c7c6262b01d4728e34d84064a6bb3c0

// fetch data in useEffect
// save data in state

const API_URL = 'https://api.airtable.com/v0/appPyGC48mGbBsYNq/products';

export const ProductsPage = () => {
  const { data, isLoading, hasError } = useApi<ApiResponse<Product[]>>(API_URL);

  console.log({ data, isLoading, hasError });

  return (
    <div>
      <Header>Products</Header>
      {isLoading && <p>Loading...</p>}
      {hasError && <p>Oh no, anyway!</p>}
      <div>
          {data?.records?.map((elem) => {
            return <div key={elem.id}><Link to={`/products/${elem.id}`}>{elem.fields.name}</Link></div>
          })}
      </div>
    </div>
  );
}