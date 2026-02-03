import React, { useContext } from 'react'
import { myContext } from '../App'

function CompB() {
  const [contextValue, setContextValue] = useContext(myContext);
  const handleSubmit = () => {
    setContextValue((val)=>val-1)
  }

  return (
    <div>
      <h1>Comp B - {contextValue}</h1>
      <button onClick={handleSubmit}>SUB</button>
    </div>
  );
}

export default CompB