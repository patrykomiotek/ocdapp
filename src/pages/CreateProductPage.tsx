import { CreateProductForm, FormState } from "@components/CreateProductForm";
import { Header } from "@ui/atoms";
import { useNavigate } from "react-router-dom";

export const CreateProductPage = () => {
  const navigate = useNavigate();

  const sendData = async (data: FormState) => {

    console.log('data: ', data);
    // 1️⃣ send data to airtable
    const API_URL = 'https://api.airtable.com/v0/appPyGC48mGbBsYNq/products';
    const API_TOKEN = 'patKsWe7VZFgmCOU9.04bea28c521ca4e0630a424bbedd9a7c3c7c6262b01d4728e34d84064a6bb3c0';

    const payload = {
      records: [{
        fields: data
      }]
    };

    console.log('payload: ', payload, JSON.stringify(payload))

    try {
      const response = await fetch(API_URL, {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(payload)
      });

      const responseData = await response.json() as undefined;
      console.log('data from response: ', responseData);

      // 2️⃣ redirect
      // navigate(responseData?.records[0]?.id);

    } catch {
      //
    }
  }

  const handleSubmit = (data: FormState) => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    sendData(data);
  }

  return (
    <div>
      <Header>Create product</Header>
      <CreateProductForm
        onSubmit={handleSubmit}
      />
    </div>
  );
}