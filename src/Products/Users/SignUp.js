import React, { useState } from 'react'
//import  { useCustomHooks } from '../../utils/CustomHooks'
import { signUp } from '../../utils/ApiUtils'
import { Link } from 'react-router-dom'
import { error, success } from '../../utils/NotificationsUtils'



const SignUp = () => {
  //const {formInput, onInputChange}=useCustomHooks()

  const[userInput, setUserInput]=useState({
  firstname:'',
  lastname:'',
  email:'',
  password:''

  })
  const handleOnChange=(e)=>{
    setUserInput((prevState)=>({...prevState,[e.target.name]:e.target.value }))
    // setFormInput({
    //   ...formInput, [e.target.name]: e.target.value
  
  }
  
const onSignup=async ()=>{
 const apiResponse= await signUp(userInput)
 console.log(apiResponse)
 if(apiResponse === 200){
  success(apiResponse.data.message)
  localStorage.setItem("jwt", apiResponse.data.token)

 }else{
  error(apiResponse.data.message)
 }
}
//console.log(userInput)



  return (
    <div>
     <h1> Sign Up</h1>
      <div className='d-flex m-auto flex-column w-50'>
        <input type='text' name='firstname'
        placeholder='firstname'
        value={userInput.firstname}
        onChange={handleOnChange}
        />
    <input type='text' name='lastname'
       placeholder='lastname'
        value={userInput.lastname}
        onChange={handleOnChange}
        />    

        <input type='text' name='email'
        placeholder='email'
        value={userInput.email}
        onChange={handleOnChange}
        />  

<input type='text' name='password'
placeholder='password'
        value={userInput.password}
        onChange={handleOnChange}
        />

      </div>
      <br/>
      <button className='btn btn-primary'
      onClick={onSignup}>Sign Up</button>
    
    <div>
      Already Signup? <Link to='/signin'>SignIn</Link> Here!
    </div>
    </div>
    


  )
}

export default SignUp
