import React from 'react';

import './App.css';

let count = 1;

const increment = () => {
  console.log('increment called');
  count = count +1;
}

const decrement = () => {
  console.log('decrement called');
  count = count -1;
}



function App() {
  return (
    <div className="App">
      <h2>Counter</h2>
      <div>
        <button onClick={decrement}>-</button>
        <span data-testid="count-value">{count}</span>
        <button onClick={increment}>+</button>
      </div> 
    </div>
  );
}

export default App;
