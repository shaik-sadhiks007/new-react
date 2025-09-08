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

            <header>

                <Link to="/">
                    <button>

                        home


                    </button>
                </Link>

                <Link to="/todos">
                    <button>

                        todos


                    </button>
                </Link>
                <Link to="/counter">
                    <button>

                        counter


                    </button>
                </Link>
            </header>
            <h2>testing {name} </h2>

            <h2>testing {newName}</h2>

            <button onClick={() => handleClick()}>click here</button>



        </div>
    )
}

export default Welcome