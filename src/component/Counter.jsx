import { useState } from "react"

function Counter() {

    const [counter, setCounter] = useState(0);

    function handleIncrement() {

        setCounter(counter + 1)

    }

    function handleDecrement() {

        setCounter(counter - 1)

    }


    function handleReset() {

        setCounter(0)

    }


    return (

        <div>

            <h1>Counter : {counter}</h1>

            <button onClick={() => handleIncrement()}>increment</button>

            <button onClick={() => handleDecrement()}>decrement</button>

            <button onClick={() => handleReset()}>Reset</button>



        </div>

    )
}

export default Counter