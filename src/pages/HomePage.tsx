import { AuthProvider } from "@components/Auth/AuthContext";
import { AuthInfo } from "@components/Auth/AuthInfo";
import { Generator } from "@components/Genrator";
import { ThemeSwitcher } from "@components/Theme/ThemeSwitcher";
import { Text, Button } from "@ui/atoms";

export const HomePage = () => {
  return (
    <>
      <AuthProvider>
        <AuthInfo />
      </AuthProvider>

      <ThemeSwitcher />

      <Text>
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