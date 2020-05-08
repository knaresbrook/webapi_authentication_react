import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { login, loginerror, register } from "../actions/AuthActions";
import { Redirect } from "react-router-dom";

const querystring = require("querystring");

function Register() {
  const authContent = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirm] = useState("");

  const signUp = (_email, _password, _confirmpassword) => {
    return (dispatch) => {
      axios
        .post(
          "http://localhost:64414/api/Account/Register",
          querystring.stringify({
            email: _email,
            password: _password,
            confirmpassword: _confirmpassword,
          }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((response) => {
          dispatch(register());
          axios
            .post(
              "http://localhost:64414/TOKEN",
              querystring.stringify({
                username: _email,
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
        })
        .catch((error) => {
          dispatch(loginerror(true, error.response.data.error_description));
        });
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signUp(email, password, confirmpassword));
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Register</h5>
                <form className="form-signin" onSubmit={handleSubmit}>
                  <div className="form-label-group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      placeholder="Email address"
                      required
                    />
                    <label htmlFor="email">Email address</label>
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

                  <div className="form-label-group">
                    <input
                      type="password"
                      value={confirmpassword}
                      onChange={(e) => setConfirm(e.target.value)}
                      className="form-control"
                      placeholder="Confirm Password"
                      required
                    />
                    <label htmlFor="confirmpassword">Confirm Password</label>
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Register
                  </button>
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

export default Register;
