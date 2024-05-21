import React, { useState, useMemo } from 'react';

export default function B4() {
  const [randomNumber, setRandomNumber] = useState<number>(0);

  const newRandomNumber = useMemo(() => {
    return Math.floor(Math.random() * 100);
  }, [randomNumber]);

  const handleGenerateRandomNumber = () => {
    setRandomNumber(newRandomNumber);
  };

  return (
    <div>
      <p>Số ngẫu nhiên: {randomNumber}</p>
      <button onClick={handleGenerateRandomNumber}>Generate</button>
    </div>
  );
}
