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
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={formValues.email}
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={formValues.password}
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="language">Language</label>
          <input
            id="language"
            type="text"
            value={formValues.language}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}