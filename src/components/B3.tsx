import React, { useState, useCallback } from 'react';

export default function B3() {
  const [color, setColor] = useState('');
  const handleChangeColor = useCallback((event) => {
    setColor(event.target.value);
  }, []);

  return (
    <div>
      <span>Màu người dùng chọn:</span><br />
      <span>{color}</span><br />
      <input 
        type="color" 
        value={color} 
        onChange={handleChangeColor} 
        style={{ marginRight: '10px' }}
      /><br />
      <span>Màu hiển thị:</span><br />
      <div 
        style={{
          width: '100px',
          height: '50px',
          backgroundColor: color,
          marginTop: '5px',
        }}
      ></div>
    </div>
  );
}
