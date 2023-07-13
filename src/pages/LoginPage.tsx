import { LoginFormRefs } from "@components/LoginFormRefs";
import type { FormState } from '@components/LoginFormRefs';

const defaultValues: FormState = {
  email: 'test@wp.pl',
  password: 'aaa',
  language: 'php',
}


export const LoginPage = () => {

  const handleSubmit = (data: FormState) => {
    // console.log('LoginPage: ', data);
  }

  return (
    <LoginFormRefs
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
    />
  );
}