import React, { useEffect, useState } from 'react'
import EachTodo from './EachTodo';

function ApiTodos() {

    const [todos, setTodos] = useState([])

    const [inputText, setInputText] = useState('');

    const [openModal, setOpenModal] = useState(false)

    const [selectedTodo, setSelectedTodo] = useState({})

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

    function handleEdit(ele) {



        setSelectedTodo(ele)

        setOpenModal(true)

    }

    function handleClose() {
        setOpenModal(false)
    }

    function handleTitleUpdate(event) {

        let newTodo = {
            ...selectedTodo, title: event.target.value
        }


        setSelectedTodo(newTodo)




    }

    async function handleSave() {

        let res = await fetch(`http://localhost:5000/api/todo/${selectedTodo._id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(selectedTodo)

        })

        let data = await res.json()

        setOpenModal(false)

        fetchTodos()

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



           

            <EachTodo sadhik={todos} handleDelete={handleDelete} handleEdit={handleEdit}/>


            {
                openModal ?

                    (
                        <div class="modal d-block" tabindex="-1" >
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Update todo </h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <label htmlFor="">title : </label>
                                        <input type="text" value={selectedTodo.title} onChange={(event) => handleTitleUpdate(event)} placeholder='enter the updated todo' />
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => handleClose()}>Close</button>
                                        <button type="button" class="btn btn-primary" onClick={() => handleSave()}>Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    : (<div></div>)

            }



        </div>
    )
}

export default ApiTodos
