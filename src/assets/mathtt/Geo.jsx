// Geo.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Geo = ({ a, b, λ, Φ, h }) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const toRadians = (angle) => angle * (Math.PI / 180);

  useEffect(() => {
    // Call handleSubmit when the component mounts or when a, b, λ, Φ, or h change
    handleSubmit();
  }, [a, b, λ, Φ, h]);

  const handleSubmit = () => {
    try {
      const parsedAValue = validateAndParse(a, 'a');
      const parsedBValue = validateAndParse(b, 'b');
      const lamda = toRadians(validateAndParse(λ, 'λ'));
      const phi = toRadians(validateAndParse(Φ, 'Φ'));
      const parsedHValue = validateAndParse(h, 'h');
      const e = (parsedAValue ** 2 - parsedBValue ** 2) / parsedAValue ** 2;
      const N = parsedAValue / Math.sqrt(1 - e * Math.sin(phi) ** 2);
      const x = (N + parsedHValue) * Math.cos(phi) * Math.cos(lamda);
      const y = (N + parsedHValue) * Math.cos(phi) * Math.sin(lamda);
      const z = (parsedHValue + N * (1 - e)) * Math.sin(phi);

      setResult({ x, y, z });
      setError(null);
    } catch (error) {
      setError(`Error: ${error.message}`);
      setResult(null);
    }
  };

  const validateAndParse = (value, name) => {
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue)) {
      throw new Error(`${name} must be a valid number. Received: ${value}`);
    }
    return parsedValue;
  };

  return (
    <>
      {result && (
        <>
          <p>X: {result.x}</p>
          <p>Y: {result.y}</p>
          <p>Z: {result.z}</p>
        </>
      )}
      {error && <div>{error}</div>}
    </>
  );
};

Geo.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
  λ: PropTypes.number,
  Φ: PropTypes.number,
  h: PropTypes.number,
};

Geo.defaultProps = {
  a: 0,
  b: 0,
  λ: 0,
  Φ: 0,
  h: 0,
};

export default Geo;
