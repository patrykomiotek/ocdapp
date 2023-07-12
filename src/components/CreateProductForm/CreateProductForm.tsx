import { FormEventHandler, useRef } from "react";

import { Button } from "@ui/atoms";
import { Input } from "@ui/molecules/Input/Input";

export interface FormState {
  name: string;
  description: string;
  price: number;
}

type Props = {
  onSubmit: (data: FormState) => void;
  defaultValues?: FormState,
}

export const CreateProductForm = ({ onSubmit }: Props) => {
  const nameFieldRef = useRef<HTMLInputElement>(null);
  const descriptionFieldRef = useRef<HTMLInputElement>(null);
  const priceFieldRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    onSubmit({
      name: nameFieldRef.current?.value || '',
      description: descriptionFieldRef.current?.value || '',
      price: parseInt((priceFieldRef.current?.value || 0) as string, 10),
    });
  }

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit}>
        <div className="mt-2">
          <Input
            ref={nameFieldRef}
            label="Name"
            type="text"
          />
        </div>
        <div className="mt-2">
          <Input
            ref={descriptionFieldRef}
            label="Description"
            type="text"
          />
        </div>
        <div className="mt-2">
          <Input
            ref={priceFieldRef}
            label="Price"
            type="number"
          />
        </div>
        <div className="mt-2">
          <Button label="Send" />
        </div>
      </form>
    </div>
  );
}