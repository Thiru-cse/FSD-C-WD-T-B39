// import { Provider } from "react-redux"
// import DisplayReduxState from "./components/DisplayReduxState"
// import UpdateReduxState from "./components/UpdateReduxState"
// import { operationStore } from "./features/OperationStore";

import { Provider } from "react-redux";
import Card from "./components/Example2/Card";
import { productStore } from "./features/Example2/ProductStore";


function App() {

  return (
    <>
      <div>
        {/* Example: 1
        <Provider store={operationStore}>
          <DisplayReduxState />
          <UpdateReduxState />
        </Provider> */}

        <Provider store={productStore}>
        <Card/>
        </Provider>
      </div>
    </>
  );
}

export default App
