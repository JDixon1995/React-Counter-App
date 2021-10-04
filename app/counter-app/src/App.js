import React, { useState } from 'react';
import Display from './Display.js';
import './App.css';

const App = () => {

  const [ counter, setCounter ] = useState(0);
  const increaseByOne = () => setCounter( counter + 1);
  const setToZero = () => setCounter( 0 );

  return (
    <div className="App">
      <Display counter={counter} />
      <button onClick={increaseByOne}>
        +
      </button>
      <button onClick={setToZero}>
        Reset
      </button>
    </div>
  );
}

export default App;
