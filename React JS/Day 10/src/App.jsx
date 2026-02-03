// import { createContext, useState } from "react"
// import CompA from "./components/CompA"
// import CompB from "./components/CompB"
// import CompC from "./components/CompC";

import Cart from "./components/Cart";
import Product from "./components/Product";

// export const myContext = createContext();

function App() {
  // const [contextValue, setContextValue] = useState(1);

  return (
    <div>
      {/* <h1>App Component: {contextValue}</h1>
      <myContext.Provider value={[contextValue, setContextValue]}>
        <CompA />
        <CompB />
        <CompC/>
      </myContext.Provider> */}
      <Product />
      <Cart/>
    </div>
  );
}

export default App
