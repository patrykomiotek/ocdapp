import { ChangeEventHandler, FormEventHandler, useState, useRef } from "react";

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
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            ref={emailFieldRef}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            ref={passwordFieldRef}
          />
        </div>
        <div>
          <label htmlFor="language">Language</label>
          <input
            id="language"
            type="text"
            ref={languageFieldRef}
          />
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}