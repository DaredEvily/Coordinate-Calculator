import React, { useState } from "react";
import Cartesian from "./assets/Cartesian";
import Geodetic from "./assets/Geodetic";
import { Full, Rectangle, Footer, Input, Result } from "../style";
import Geo from "./assets/mathtt/Geo"; // Import your Geo component


const Layout = () => {
  const [selectedCalculation, setSelectedCalculation] = useState("Cartesian");
  const [geoResult, setGeoResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculationChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCalculation(selectedValue);
  };

  const handleGeoCompute = ({ a, b, λ, Φ, h }) => {
    try {
      setGeoResult({ a, b, λ, Φ, h });
      setError(null);
    } catch (error) {
      setError(`Error: ${error.message}`);
      setGeoResult(null);
    }
  };

  const handleCartesianCompute = ({ a, b, x, y, z }) => {
    try {
      // Perform Cartesian computations here
      setGeoResult({ a, b, x, y, z });
      setError(null);
    } catch (error) {
      setError(`Error: ${error.message}`);
      setGeoResult(null);
    }
  };

  return (
    <Full>
      <Rectangle>
        <Input>
          <div className="head">
            <h1>Choose Calculation: </h1>
            <select value={selectedCalculation} onChange={handleCalculationChange}>
              <option value="Cartesian">Cartesian</option>
              <option value="Geodetic">Geodetic</option>
            </select>
          </div>
          {selectedCalculation === "Geodetic" && (
            <Geodetic onCompute={handleGeoCompute} />
          )}
          {selectedCalculation === "Cartesian" && (
            <Cartesian onCompute={handleCartesianCompute} />
          )}
        </Input>
        <Result>
          {geoResult && <Geo {...geoResult} />}
          {error && <div>{error}</div>}
        </Result>
      </Rectangle>
      <Footer>
        <h1>Made With <span>❤ </span>By &copy; Ahmad Gamal</h1>
      </Footer>
    </Full>
  );
};

export default Layout;
