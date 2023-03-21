import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/vegetables.jpg";

const Header = () => {
  return (
    <div>
      <nav className="d-flex justify-content-between bg-dark bg-dark  ">
        <Link to={"/home"}>
          <button className="btn btn-outline-info p-2 m-2">Home</button>
        </Link>
        <div className="d-flex ">
          <img src={img} alt="" height={50} className="m-2 pt-0" />
          <h1 className="text-white mx-auto "> Vegetables</h1>
        </div>
        <form className="form-inline">
          <Link to="/favorite">
            <button className="btn btn-outline-info p-2 ">favorite</button>
          </Link>
          <Link to="/addtocart">
            <button className="btn btn-outline-info p-2 m-2">View cart</button>
          </Link>
          <Link to="/">
            <button className="btn btn-outline-info p-2 m-1">Logout</button>
          </Link>
        </form>
      </nav>
    </div>
  );
};

export default Header;
