import { MouseEventHandler} from 'react';
import { Text, Button } from '@ui/atoms';
import { useAuthContext } from '../AuthContext';


export const AuthCredentials = () => {
  const context = useAuthContext();

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    context.setIsLogged(value => !value);
  }

  return (
    <>
      <Text>Is user logged? {context.isLogged ? 'Yes' : 'No'} </Text>
      <Button label="Change value" onClick={handleClick} />
    </>
  );
}