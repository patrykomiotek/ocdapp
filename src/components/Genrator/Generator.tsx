import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Text } from '@ui/atoms/Text';
import { Button } from '@ui/atoms/Button';

export const Generator = () => {
  const state = useState(uuidv4());

  // let id = uuidv4();

  const handleClick = () => {
    // id = uuidv4();
    state[1](uuidv4());

    console.log();
  }

  return (
    <>
      <Text>{state[0]}</Text>
      <button onClick={handleClick}>Regenerate</button>
      {/* <Button /> */}
    </>
  );
}