import React, { useEffect, useState } from 'react'

const Products = () => {

  const [user, setUser]=useState([])


  const fetchData=()=>{
    return fetch("https://fakestoreapi.com/products")
  .then((response)=> response.json())
  .then((data)=>setUser(data))
  }

  useEffect (()=>{
    fetchData()
  },[])
  return (
    <div>
      <main>
        <h1> Use List</h1>
        <ul>
          {user.map((e)=>(
//             <div className="col-md-3">
//               <div class="card">
//               <img src={e.image}  
//                 class="card-img-top"
//                  alt={e.title}/>
//                  <div class="card-body">             
//  <h5 className="card-title">{e.title}</h5>
//  <p className="card-text"> ${e.price}
//                  </p>
//  </div>
//   </div>
//   </div>
<p key={e.id}>{e.image}</p>

            
          ))}
        </ul>
      </main>
    </div>
  )
}

export default Products





// import React, {useEffect, useState } from "react";

// const Products = () => {
//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState(data);
//   const [loading, setLoading] = useState(false);
//   let componentMounted = true;

//   useEffect(() => {
//     const getProducts = async () => {
//       setLoading(true);
//       const response = await fetch("https://fakestoreapi.com/products");

//       //const data=await response.json()
//       if (componentMounted) {
//         setData(await response.clone.json());
//         setFilter(await response.json());
//         setLoading(false);
//         console.log(filter);
//       }
//       return () => {
//         componentMounted = false;
//       };
//       // setDetails(data.hits)
//       // console.log(data.hits)
//     };
//     getProducts();
//   }, []);

//   const Loading = () => {
//     return <>Loading...</>;
//   };

//   const ShowProducts = () => {
//     return (
//       <>
//         <div className="buttons d-flex justify-content-center mb-5 pb-5">
//           <button className="btn btn-outline-dark me-2">All</button>
//           <button className="btn btn-outline-dark me-2">ECU</button>
//           <button className="btn btn-outline-dark me-2">MCU</button>
//           <button className="btn btn-outline-dark me-2">Electronics</button>
//         </div>
//         {filter.map((product)=>{
//           return (
//             <>
//             <div className="col-md-3">
//               <div class="card">
//                 <img src={product.image}  
//                 class="card-img-top"
//                  alt={product.title}/>
//               <div class="card-body">
//                 <h5 className="card-title">{product.title}</h5>
//                 <p className="card-text">
//                   ${product.price}
//                 </p>
//               </div>


//               </div>
//             </div>
//             </>
//           )
//         })}
//       </>
//     );
//   };
//   return (
//     <div className="conatiner my-5 py-5">
//       <div className="row">
//         <div className="col-12 mb-5">
//           <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
//           <hr />
//         </div>
//       </div>
//       <div className="row justify-content-center">
//         {loading ? <ShowProducts />: <Loading/>}
//       </div>
//     </div>
//   );
// };

// export default Products;
