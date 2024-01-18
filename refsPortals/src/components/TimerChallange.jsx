import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallange({ title, targetTime }){
    const timer = useRef();
    const dialog = useRef();

    const [remainingTime, setTimeRemaning] = useState( targetTime* 1000);
    const timerIsActive = remainingTime > 0 && remainingTime < targetTime * 1000;

    if(remainingTime <=0){
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleStart(){
        timer.current = setInterval(() =>{
            setTimeRemaning(prev => prev - 10);
        }, 10);
    }

    function handleReset(){
        setTimeRemaning(targetTime * 1000);
    }

    function handleStop(){
        clearInterval(timer.current);
        dialog.current.open();
    }

    return (
        <>
            <ResultModal targetTime={targetTime} remaningTime={remainingTime} ref={dialog} onReset={handleReset}/>
            <section className="challenge">
                <h2> {title} </h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's':''}
                </p>
                <button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? 'Stop' : 'Start' } Challange</button>
                <p className={timerIsActive ? 'active' : ""}> 
                    {timerIsActive ? 'Time is running' : 'Timer inactive'} 
                </p>
            </section>
        </>
        
    );

}