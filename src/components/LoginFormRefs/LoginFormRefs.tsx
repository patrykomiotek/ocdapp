import { Button } from "@ui/atoms";
import { Input } from "@ui/molecules/Input/Input";
import { FormEventHandler, useRef, useEffect } from "react";

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

export const LoginFormRefs = () => {
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
  //   // languageFieldRef.current?.style.border = '#ff0000 1px solid';
  // }, [languageFieldRef.current]);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    // formValues
    console.log('send')
    if (emailFieldRef.current) {
      console.log(emailFieldRef.current.value);
    }

    // {
    //   email: emailFieldRef.current.value || '',
    //   password: passwordFieldRef.current.value || '',
    //   language: languageFieldRef.current.value || '',
    // }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            ref={emailFieldRef}
            label="E-mail"
            type="email"
            defaultValue={defaultValues.email}
          />
        </div>
        <div>
          <Input
            ref={passwordFieldRef}
            label="Password"
            type="password"
            defaultValue={defaultValues.password}
          />
        </div>
        <div>
          <Input
            ref={languageFieldRef}
            label="Language"
            type="text"
            defaultValue={defaultValues.language}
          />
        </div>
        <div>
          <Button label="Send" />
        </div>
      </form>
    </div>
  );
}