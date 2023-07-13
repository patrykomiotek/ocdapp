import { CreateProductForm, FormState } from "@components/CreateProductForm";
import { Text, Header } from "@ui/atoms";
import { useNavigate } from "react-router-dom";
import { createProduct } from '@services/createProduct';
import { useState } from "react";

export const CreateProductPage = () => {
  const [isValidationError, setIsValidationError] = useState(false);
  const navigate = useNavigate();

  const sendData = async (data: FormState) => {

    // console.log('data: ', data);
    // 1️⃣ send data to airtable

    try {
      // const responsePromise = createProduct(data);
      const response = await createProduct(data);
      // console.log('response: ', response);

      // 2️⃣ redirect
      navigate(`/products/${response.records[0].id}`);

    } catch (e) {
      // console.error('inside catch', e);
    }
  }

  const handleSubmit = (data: FormState) => {
    if (data.name) {
      setIsValidationError(false);
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      sendData(data);
    } else {
       setIsValidationError(true);
    }
  }

  return (
    <div>
      <Header>Create product</Header>
      {isValidationError && <Text className="text-red-500">Name is required</Text>}
      <CreateProductForm
        onSubmit={handleSubmit}
      />
    </div>
  );
}