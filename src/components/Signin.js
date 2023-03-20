import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Signin = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  const dat = JSON.parse(localStorage.getItem("data"));
  const navigate = useNavigate();

  const handal = (value, key) => {
    data[key] = value;
    setData({ ...data });
  };

  const login = (e) => {
    e.preventDefault();
    setError(true);

    dat.forEach((element) => {
      if (
        (data.password && data.password.length < 6) ||
        (data.email !== dat.email && data.password !== dat.password)
      ) {
        return;
      }
      if (!(data.email == element.email && data.password == element.password))
        return;
      navigate("/home");
      setError(false);
      setData({ ...data });
    });
  };

  return (
    <div>
      <form className=" mx-auto w-25 mt-5 border border-dark p-5">
        <div className="form ">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => handal(e.target.value, "email")}
          />
          <div className="text-danger">
            {error && !!data.email == ""
              ? error && !!data.email !== dat.email
                ? "email is required"
                : "invalid email"
              : null}
          </div>
        </div>

        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => handal(e.target.value, "password")}
          />

          <div className="text-danger">
            {error && !!data.password == ""
              ? "password is required"
              : error && !!data.password && data.password.length < 6
              ? "password must be min 6 charachter"
              : null}
          </div>
        </div>

        <button type="submit" className="btn btn-primary m-2" onClick={login}>
          Signin
        </button>
        <div className="text-danger">
          {error &&
          !!data.email !== !!dat.email &&
          !!data.password !== !!dat.password
            ? " User not Ragister"
            : null}
        </div>
        <p className="text-center text-muted mt-2 mb-0">
          Have you New User?{" "}
          <Link to="/signup">
            <a href="" className=" p-1 fw-bold text-body">
              <u className="text-primary">Ragister here</u>
            </a>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
