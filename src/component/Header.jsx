import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

function Header() {


    const navigate = useNavigate()
    function handleLogout() {

        localStorage.removeItem('token')

        navigate('/')
    }


    const token = localStorage.getItem('token')




    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" width="160" height="40" title="Flipkart" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-light" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-light" aria-current="page" to="/todos">Todos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-light" aria-current="page" to="/counter">Counter</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-light" aria-current="page" to="/products">products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-light" aria-current="page" to="/apitodos">Api Todos</Link>
                        </li>

                        {

                            token  ? (
                                <li className="nav-item">
                                    <button className="btn btn-danger" onClick={() => handleLogout()}>Logout</button>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <Link className="nav-link active text-light" aria-current="page" to="/register">Register</Link>
                                </li>
                            )
                        }




                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Header