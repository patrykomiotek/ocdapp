import { MouseEventHandler, useContext } from 'react';
import { AuthContext } from '@pages/HomePage';
import { Button } from '@ui/atoms';


export const AuthCredentials = () => {
  const context = useContext(AuthContext);

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