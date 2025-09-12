import React, { useEffect, useState } from 'react'

function ApiTodos() {

    const [todos, setTodos] = useState([])

    async function fetchTodos() {

        const res = await fetch("http://localhost:5000/api/todo");

        // console.log(res,'res')

        const data = await res.json()
        setTodos(data.slice(0, 5))

    }

    useEffect(

        () => {
            fetchTodos()
        }, []

    )



    return (
        <div>
            <h1>hi api toods</h1>

            <input type="text" placeholder="enter todo" />

            {
                todos.map((ele, index) => (
                    <div key={index} className="my-3">
                        <span>{ele.title}</span>
                        <button>edit</button>
                        <button onClick={() => handleDelete(index)}>delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default ApiTodos
