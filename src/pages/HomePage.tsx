import { AuthInfo } from "@components/Auth/AuthInfo";
import { Generator } from "@components/Genrator";
import { ThemeSwitcher } from "@components/Theme/ThemeSwitcher";
import { Text, Button } from "@ui/atoms";
import { Dispatch, SetStateAction, createContext, useState } from "react";

interface Auth {
  isLogged: boolean;
  // setIsLogged: (value: boolean) => void
  setIsLogged: Dispatch<SetStateAction<boolean>>
}

const defaultValues: Auth = {
  isLogged: false,
  setIsLogged: () => null,
}

export const AuthContext = createContext<Auth>(defaultValues);

export const HomePage = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <AuthContext.Provider value={{
        isLogged,
        setIsLogged
      }}>
        <AuthInfo />
      </AuthContext.Provider>

      <ThemeSwitcher />

      <Text bgColor="#ff0000">
          Today is <span>payday</span>
        </Text>
        <Button
          label="Hello"
          color="clouds"
          bgColor="emerald"
        />
        <Generator />
    </>
  );
}