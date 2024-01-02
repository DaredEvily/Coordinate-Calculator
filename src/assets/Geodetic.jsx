// YourComponent.jsx
import React, { useState } from 'react';
import { Styleforinput } from '../../style';

const YourComponent = ({ onCompute }) => {
  const [aValue, setAValue] = useState('');
  const [bValue, setBValue] = useState('');
  const [λValue, setλValue] = useState('');
  const [ΦValue, setΦValue] = useState('');
  const [hValue, setHValue] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const { id, value } = event.target;

    // Validation: Check if the input value is a valid number
    if (isNaN(value)) {
      setError('Please enter a valid number');
      return;
    }

    setError('');

    switch (id) {
      case 'a':
        setAValue(value);
        break;
      case 'b':
        setBValue(value);
        break;
      case 'λ':
        setλValue(value);
        break;
      case 'Φ':
        setΦValue(value);
        break;
      case 'h':
        setHValue(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    // Validation: Check if all required values are provided and are valid numbers
    if (
      isNaN(aValue) ||
      isNaN(bValue) ||
      isNaN(λValue) ||
      isNaN(ΦValue) ||
      isNaN(hValue)
    ) {
      setError('Please fill in all fields with valid numbers');
      return;
    }

    // Pass the values to the parent component for computation
    onCompute({
      a: parseFloat(aValue),
      b: parseFloat(bValue),
      λ: parseFloat(λValue),
      Φ: parseFloat(ΦValue),
      h: parseFloat(hValue),
    });

    // You can perform any necessary actions here based on the input values
    setError('');
  };

  return (
    <Styleforinput>
      <input
        className="a input"
        id="a"
        placeholder="a"
        type='number'
        value={aValue}
        onChange={handleInputChange}
      />
      <input
        className="b input"
        id="b"
        placeholder="b"
        type='number'
        value={bValue}
        onChange={handleInputChange}
      />
      <input
        className="λ input"
        id="λ"
        placeholder="λ"
        type='number'
        value={λValue}
        onChange={handleInputChange}
      />
      <input
        className="Φ input"
        id="Φ"
        placeholder="Φ"
        type='number'
        value={ΦValue}
        onChange={handleInputChange}
      />
      <input
        className="h input"
        id="h"
        placeholder="h"
        type='number'
        value={hValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </Styleforinput>
  );
};

export default YourComponent;
