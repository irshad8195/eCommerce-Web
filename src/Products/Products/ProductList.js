import React, { useEffect, useState } from 'react'
import { getProducts } from '../../utils/ApiUtils'
import '../../App.css'
import { useNavigate } from 'react-router-dom'

const ProductList = () => {
const [products, setProducts]=useState([])
 const navigate=useNavigate()

const fetchProducts=async()=>{
const apiResponse=await getProducts()
console.log(apiResponse)
setProducts(apiResponse.data.products)
}

useEffect(()=>{
    fetchProducts()
},[])

const onRedirectDetails=(e)=>{
navigate('/product-details', {
  state:e
})
}


const onSignOut=()=>{
  navigate('/signin')
}

  return (
    <div>
      ProductList
      <button 
className='create-btn btn btn-secondary mt-2'

      onClick={()=>navigate('/create-product')}
      >Create</button>

<button 
className='signout-btn btn btn-danger mt-2'

      onClick={()=>onSignOut()}
      >Sign Out</button>
      <div 
className='d-flex justify-content-around mt-5 flex-wrap'>
      {products.length> 0 && products.map((e)=>(
<div className="card my-3" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">{e.name}</h5>
    <p className="card-text">{e.description}</p>
    <p className="card-text fs-5 text-success">{e.price}</p>
  <button className='btn btn-info mt-3 mb-3'
  onClick={()=> onRedirectDetails(e)}
  >View Product</button>
  </div>
</div>

))}
    </div>
    </div>
    
  )
}

export default ProductList
