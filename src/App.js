import React, { useState } from 'react';
import CalculatorForm from './calculator/CalculatorForm';
import './App.css';

const App = () => {
  const [titleState] = useState('React Calculator');
  const [xState, setXState] = useState(0);
  const [yState, setyState] = useState(0);

  const inputXonchange = (event) => {
    console.log(event.target.value);
    setXState(event.target.value);
  };

  const inputYonchange = (event) => {
    console.log(event.target.value);
    setyState(event.target.value);
  };

  return (
    <div className="App">
      <h1>{titleState}</h1>
      <CalculatorForm xOnChange={inputXonchange} yOnChange={inputYonchange} x={xState} y={yState} />
    </div>
  );
};

export default App;
