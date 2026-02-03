import React, { useContext } from 'react'
import { myContext } from '../App';

function CompC() {
  const [contextValue, setContextValue] = useContext(myContext);
    const handleSubmit = () => {
      setContextValue(0);
    };
  
  return (
      <div>
        <h1>Comp C - {contextValue}</h1>
        <button onClick={handleSubmit}>RESET</button>
      </div>
  );
}

export default CompC