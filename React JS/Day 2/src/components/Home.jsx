import React from 'react'

function Home({obj}) {
  return (
    <div>
      <h1>Home</h1>
      <h2>Batch: {obj.batch}</h2>
      <h2>team: {obj.team}</h2>
    </div>
  );
}

export default Home