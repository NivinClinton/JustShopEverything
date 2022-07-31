import React, { useEffect, useState } from "react";
import "./Register.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [lowerCaseValidation, setLowerCaseValidation] = useState("invalid");
  const [upperCaseValidation, setUpperCaseValidation] = useState("invalid");
  const [numberValidation, setNumberValidation] = useState("invalid");
  const [lengthValidation, setLengthValidation] = useState("invalid");
  const [showPasswordValidation, setShowPasswordValidation] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
 const navigate =useNavigate();
  

  const sendRequest = async () => {  
    const res = await axios
      .post("http://localhost:5000/api/user/signup", {
        userName:userName,
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
   
    sendRequest().then(() => navigate("/login"))
    
  };
  useEffect(() => {
    if (password !== confirmPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    //  if(password && password.length>0 && password !== match()
  }, [password, confirmPassword]);

  const handlePasswordOnChange = (e) => {
    setPassword(e.target.value);
    const lowerCaseLetters = /[a-z]/g;
    if (e.target.value.match(lowerCaseLetters)) {
      setLowerCaseValidation("valid");
    } else {
      setLowerCaseValidation("invalid");
    }

    // Validate capital letters
    const upperCaseLetters = /[A-Z]/g;
    if (e.target.value.match(upperCaseLetters)) {
      setUpperCaseValidation("valid");
    } else {
      setUpperCaseValidation("invalid");
    }

    // Validate numbers
    const numbers = /[0-9]/g;
    if (e.target.value.match(numbers)) {
      setNumberValidation("valid");
    } else {
      setNumberValidation("invalid");
    }

    // Validate length
    if (e.target.value.length >= 8) {
      setLengthValidation("valid");
    } else {
      setLengthValidation("invalid");
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">Register</h1>
      <div className="row justify-content-center">
        <div className="col-md-6 col-9">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label for="" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id=""
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Mobile Number
              </label>
              <input
                type="number"
                className="form-control"
                id=""
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={handlePasswordOnChange}
                onFocus={(e) => setShowPasswordValidation(true)}
                onBlur={(e) => setShowPasswordValidation(false)}
              />
            </div>
            {showPasswordValidation ? (
              <div>
                <h6
                  style={{
                    color: "red",
                    marginTop: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Password must contain the following:
                </h6>
                {lowerCaseValidation === "valid" ? (
                  <p style={{ color: "green" }}>
                    A <b>lowercase</b> letter
                  </p>
                ) : (
                  <p style={{ color: "red" }}>
                    A <b>lowercase</b> letter
                  </p>
                )}
                {upperCaseValidation === "valid" ? (
                  <p style={{ color: "green" }}>
                    A <b>capital (uppercase)</b> letter
                  </p>
                ) : (
                  <p id="capital" style={{ color: "red" }}>
                    A <b>capital (uppercase)</b> letter
                  </p>
                )}
                {numberValidation === "valid" ? (
                  <p id="number" style={{ color: "green" }}>
                    A <b>number</b>
                  </p>
                ) : (
                  <p id="number" style={{ color: "red" }}>
                    A <b>number</b>
                  </p>
                )}
                {lengthValidation === "valid" ? (
                  <p style={{ color: "green" }}>
                    Minimum <b>8 characters</b>
                  </p>
                ) : (
                  <p style={{ color: "red" }}>
                    Minimum <b>8 characters</b>
                  </p>
                )}
              </div>
            ) : (
              ""
            )}
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id=""
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {passwordError && (
              <div className="error invalid-feedback text-error">
                Password and Confirm password mismatch
              </div>
            )}
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

export default Register;
