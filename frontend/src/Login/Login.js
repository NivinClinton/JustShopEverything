import React, { useState } from "react";
import "./Login.css";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()

  const [password, setPassword] =useState('');
  const [email, setEmail] =useState('')

  const sendRequest = async () => {  
    const res = await axios
      .post("http://localhost:5000/api/user/login", {
        
        email : email,
        password :password
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    sendRequest().then((data) => localStorage.setItem("userId", data.user._id)).then(() => navigate("/"))
    
  };

  return (
    <div className="container">
      <h1 className="text-center">Login</h1>
      <div className="row justify-content-center">
        <div className="col-md-6 col-10 my-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
               First Name
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
              />
              
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
               Last Name
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
