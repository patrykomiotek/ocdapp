import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface Auth {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<Auth | null>(null);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('Oh no! Component should be placed inside AuthProvider');
  }
  return context;
}


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <AuthContext.Provider value={{
      isLogged,
      setIsLogged
    }}>
      {children}
    </AuthContext.Provider>
  );
}