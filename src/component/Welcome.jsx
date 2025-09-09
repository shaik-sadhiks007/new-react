import { useState } from "react";
import { Link } from "react-router-dom";

function Welcome() {

    let name = 'sadhik';

    // syntax for the creating the variables in the react js

    // const [variablename , updatefunctionname] = useState(initial value);

    const [newName, setNewName] = useState('bhanu')

    // let newName = 'bhanu'

    // name = 'hemanth' ----  setNewName('hemanth')


    function handleClick() {
        console.log('button clicked');

        name = 'hemanth';

        setNewName('hemanth')

        console.log(name, 'name in the function')

    }
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" width="160" height="40" title="Flipkart" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/todos">Todos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/counter">Counter</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/products">products</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            <h2>testing {name} </h2>

            <h2>testing {newName}</h2>

            <button onClick={() => handleClick()}>click here</button>



        </div>
    )
}

export default Welcome