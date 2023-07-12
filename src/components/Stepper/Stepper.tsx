import { Button } from '@ui/atoms';
import { useState } from 'react';

export const Stepper = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Button label="-" onClick={() => setCount(value => value - 1)} />
      {count}
      <Button label="+" onClick={() => setCount(value => value + 1)} />
    </div>
  );
}
