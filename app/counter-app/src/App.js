import React, { useState } from 'react';
import Display from './Display.js';
import Button from './Button.js';
import './App.css';

const App = () => {

  const [ counter, setCounter ] = useState(0);
  const increaseByOne = () => setCounter( counter + 1);
  const setToZero = () => setCounter( 0 );

  return (
    <div className="App">
      <Display counter={counter} />
      <Button onClick={increaseByOne} 
      text='plus'
      />
      <Button onClick={setToZero} 
      text='Reset'
      />
    </div>
  );
}

export default App;
