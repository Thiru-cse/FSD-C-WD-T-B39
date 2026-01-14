import React, { useState } from 'react'

function Cart() {
    const [item, setItem] = useState(0);
  return (
    <div>
      <h1> Cart - {item}</h1>
      <button
        onClick={() => {
          setItem((val) => val + 1);
        }}
      >
        Add
      </button>
      {/* //                            0  =>  0 + 1 */}
      {/* //                            1  =>  1 + 1 */}

      <button
        onClick={() => {
          setItem((val) => val - 1);
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default Cart