import { useState, useEffect } from "react"



function Todos() {

    // let todos = []

    const [todos, setTodos] = useState([])

    const [counter, setCounter] = useState(0);

    function handleIncrement() {
        setCounter(counter + 1)
    }

    async function fetchTodos() {

        const res = await fetch("https://jsonplaceholder.typicode.com/todos");

        // console.log(res,'res')

        const data = await res.json()
        setTodos(data.slice(0, 5))

    }

    console.log(todos, 'todos')

    // instead of calling the async function directly use the useeffect funtion

    // it will call the function only one time instead of multiple times
    // fetchTodos()

    useEffect(

        () => {
            fetchTodos()
        }, []

    )

    return (
        <div>
            <h1 className="todostitle text-danger">
                Todos application
            </h1>

            {/* when we are using the map we have to use key ---- */}

            <h1>Counter : {counter}</h1>

            <button onClick={() => handleIncrement()}>increment</button>

            {
                todos.map((ele, index) => (
                    <div key={index}>
                        {ele.title}
                    </div>
                ))
            }


        </div>
    )
}

export default Todos