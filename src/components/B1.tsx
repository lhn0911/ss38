import React, { useState, useCallback } from 'react';

export default function B1() {
  const [count, setCount] = useState(0);
  const increase = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
    </div>
  );
}
