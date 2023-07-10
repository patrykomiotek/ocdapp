import { v4 as uuidv4 } from 'uuid';
import { Text } from '@ui/atoms/Text';
import { Button } from '@ui/atoms/Button';

export const Generator = () => {
  const id = uuidv4();
  return (
    <>
      <Text>{id}</Text>
      <button>Regenerate</button>
      {/* <Button /> */}
    </>
  );
}