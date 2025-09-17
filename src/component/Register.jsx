
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {

    const [username, setUsername] = useState('')

    const [password, setPassword] = useState('')

    const [errorMsg, setErrorMsg] = useState('')

    function handleUsername(event) {
        setUsername(event.target.value)

        console.log(event.target.value, 'value')


    }

    function handlePassword(event) {

        setPassword(event.target.value)

    }

    async function handleSubmit() {

        let res = await fetch("http://localhost:5000/api/auth/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(
                    {
                        username: username,
                        password: password
                    }
                )

            })

        let data = await res.json()

        if (res.status == 200) {
            setErrorMsg("you successfully registered")
        } else {
            setErrorMsg("user registered already try to login")
        }

        console.log(data, 'data')

    }





    return (
        <div className='d-flex flex-column align-items-center gap-2'>
            <h1>Register</h1>


            {
                errorMsg.length > 0 ? (
                    <div>{errorMsg}</div>

                ) : (
                    <div> </div>

                )
            }
            <input type="text"
                placeholder='enter the username'
                value={username}
                onChange={(event) => handleUsername(event)}
            />
            <input type="text"
                placeholder='enter the password'
                value={password}
                onChange={(event) => handlePassword(event)}
            />
            <button onClick={() => handleSubmit()}>submit</button>

            <Link to='/'>
                login
            </Link>
        </div>
    )
}

export default Register
