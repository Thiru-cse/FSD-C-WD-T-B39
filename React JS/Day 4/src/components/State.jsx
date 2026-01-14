import React from 'react'
import { useState } from 'react';

function State() {
    // var count = 0;
    const [count, setCount] = useState(0);

    const handleInc = () => {
        // count = count + 1;
        setCount(count+1);
        // console.log(count);
    }

  return (
      <div>
          <h1>Count: {count}</h1>
          <button onClick={handleInc}>Increment</button>
    </div>
  )
}

export default State