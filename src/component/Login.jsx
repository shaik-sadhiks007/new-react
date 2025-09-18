import {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
 

function Login() {


  const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')

  const [errorMsg, setErrorMsg] = useState('')

  const navigate = useNavigate()

  function handleUsername(event) {
    setUsername(event.target.value)



  }


  let token = localStorage.getItem("token")


  useEffect(() => {

    if(token) {
      navigate('/products')
    }

  },[])

  function handlePassword(event) {

    setPassword(event.target.value)

  }

  async function handleSubmit() {

    let res = await fetch("http://localhost:5000/api/auth/login",
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
      localStorage.setItem("token",data.token)
      setErrorMsg("you successfully logged in")
      navigate('/products')
    } else {
      setErrorMsg("wrong credentials or try to register")
    }

    console.log(data, 'data')

  }




  return (
    <div className='d-flex flex-column align-items-center gap-2'>
      <h1>Login</h1>


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

      <Link to='/register'>
        register
      </Link>
    </div>
  )
}

export default Login
