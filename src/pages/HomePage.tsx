import { Generator } from "@components/Genrator";
import { Text, Button } from "@ui/atoms";

export const HomePage = () => {
  return (
    <>
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