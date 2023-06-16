import React from 'react'
import { Routes, Route } from 'react-router-dom';
import SignUp from './Products/Users/SignUp';
import SignIn from './Products/Users/SignIn';
import { ToastContainer } from 'react-toastify';
import ProductList from './Products/Products/ProductList';
import CreateProduct from './Products/Products/CreateProduct';
import ProductDetails from './Products/Products/ProductDetails';
import PrivateRoute from './PrivateRoute';


const App = () => {

  return (
    <div className="text-center">
      <ToastContainer/>
   <Routes>
    <Route exact path='/'  element={<SignUp/>}/>
    <Route exact path='/signin'  element={<SignIn/>}/>
    <Route exact path='/products'  element={
    // <PrivateRoute>
<ProductList/>
    // </PrivateRoute>
    }/>
    <Route exact path='/create-product'  element={
    // <PrivateRoute>
<CreateProduct/>
    // </PrivateRoute>
    }/>
    <Route exact path='/product-details'  element={
   
<ProductDetails/>
   
    }/>
   
   </Routes>
    </div>
  );
}

export default App




// import { Routes, Route} from 'react-router-dom';
// import './App.css';
// import Home from './component/Home';
// import Navbar from './component/Navbar';
// import Products from './component/Products';
// import SignUp from './component/Products/Users/SignUp';

// function App() {
//   return (
//     <div className="text-center">
//     <Routes>
//       <Route path='/' element={<SignUp/>}/>
//     </Routes>
//     </div>
//   );
// }

// export default App;
