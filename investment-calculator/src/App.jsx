import Header from './Components/Header/header.jsx';
import UserInput from './Components/User-Input/User-Input.jsx';
import { useState } from 'react';
import './index.css';
import Results from './Components/results.jsx';

function App() {
  const [userInput, setInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange(newValue, inputId)
  {
      setInput((prevInputs) =>{
          return {
              ...prevInputs,
              [inputId]: newValue
          };
      });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onUpdatdeChange = {handleChange}/>
      <Results input={userInput} />
    </>
  );
}

export default App;
