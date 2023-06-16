import React, { useState } from 'react'
//import { useCustomHooks } from '../../utils/CustomHooks'
import { signIn } from '../../utils/ApiUtils'
import { error, success } from '../../utils/NotificationsUtils'
import { useNavigate } from 'react-router-dom'


const SignIn = () => {
const[userInput, setUserInput]=useState({
    email:'',
     password:''
})
//const {formInput, onInputChange}=useCustomHooks()


const navigate=useNavigate()

const handleOnChange=(e)=>{
    setUserInput((prevState)=>({
        ...prevState, [e.target.name]:e.target.value}))
}

const onSignup=async ()=>{
  const apiResponse= await signIn(userInput)
  console.log(apiResponse)
  if(apiResponse.status === 200){
    success(apiResponse.data.message)
    localStorage.setItem('jwt', apiResponse.data.token)
  navigate('/products')
  
  }else{
    error(apiResponse.data.message)
  }
 }


  return (
    <div>
      <h1>Sign In</h1>
      <div className='d-flex m-auto flex-column w-50'>
        <input 
        className='form-control'
        type='text' name='email'
        placeholder='email'
        value={userInput.email}
        onChange={handleOnChange}
        />

<input type='password' name='password'
placeholder='password'
        value={userInput.password}
        onChange={handleOnChange}
        />
<br/>
<button 
className='btn btn-primary'
onClick={onSignup}
>Sign In</button>
        </div>
    </div>
  )
}

export default SignIn
