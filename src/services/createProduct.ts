import { FormState } from "@components/CreateProductForm";
import { Product } from "@model/Product";

const API_URL = 'https://api.airtable.com/v0/appPyGC48mGbBsYNq/products';
const API_TOKEN = 'patKsWe7VZFgmCOU9.04bea28c521ca4e0630a424bbedd9a7c3c7c6262b01d4728e34d84064a6bb3c0';

interface ApiResponse {
  records: Product[]
}

// api.post<ApiResponse>(data)
export const createProduct = async (data: FormState): Promise<ApiResponse> => {

  const payload = {
    records: [{
      fields: data
    }]
  };

  const response: Response = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(payload)
  });

  const responseData: ApiResponse = (await response.json()) as ApiResponse;

  return responseData;

}
