import React, { useEffect, useState } from 'react'
//import { useCustomHooks } from '../../utils/CustomHooks'
import { createProduct,updateProduct} from '../../utils/ApiUtils'
import { useLocation, useNavigate } from 'react-router-dom'
import { error, success } from '../../utils/NotificationsUtils'
import { getCategories } from '../../utils/ApiUtils'


const CreateProduct = () => {

const [categories, setCategories]=useState([])

//const {formInput, onInputChange}=useCustomHooks()

const [userInput,setUserInput]=useState({
        name:'',
        description:'',
        quantity:'',
        price:'',
        
})

const location=useLocation()
//console.log(location.state)
const productData=location.state;


const navigate=useNavigate()

const onInputChange=(e)=>{
setUserInput((prevState)=>({
    ...prevState, [e.target.name]:e.target.value}))
    }


const onProductCreate=async()=>{
    const apiResponse= await createProduct({
...userInput, category:"6478528cea34c969f9cd60ed"})

if(apiResponse.status === 200){
    success(apiResponse.data.message)
    localStorage.setItem('jwt', apiResponse.data.token)
  navigate('/products')
  
  }else{
    error(apiResponse.data.message)
  }
//console.log(apiResponse)
}

const fetchCategory=async()=>{
    const apiResponse=await getCategories()
    console.log(apiResponse.data.categories)
    setCategories(apiResponse.data.products)
    }


useEffect(()=>{
fetchCategory()
},[])


const onProductUpdate= async()=>{
const apiResponse=await updateProduct(productData._id, userInput)
if(apiResponse.status === 200){
  success(apiResponse.data.message)
  localStorage.setItem('jwt', apiResponse.data.token)
navigate('/products')

}else{
  error(apiResponse.data.message)
}

}

useEffect(()=>{
if(productData){
  const curData={...userInput}
  curData.name=productData.name
  curData.description=productData.description
  curData.quantity=productData.quantity
  curData.price=productData.price
  //curData.category=productData.category

  setUserInput(curData)
}
}, [productData])



  return (
    <div>
      <h1 className='fs-3'>{productData ? 'Update Product' : 'CreateProduct'}</h1>
      <div className='d-flex m-auto flex-column w-50'>
        <input
         className='form-control my-2' 
         type='text' name='name'
         value={userInput.name}
         placeholder='name'
         onChange={onInputChange} />

      <input
         className='form-control my-2' 
         type='text' name='description'
         placeholder='description' 
         value={userInput.description}
         onChange={onInputChange} />


<input
         className='form-control my-2' 
         type='text' name='quantity'
         value={userInput.quantity}
         placeholder='quantity'
         onChange={onInputChange} />

<input
         className='form-control my-2' 
         type='text' name='price'
         value={userInput.price}
         placeholder='price'
         onChange={onInputChange} />

  {/* <select name='category' 
  onChange={onInputChange}>
    {categories.map(e=>(
<option value={categories._id}>{e.description}</option>
    ))}</select>        */}
   {/* <div>
<select name='category' onChange={onInputChange}> 
{categories.length> 0 && 
categories.map((category)=>(
  <option value={category._id}></option>
))}
  
 
</select>

   </div> */}
</div>
{productData ? ( 
<button className='btn btn-primary mt-2'
      onClick={onProductUpdate}
      >Update</button> 
      ):(
<button className='btn btn-primary mt-2'
      onClick={onProductCreate}
      >Create</button>
      )}

    </div>
  )
}

export default CreateProduct
