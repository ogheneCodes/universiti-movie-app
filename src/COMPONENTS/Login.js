import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      username: email,
      password,
    };


    axios
      .post(
        "https://qag4ih5s2h.execute-api.us-east-1.amazonaws.com/dev/login",
        data
      )
      .then((res) => {
        setLoading(false);
        localStorage.setItem("token", "qag4ih5s2h.execute-api.us-east-1");
        navigate("/Main");
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
            <h2>Login Form</h2>
          </div>
          <div className="row clearfix">
            <div className="">
              <form onSubmit={handleSubmit}>
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

                <input
                  className="button"
                  type="submit"
                  value={loading ? "Loading..." : "Login"}
                />
                <center>
                  Not registered? <Link to="/Registration">signup</Link>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
