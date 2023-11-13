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

  const isValid = userInput.duration > 0;
  
  function handleChange(newValue, inputId)
  {
      setInput((prevInputs) =>{
          return {
              ...prevInputs,
              [inputId]: +newValue
          };
      });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onUpdatdeChange = {handleChange}/>
      {isValid ? <Results input={userInput} /> : <p className='center'>Invalid Data duration is less than 1</p>}
    </>
  );
}

export default App;
