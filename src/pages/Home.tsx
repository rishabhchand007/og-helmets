import React from "react";
import Card from "../components/Card"
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="">
              <h1>The Most Exclusive Helmets</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic
                magni quos facilis ducimus necessitatibus eum fugit molestias
                commodi neque?
              </p>
              <button className="btn btn-primary ">Enter Showroom</button>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="./images/home.jpg"
              alt=""
              style={{ maxHeight: "500px" }}
            />
          </div>
        </div>
      </div>

      <div className="container mt-5" id="products">
        <div className="row text-center">
          <h2>Products</h2>
        </div>
        <div className="row ">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </>
  );
};

export default Home;
