import { Header } from "@ui/atoms";
import { useEffect, useState } from "react";

// $ curl https://api.airtable.com/v0/appPyGC48mGbBsYNq/products \
// -H "Authorization: Bearer YOUR_SECRET_API_TOKEN"
// patKsWe7VZFgmCOU9.04bea28c521ca4e0630a424bbedd9a7c3c7c6262b01d4728e34d84064a6bb3c0

// fetch data in useEffect
// save data in state

const API_URL = 'https://api.airtable.com/v0/appPyGC48mGbBsYNq/products';
const API_TOKEN = 'patKsWe7VZFgmCOU9.04bea28c521ca4e0630a424bbedd9a7c3c7c6262b01d4728e34d84064a6bb3c0';

interface Product {
  id: string;
  fields: {
    name: string;
    price: number;
    description: string;
    category_name: string[];
    quantity: number;
    create_at: string;
    updated_at: string;
  }
}

interface ApiResponse {
  records: Product[]
}

type AppStatus<T> = {
  // resolved
  data: T;
  isLoading: false;
  hasError: false;
} | {
  // pending
  data: [];
  isLoading: true;
  hasError: false;
} | {
  // rejected
  data: undefined;
  isLoading: false;
  hasError: true;
}

const defaultValues: AppStatus<Product[]> = {
  // pending
  data: [],
  isLoading: true,
  hasError: false,
}

export const ProductsPage = () => {
  const [status, setStatus] = useState<AppStatus<Product[]>>(defaultValues);

  const loadData = async () => {

    const response: Response = await fetch(API_URL, {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`
        }
    });

    const responseData: ApiResponse = (await response.json()) as ApiResponse;
    // console.log(data);
    setStatus({
      data: responseData.records,
      isLoading: false,
      hasError: false,
    });

    // fetch(API_URL, {
    //   headers: {
    //     Authorization: `Bearer ${API_TOKEN}`
    //   }
    // })
    // .then(response => {
    //   if (response.ok) {
    //     return response.json();
    //   }
    // })
    // .then(data => {
    //   console.log({ data });
    // })
  }

  useEffect(() => {
    void loadData();
  }, []);

  return (
    <div>
      <Header>Products</Header>
      {status.isLoading ?? <p>Loading...</p>}
      {status.hasError ?? <p>Oh no, anyway!</p>}
      <div>
          {status.data?.map((elem) => {
            return <div key={elem.id}>{elem.fields.name}</div>
          })}
      </div>
    </div>
  );
}