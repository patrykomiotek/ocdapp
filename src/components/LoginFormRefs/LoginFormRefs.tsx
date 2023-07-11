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
            defaultValue={defaultValues.email}
            ref={emailFieldRef}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            defaultValue={defaultValues.password}
            ref={passwordFieldRef}
          />
        </div>
        <div>
          <label htmlFor="language">Language</label>
          <input
            id="language"
            type="text"
            defaultValue={defaultValues.language}
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