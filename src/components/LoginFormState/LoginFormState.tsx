import { Button } from "@ui/atoms";
import { Input } from "@ui/molecules/Input/Input";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

interface FormState {
  email: string;
  password: string;
  language?: string;
}

const defaultValues: FormState = {
  email: 'test@wp.pl',
  password: 'aaa',
  language: 'php',
}

export const LoginFormState = () => {
  const [formValues, setFormValues] = useState<FormState>(defaultValues);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    // formValues
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const id: string = event.target.id;
    const value: string = event.target.value;

    setFormValues({
      ...formValues,
      [id]: value,
    });
  }

  return (
    <div>
      <p>Email: {formValues.email}, password: {formValues.password}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            label="E-mail"
            id="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <Input
            label="Password"
            id="password"
            type="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <Input
            label="Language"
            id="language"
            type="text"
            value={formValues.language}
            onChange={handleChange}
          />
        </div>
        <div>
          <Button label="Send" />
        </div>
      </form>
    </div>
  );
}