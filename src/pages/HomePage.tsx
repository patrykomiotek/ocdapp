import { AuthInfo } from "@components/Auth/AuthInfo";
import { Generator } from "@components/Genrator";
import { Text, Button } from "@ui/atoms";
import { createContext } from "react";

interface Auth {
  isLogged: boolean;
}

const defaultValues: Auth = {
  isLogged: false,
}

export const AuthContext = createContext<Auth>(defaultValues);

export const HomePage = () => {
  return (
    <>
      <AuthContext.Provider value={defaultValues}>
        <AuthInfo />
      </AuthContext.Provider>

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