import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {

    // use params will get the variables from the url

    // {
    //     id : 4
    // }

    const [product,setProduct] = useState({})

    const {id} = useParams()

    async function fetchProduct() {

        let res = await fetch(`https://dummyjson.com/products/${id}`)

        let data = await res.json()

        // console.log(data,'data in productde')

        setProduct(data)

    }

    useEffect(() => {
        fetchProduct()
    },[])



    console.log(id,'id')

    return (
        <div>
            <h1>product details page</h1>

            <h1>{product.title}</h1>
            <img src={product?.images?.[0]} alt="" style={{width : '300px', height : '300px'}}/>

            <p>{product?.description}</p>
        </div>
    )
}

export default ProductDetail
