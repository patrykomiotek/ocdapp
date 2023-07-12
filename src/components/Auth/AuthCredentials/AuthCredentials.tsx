import { useContext } from 'react';
import { AuthContext } from '@pages/HomePage';


export const AuthCredentials = () => {
  const context = useContext(AuthContext);

  return (
    <div>Is user logged? {context.isLogged ? 'Yes' : 'No'} </div>
  );
}