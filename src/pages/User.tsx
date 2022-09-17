import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Products from "../Json/Products.json";
import { useParams } from "react-router-dom";
import  PieChart  from '../components/PieChart';
const User = () => {
    let {slug} = useParams()
  let navigate = useNavigate();
  useEffect(() => {
    if (!(sessionStorage.getItem("auth")===slug)) {
      navigate("/login");
    }
  }, []);
  
  return (
    <>
      <div className="container mt-4">
        <div className="row text-center">
          <h3>
            Welcome Back <span style={{ color: "#ee5253" }}>{slug}</span>
          </h3>
        </div>

    <PieChart />
        <div className="row mt-5">
         <div><h4>Product Manager <button className="btn btn-success" style={{float:"right"}} disabled={slug==="editor"?true:false}>Add Product</button></h4></div> 
        </div>
        {Products.map((item) => {
          return (
            <div
              className="d-flex card flex-row align-items-center mt-2"
              style={{ overflow: "hidden" }}
              key={item.id}
            >
              <div className="col-md-2">
                <img
                  src={`./images/${item.image}`}
                  alt=""
                  width={100}
                  style={{ transform: "none" }}
                />
              </div>
              <div className="col-md-3">
                <span className="pm-text">{item.name}</span>
              </div>
              <div className="col-md-5">
                <span className="pm-text">Rs. {item.price}</span>
              </div>
              <div className="col-md-1">
                <button className="btn btn-danger">Edit</button>
              </div>
              <div className="col-md-1">
                <button className="btn btn-danger " disabled={slug==="editor"?true:false} >Delete </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default User;
