import { useState } from "react"


function Todos() {

    // let todos = []

    const [todos, setTodos] = useState(
        [
            {
                userId: 1,
                id: 1,
                title: "testing 1",
                completed: false
            },
            {
                userId: 1,
                id: 2,
                title: "testing 2",
                completed: false
            },

            {
                userId: 2,
                id: 3,
                title: "testing 3",
                completed: false
            },
            {
                userId: 2,
                id: 4,
                title: "testing 4",
                completed: false
            },
            {
                userId: 3,
                id: 5,
                title: "testing 5",
                completed: false
            },
        ])


    return (
        <div>
            <h1>
                Todos application
            </h1>



            {/* when we are using the map we have to use key ---- */}
            
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