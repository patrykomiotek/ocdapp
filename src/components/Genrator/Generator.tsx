import { MouseEventHandler, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Text } from '@ui/atoms/Text';
import { Button } from '@ui/atoms/Button';

export const Generator = () => {
  const [id, setId] = useState(uuidv4());

  // let id = uuidv4();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
  // const handleClick = (e: MouseEvent) => {
    // id = uuidv4();
    // state[1](uuidv4());
    setId(uuidv4());

    console.log(e);
  }

  return (
    <>
      {/* <Text>{state[0]}</Text> */}
      <Text>{id}</Text>
      {/* <button onClick={handleClick}>Regenerate</button> */}
      <Button
        label="Regenerate"
        onClick={handleClick}
      />
    </>
  );
}