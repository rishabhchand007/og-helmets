import React from "react";
import Products from "../Json/Products.json";
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="home-landing">
              <h1 style={{ color: "#232b2b" }}>The Most Exclusive Helmets</h1>
              <h2 style={{ color: "#ee5253" }}>Now in Nepal</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic
                magni quos facilis ducimus necessitatibus eum fugit molestias
                commodi neque?
              </p>
              <a
                href="#products"
                className="btn btn-danger "
                style={{ backgroundColor: "#ee5253" }}
              >
                Enter Showroom
              </a>
            </div>
          </div>
          <div className="col-md-6 text-center home-image">
            <img
              src="./images/home.jpg"
              alt=""
              style={{ maxHeight: "500px" }}
            />
          </div>
        </div>
      </div>
      {/*-----------------------------------Products---------------------------------- */}
      <div className="container mt-5 product-container" id="products">
        <div className="row text-center ">
          <h2>Products</h2>
        </div>
        <div className="row mt-3 justify-content-center">
          {Products.map((item) => {
            return (
              <div
                className="card m-2"
                style={{ width: "18rem" }}
                key={item.id}
              >
                <div className="img-container">
                <img
                  className="card-img-top"
                  src={`./images/${item.image}`}
                  alt="Card"
                />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <div className="card-text">
                    <h5 style={{ color: "#696969" }}>Rs {item.price}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
