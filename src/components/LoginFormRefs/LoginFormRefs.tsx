import { FormEventHandler, useRef, useEffect } from "react";

import { Button } from "@ui/atoms";
import { Input } from "@ui/molecules/Input/Input";

export interface FormState {
  email: string;
  password: string;
  language?: string;
}

type Props = {
  defaultValues: FormState,
  onSubmit: (data: FormState) => void;
}

export const LoginFormRefs = ({ defaultValues, onSubmit }: Props) => {
  // const [refresh, setRefresh] = useState(false);
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);
  const languageFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // if (emailFieldRef.current) {
    //   emailFieldRef.current.focus();
    // }

    emailFieldRef.current?.focus();

  }, []);

  // useEffect(() => {
  //   // each time formValues.language
  //   console.log('Hello!')
  // }, [window.innerWidth]);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    // formValues
    // console.log('send')
    // if (emailFieldRef.current) {
    //   console.log(emailFieldRef.current.value);
    // }

    onSubmit({
      email: emailFieldRef.current?.value || '',
      password: passwordFieldRef.current?.value || '',
      language: languageFieldRef.current?.value || '',
    });
  }

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit}>
        <div className="mt-2">
          <Input
            ref={emailFieldRef}
            label="E-mail"
            type="email"
            defaultValue={defaultValues.email}
          />
        </div>
        <div className="mt-2">
          <Input
            ref={passwordFieldRef}
            label="Password"
            type="password"
            defaultValue={defaultValues.password}
          />
        </div>
        <div className="mt-2">
          <Input
            ref={languageFieldRef}
            label="Language"
            type="text"
            defaultValue={defaultValues.language}
          />
        </div>
        <div className="mt-2">
          <Button label="Send" />
        </div>
      </form>
    </div>
  );
}