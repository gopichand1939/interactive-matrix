import React, { useState } from 'react';
import './Matrix.css';

const Matrix = () => {
  const [matrix, setMatrix] = useState(Array(9).fill(''));
  const [clicks, setClicks] = useState([]);

  const handleClick = (index) => {
    if (matrix[index] === '') {
      const newMatrix = [...matrix];
      newMatrix[index] = 'green';
      setMatrix(newMatrix);
      setClicks([...clicks, index]);
    } else if (clicks.length === 8 && !clicks.includes(index)) {
      const finalMatrix = [...matrix];
      finalMatrix[index] = 'orange';
      clicks.forEach((i) => {
        finalMatrix[i] = 'orange';
      });
      setMatrix(finalMatrix);
    }
  };

  return (
    <div className="matrix">
      {matrix.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default Matrix;
