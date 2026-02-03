import React from 'react'
import { useDispatch } from 'react-redux'
import { ADD, SUB } from '../features/OperationSlice';

function UpdateReduxState() {
  const dispatch = useDispatch(); // Get the dispatch function from redux store
  return (
    <div>
      <h1>UpdateReduxState</h1>
      <button onClick={()=>{dispatch(ADD(1))}}>ADD</button>
      <button onClick={()=>{dispatch(SUB(1))}}>SUB</button>
    </div>
  );
}

export default UpdateReduxState