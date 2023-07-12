import { CreateProductForm, FormState } from "@components/CreateProductForm";
import { Header } from "@ui/atoms";
import { useNavigate } from "react-router-dom";
import { createProduct } from '@services/createProduct';

export const CreateProductPage = () => {
  const navigate = useNavigate();

  const sendData = async (data: FormState) => {

    console.log('data: ', data);
    // 1️⃣ send data to airtable

    try {
      // const responsePromise = createProduct(data);
      const response = await createProduct(data);

      // 2️⃣ redirect
      navigate(`/products/${response.records[0].id}`);

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