import { v4 as uuidv4 } from 'uuid';
import { Text } from '../Text';
import { Button } from '../Button';

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