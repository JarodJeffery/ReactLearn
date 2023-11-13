import Inputs from './inputs.jsx';

export default function UserInput({userInput, onUpdatdeChange}){
    
    return(
        <section id='user-input'>
            <div className="input-group">
                <Inputs name="Initial Investment" initialValue={userInput.initialInvestment} inputId='initialInvestment' onHandleChange={onUpdatdeChange}/>
                <Inputs name="Annual Investment" initialValue={userInput.annualInvestment} inputId='annualInvestment' onHandleChange={onUpdatdeChange}/>
            </div>
            <div className='input-group'>
                <Inputs name="Expected Return" initialValue={userInput.expectedReturn} inputId='expectedReturn' onHandleChange={onUpdatdeChange}/>
                <Inputs name="Duration" initialValue={userInput.duration} inputId='duration' onHandleChange={onUpdatdeChange}/>
            </div>
        </section>
    );
}