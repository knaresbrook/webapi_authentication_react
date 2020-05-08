import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { login, loginerror } from "../actions/AuthActions";
import { Redirect } from "react-router-dom";

const querystring = require("querystring");

function Login() {
  const authContent = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (_username, _password) => {
    return (dispatch) => {
      axios
        .post(
          "http://localhost:64414/TOKEN",
          querystring.stringify({
            username: _username,
            password: _password,
            grant_type: "password",
          }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((response) => {
          let result = response.data;
          dispatch(login(true, result.access_token, result.userName));
        })
        .catch((error) => {
          dispatch(loginerror(true, error.response.data.error_description));
        });
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signIn(username, password));
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <form className="form-signin" onSubmit={handleSubmit}>
                  <div className="form-label-group">
                    <input
                      type="email"
                      value={username}
                      onChange={(e) => setUser(e.target.value)}
                      className="form-control"
                      placeholder="Email address"
                      required
                    />
                    <label htmlFor="username">Email address</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                    <label htmlFor="password">Password</label>
                  </div>

                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember password
                    </label>
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Sign in
                  </button>
                  <a
                    href="/register"
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                  >
                    Register
                  </a>
                  <br />
                  <span className="errorMsg">{authContent.errorMsg}</span>
                  {authContent.isLoggedIn && <Redirect to="/home" />}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
