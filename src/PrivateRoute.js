import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({Children}) => {
    const token=localStorage.getItem('jwt')
    if(!token){
        return <Navigate to={'/signin'}/>
    }
  return Children
}

export default PrivateRoute
