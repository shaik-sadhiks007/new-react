import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Products() {

    const [products, setProducts] = useState([])

    // for html we have  link and a tag, but in the js we have to use the usenavigate function
    const navigate = useNavigate() // for to use the navigation we have to initialize it

    async function fetchProducts() {

        let res = await fetch('https://dummyjson.com/products');

        let data = await res.json()

        // console.log(data , 'data')

        setProducts(data.products)

    }

    // fetchProducts()


    function checkUser() {
        let token = localStorage.getItem("token")

        if (!token) {
            navigate('/ ')
        }
    }


    useEffect(
        () => {
            fetchProducts()

            checkUser()
        }, []
    )

    function handleNavigation(id) {
        console.log(id, 'id in the products')

        navigate(`/products/${id}`)


    }


    return (
        <div>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/bb28e964e3ab3f7c.jpg?q=60" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/b480bd26b3ccc4e6.png?q=60" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/6e708c0543d04e27.jpg?q=60" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>



            <div className='row'>

                {
                    products.map((ele, index) => (
                        <div key={index} className='col-12 col-sm-6 col-md-4 col-lg-3'>

                            <div class="card" style={{ width: "18rem" }}

                                onClick={() => handleNavigation(ele.id)}

                            >
                                <img src={ele.images[0]} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{ele.title}</h5>
                                    <p className="card-text">{ele.description}</p>
                                    <a href="#" class="btn btn-warning">Add to Cart</a>
                                </div>
                            </div>

                        </div>
                    ))
                }

            </div>

        </div>

    )
}

export default Products
