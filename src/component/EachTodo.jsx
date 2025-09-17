


function EachTodo({sadhik,handleDelete,handleEdit}) {

    console.log(sadhik,'sadhik todoso')



    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            {
                sadhik.map((ele, index) => (
                    <div key={index} className="my-3">
                        <span>{ele.title}</span>
                        <button onClick={() => handleEdit(ele)}>edit</button>
                        <button onClick={() => handleDelete(ele._id)}>delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default EachTodo