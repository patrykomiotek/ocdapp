import { useEffect, useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((value) => value + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  return (
    <div>
      Count: {count}
    </div>
  );
}