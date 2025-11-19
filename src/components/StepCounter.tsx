import { useState } from "react";

export default function StepCounter() {
    const [count, changeCount] = useState(0);
    const [step, changeStep] = useState(0);
    
    const makeClick = () => {
        changeCount(count => count + step);
    };

    const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeStep(Number(event.target.value));
    };

    return (
        <>
            <p>Count: { count }</p>
            <input type="number" value={step} onChange={changeInput}/>
            <button onClick={makeClick}>Increase</button>
            <br></br>
            <br></br>
        </>
    );
}