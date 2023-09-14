import { useState } from 'react'

const Test = () => {
    const [counter, setCounter] = useState(5);

    console.log(`The current state of our counter is: 
    [${counter}]`)

    const plusThree = () => {
        setCounter(counter + 3);
        console.log("Clicked!");
    }

    return (
        <div>
            <div>{counter}</div>
            <button onClick={plusThree}>Add Three!</button>
        </div>
    )
}

export default Test
