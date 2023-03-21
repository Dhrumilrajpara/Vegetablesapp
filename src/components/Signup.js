import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Signup = () => {
  const [data, setData] = useState({});
  const [errormassage, setErrormassage] = useState(false);
  const navigate = useNavigate();

  const userdata = (value, key) => {
    data[key] = value;
    setData(data);
    setData({ ...data });
  };

  const jim = (e) => {
    e.preventDefault();
    setErrormassage(true);
    if (
      data.username.length < 6 ||
      data.number.length < 10 ||
      data.password.length < 6 ||
      data.password !== data.confirmPassword
    ) {
      return;
    }

    if (
      !(
        data.username &&
        data.email &&
        data.number &&
        data.password &&
        data.confirmPassword
      )
    )
      return;
    {
      const userdata = localStorage.getItem("data")
        ? JSON.parse(localStorage.getItem("data"))
        : [];

      userdata.push(data);
      localStorage.setItem("data", JSON.stringify(userdata));
      setData({});
      setData(data);
      navigate("/home");
    }
  };

  return (
    <div>
      <form className="mx-auto w-50 mt-5 border border-dark p-5">
        <div className="form-group">
          <label for="exampleInputPassword1">User Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username.."
            onChange={(e) => userdata(e.target.value, "username")}
          />
          <div className="text-danger">
            {errormassage && !!data.username == ""
              ? "Username is required"
              : data.username && data.username.length < 6
              ? "Username must be min 6 charachter "
              : null}
          </div>
        </div>
        <div className="form-group ">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => userdata(e.target.value, "email")}
          />
          <div className="text-danger">
            {errormassage && !!data.email == "" ? "email is required" : null}
          </div>
        </div>
        <div className="form-group">
          <label>Number</label>
          <input
            type="number"
            className="form-control"
            placeholder="number.."
            onChange={(e) => userdata(e.target.value, "number")}
          />
          <div className="text-danger">
            {" "}
            {errormassage && !!data.number == ""
              ? "Number is required"
              : errormassage && !!data.number && data.number.length < 10
              ? "Number must be min 10 charachter"
              : null}
          </div>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => userdata(e.target.value, "password")}
          />
          <div className="text-danger">
            {" "}
            {errormassage && !!data.password == ""
              ? "password is required"
              : errormassage && !!data.password && data.password.length < 6
              ? "password must be min 6 charachter"
              : null}
          </div>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="confirm Password"
            onChange={(e) => userdata(e.target.value, "confirmPassword")}
          />
          <div className="text-danger">
            {" "}
            {errormassage && !!data.confirmPassword == ""
              ? "confirmPassword is required"
              : errormassage && data.password !== data.confirmPassword
              ? "password and confirmPassword  not sem "
              : null}
          </div>
        </div>
        <div className="text-danger">
          {errormassage && !!data == "" ? "plz fill data" : null}
        </div>

        <button type="submit" className="btn btn-primary m-2" onClick={jim}>
          Signup
        </button>

        <p className="text-center text-muted mt-5 mb-0">
          Have already an account?
          <Link to={"/"}>
            <a href="" className="text-primary">
              <u>Login here</u>
            </a>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
