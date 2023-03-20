import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import Home from "../components/Home";
import Addtocart from "../components/Addtocart";
import Favorite from "../components/Favorite";

const Routs = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addtocart" element={<Addtocart />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routs;
