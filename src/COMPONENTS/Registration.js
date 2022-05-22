import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/Registration.css";
function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [address, setAddress] = useState("");
  const [usertype, setUserType] = useState("");
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
 
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const info = e.target.value;
  //   navigate('/Login');
  //   console.log("user registered with: " + info + "successful");

  //   axios
  //     .post(
  //       "https://qag4ih5s2h.execute-api.us-east-1.amazonaws.com/dev/user/create-user",
  //       data
  //     )
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
    
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
      mobilenumber: mobilenumber,
      address: address,
      usertype: usertype,
    };
  
   
    axios
      .post("https://qag4ih5s2h.execute-api.us-east-1.amazonaws.com/dev/user/create-user", data)
      .then((res) => {
        setLoading(false);
       console.log(res.data)
        navigate('/Login');

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setMobilenumber("");
        setAddress("");
        setUserType("");

      })
     .catch((err) => {
      setLoading(false);
      console.log(err);
      });
      
     
  };

  return (
    <>
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Registration Form</h2>
          </div>
          <div className="row clearfix">
            <div className="">
              <form onSubmit={handleSubmit}>
                <div className="row clearfix">
                  <div className="col_half">
                    <div className="input_field">
                      {" "}
                      <span>
                        <i aria-hidden="true" className="fa fa-user"></i>
                      </span>
                      <input 
                      type="text" 
                      name="name" 
                      placeholder="First Name" 
                      onChange={(e) => setFirstName(e.target.value)}
                     
                      required
                      value={firstName}/>
                    </div>
                  </div>
                  <div className="col_half">
                    <div className="input_field">
                      {" "}
                      <span>
                        <i aria-hidden="true" className="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                        
                        required
                        value={lastName}
                      />
                    </div>
                  </div>
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                   
                    required
                    value={email}
                  />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                 
                    required
                    value={password}
                  />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-house"></i>
                  </span>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    onChange={(e) => setAddress(e.target.value)}
                   
                    required
                    value={address}
                  />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-phone"></i>
                  </span>
                  <input
                    type="text"
                    name="mobilenumber"
                    placeholder="Mobile Number"
                    onChange={(e) => setMobilenumber(e.target.value)}
                    onSubmit={(e) => setMobilenumber(" ")}
                    required
                    value={mobilenumber}
                  />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-user"></i>
                  </span>
                  <input
                    type="text"
                    name="usertype"
                    placeholder="User Type"
                    onChange={(e) => setUserType(e.target.value)}
                    onSubmit={(e) => setUserType(" ")}
                    required
                    value={usertype}
                  />
                </div>
                <input className="button" type="submit" value={loading ? "Registering..." : "Register"} />
                <center>
                  Registered Already? <Link to='/Login'>Login</Link>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
