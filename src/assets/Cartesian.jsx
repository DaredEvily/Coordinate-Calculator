import React, { useState } from 'react';
import { Styleforinput } from '../../style';
import { iterate_phi } from './mathtt/Cart'; // Make sure to import the iterate_phi function

const YourComponent = ({ onCompute }) => {
  const [aValue, setAValue] = useState('');
  const [bValue, setBValue] = useState('');
  const [cValue, setCValue] = useState('');
  const [dValue, setDValue] = useState('');
  const [eValue, setEValue] = useState('');
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
      case 'c':
        setCValue(value);
        break;
      case 'd':
        setDValue(value);
        break;
      case 'e':
        setEValue(value);
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
      isNaN(cValue) ||
      isNaN(dValue) ||
      isNaN(eValue)
    ) {
      setError('Please fill in all fields with valid numbers');
      return;
    }

    // Pass the values to the iterate_phi function for computation
    const result = iterate_phi(
      parseFloat(aValue),
      parseFloat(bValue),
      parseFloat(cValue),
      parseFloat(dValue),
      parseFloat(eValue)
    );

    // Pass the result to the parent component for further processing
    onCompute(result);

    // You can perform any necessary actions here based on the input values
    setError('');
  };

  return (
    <Styleforinput>
      <input
        className="a input"
        id="a"
        placeholder="a"
        type="number"
        value={aValue}
        onChange={handleInputChange}
      />
      <input
        className="b input"
        id="b"
        placeholder="b"
        type="number"
        value={bValue}
        onChange={handleInputChange}
      />
      <input
        className="c input"
        id="c"
        placeholder="c"
        type="number"
        value={cValue}
        onChange={handleInputChange}
      />
      <input
        className="d input"
        id="d"
        placeholder="d"
        type="number"
        value={dValue}
        onChange={handleInputChange}
      />
      <input
        className="e input"
        id="e"
        placeholder="e"
        type="number"
        value={eValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </Styleforinput>
  );
};

export default YourComponent;
