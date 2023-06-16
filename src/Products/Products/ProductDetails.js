import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { deleteProduct } from '../../utils/ApiUtils'
import { error, success } from '../../utils/NotificationsUtils'

const ProductDetails = () => {
  
const location=useLocation()
console.log(location)
const navigate=useNavigate()

const [productDetails, setProductDetails]=useState(()=> location.state)


const onDeleteProduct=async()=>{
const apiResponse=await deleteProduct(productDetails._id)
if(apiResponse.status ===200){
  success(apiResponse.data.message)
  navigate('/products')
}else{
  error(apiResponse.data.message)
}
}

const onRedirectUpdate=()=>{
navigate('/create-product',{
  state:productDetails
})
}

  return (
    <div>
     <h1>ProductDetails</h1> 

<div className='d-flex justify-content-center mt-4'>
     <div className="card my-3" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">{productDetails.name}</h5>
    <p className="card-text">{productDetails.description}</p>
    <p className="card-text fs-5 text-success">{productDetails.price}</p>
    
    {/* <p className='card-text fs-4 text-info'>
      {productDetails.category.name}
    </p> */}
    <button className='btn btn-outline-info my-3'>Add to Cart</button>
    </div>
    </div>
    </div>
    <div className='btn'>
<button className='btn btn-outline-warning me-4 btn-lg'
onClick={onRedirectUpdate}
>Update</button>
<button className='btn btn-outline-danger btn-lg'
onClick={onDeleteProduct}
>Delete</button>
    </div>

    </div>
  )
}

export default ProductDetails
