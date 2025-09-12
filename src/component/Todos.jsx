import { useState, useEffect } from "react"



function Todos() {

    // let todos = []

    const [todos, setTodos] = useState([

        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
        }

    ])

    const [inputData,setInputData] = useState('')

    async function fetchTodos() {

        const res = await fetch("https://jsonplaceholder.typicode.com/todos");

        // console.log(res,'res')

        const data = await res.json()
        setTodos(data.slice(0, 5))

    }

    // console.log(todos, 'todos')

    // instead of calling the async function directly use the useeffect funtion

    // it will call the function only one time instead of multiple times
    // fetchTodos()

    // useEffect(

    //     () => {
    //         fetchTodos()
    //     }, []

    // )

    function handleInput(event) {
        setInputData(event.target.value)
    }


    function handleAdd() {

       let newData = [...todos, {title : inputData,completed:false}]

       setTodos(newData)

       setInputData('')

    }


    function handleDelete(pos) {
        console.log(pos,'position')

        let filteredData = todos.filter((ele,index) => pos !== index)

        // console.log(filteredData)

        setTodos(filteredData)
    }

    return (
        <div>
            <h1 className="todostitle text-danger">
                Todos application
            </h1>

            {/* when we are using the map we have to use key ---- */}

            <input type="text" placeholder="enter todo" 

            value={inputData}
            onChange={(event) => handleInput(event)}/>

            <button className="btn btn-primary" onClick={() => handleAdd()}>add</button>
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

export default Todos