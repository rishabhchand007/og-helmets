import React, {useState, useContext} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Users from "../Json/Users.json";
import { useNavigate } from "react-router-dom";
import { OgContext } from "../contexts/OgContext";
const Login = () => {
  const {auth,setAuth} = useContext(OgContext)
  let navigate = useNavigate();
  const [creds, setCreds] = useState({user:"", password:""})
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setCreds({...creds,[e.target.name]:e.target.value})
  }
  //handling login click
  const loginClick = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    Users.map(async(user)=>{
      if(user.name===creds.user){
        if(user.password===creds.password){
          await setAuth(true);
          console.log(auth)
          return navigate("/")
        }
        else{
          console.log("error")
        }
      }
    })
    
  }

  return (
    <>
      <div className="container mt-5 ">
        <div className="row justify-content-center">
          <div className="col-md-4 login-container">
            <Form onSubmit={loginClick} method="POST">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User</Form.Label>
                <Form.Control type="string" placeholder="Username" name="user" onChange={handleChange} required/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"name="password" onChange={handleChange} required/>
              </Form.Group>
              <div className="text-center">
              <Button variant="danger" type="submit" style={{backgroundColor:"#ee5253"}} >
                Login
              </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
