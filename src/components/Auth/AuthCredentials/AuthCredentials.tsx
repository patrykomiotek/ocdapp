import { MouseEventHandler} from 'react';
import { Button } from '@ui/atoms';
import { useAuthContext } from '../AuthContext';


export const AuthCredentials = () => {
  const context = useAuthContext();

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    context.setIsLogged(value => !value);
  }

  return (
    <>
      <div>Is user logged? {context.isLogged ? 'Yes' : 'No'} </div>
      <Button label="Change value" onClick={handleClick} />
    </>
  );
}