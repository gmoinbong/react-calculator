import React from 'react';
import '../App.css';
const Result = (props) => {
  const result = props.value;
  if (result || result === 0) return <div className="Result">Результат є: {result}</div>;
  else return null;
};

export default Result;
