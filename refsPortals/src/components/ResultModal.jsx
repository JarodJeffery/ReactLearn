import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from 'react-dom';

const ResultModal =  forwardRef( function ResultModal({remaningTime, targetTime, onReset}, ref){
    
    const dialog = useRef();
    const userLost = remaningTime <= 0;
    const formattedTime = (remaningTime/1000).toFixed(2);
    const score = Math.round((1- remaningTime/(targetTime*1000)) * 100);

    useImperativeHandle(ref , () =>{
        return {
            open(){
                dialog.current.showModal();
            }
        };
    });

    return createPortal(
        <dialog className="result-modal" ref ={dialog} onClose={onReset}>
            {userLost && <h2>You Lost</h2>}
            {!userLost && <h2>Your score {score}</h2>}
            <p>The target time was <strong>{targetTime} second{targetTime > 1 ? 's':''},</strong></p>
            <p>you stopped the timer with <strong>{formattedTime} seconds left.</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById("modal")
    );
});

export default ResultModal;