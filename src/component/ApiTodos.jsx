import React, { useEffect, useState } from 'react'

function ApiTodos() {

    const [todos, setTodos] = useState([])

    const [inputText, setInputText] = useState('');

    async function fetchTodos() {

        // get method -- which read the data
        const res = await fetch("http://localhost:5000/api/todo");

        // console.log(res,'res')

        const data = await res.json()
        setTodos(data)

    }

    function handleInput(event) {
        setInputText(event.target.value)
    }


    useEffect(

        () => {
            fetchTodos()
        }, []

    )

    async function handleAdd() {

        const res = await fetch("http://localhost:5000/api/todo",
            {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },

                body: JSON.stringify({
                    title: inputText,
                    completed: false
                })

            });


        let data = await res.json()

        fetchTodos()
        console.log(data, 'data in the post')



    }

    async function handleDelete(id) {

        const res = await fetch(`http://localhost:5000/api/todo/${id}`,
            {
                method: "DELETE"
            }
        )

        let data = await res.json()

        fetchTodos()

        console.log(data, "in the delete")



    }



    return (
        <div>
            <h1 className='text-center'>hi api toods</h1>

            <div className='d-flex justify-content-center'>
                <input type="text" className='text-center' placeholder="enter todo"

                    onChange={(event) => handleInput(event)}

                />
                <button onClick={() => handleAdd()}>Add</button>
            </div>



            <div className='d-flex flex-column justify-content-center align-items-center'>
                {
                    todos.map((ele, index) => (
                        <div key={index} className="my-3">
                            <span>{ele.title}</span>
                            <button>edit</button>
                            <button onClick={() => handleDelete(ele._id)}>delete</button>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default ApiTodos
