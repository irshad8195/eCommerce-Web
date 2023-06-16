import React from "react";

const Home = () => {
  return (
    <div className="carda">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/img.jpeg"
          className="card-img"
          alt="background image"
          height="500px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-4 fw-bolder mb-0">
              NEW SEASONS ARRIVALS
            </h5>
            <p className="card-text fs-4">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default Home;
