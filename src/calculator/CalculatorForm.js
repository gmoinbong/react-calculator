import React, { useState } from 'react';
import NumberInput from './NumberInput';
import Select from 'react-select';
import Result from './Result';

const CalculatorForm = (props) => {
  const [selectedOptionState, setSelectedOptionState] = useState({
    selectedOption: {
      value: '--Виберіть операцію--',
      label: '--Виберіть операцію--',
    },
  });
  const [resultState, setResultState] = useState(null);

  const options = [
    { value: 'ADD', label: 'Додавання' },
    { value: 'SUBTRACT', label: 'Віднімання' },
    { value: 'MULTIPLY', label: 'Множення' },
    { value: 'DIVIDE', label: 'Поділ' },
  ];

  let calculate = () => {
    const { x, y } = props;
    switch (selectedOptionState.selectedOptionState.value) {
      case 'ADD':
        return parseFloat(x) + parseFloat(y);
      case 'SUBTRACT':
        return parseFloat(x) - parseFloat(y);
      case 'MULTIPLY':
        return parseFloat(x) * parseFloat(y);
      case 'DIVIDE':
        return parseFloat(x) / parseFloat(y);
      default:
        return null; // Sem by to nikdy nemělo dojít.
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = calculate();
    console.log(result);
    setResultState(result);
  };
  const handleChange = (selectedOptionState) => {
    setSelectedOptionState({ selectedOptionState });
  };
  return (
    <div>
      <form className="CalculatorForm" onSubmit={handleSubmit}>
        <NumberInput OnChange={props.xOnChange} name="x" label="Перше число:" value={props.x} />
        <NumberInput OnChange={props.yOnChange} name="y" label="Друге число:" value={props.y} />
        <Select
          onChange={handleChange}
          value={selectedOptionState.selectedOption}
          options={options}
        />
        <input value="Порахуй" type="submit" />
      </form>
      <Result value={resultState} />
    </div>
  );
};

export default CalculatorForm;
