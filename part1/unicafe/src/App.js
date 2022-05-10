import { useState } from 'react';
import Button from './components/Button';
import Statistics from './components/Statistics';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button label="good" state={good} setState={setGood} />
      <Button label="neutral" state={neutral} setState={setNeutral} />
      <Button label="bad" state={bad} setState={setBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
