import React, { useState } from "react";
import Header from "./Header";

const Addtocart = () => {
  const [add, setAdd] = useState(
    JSON.parse(localStorage.getItem("addproduct"))
  );
  const del = (i) => {
    add.splice(i, 1);
    localStorage.setItem("addproduct", JSON.stringify(add));
    setAdd([...add]);
  };
  return (
    <>
      <Header />
      <div className="container-fluid pt-0 p-5 ">
        <div className="row text-center">
          {add.map((value, Product) => (
            <div className="col-10 col-md-3 mt-5 " key={Product}>
              <div className="card p-2 pt-0 bg-light ">
                <div className="align-items-center">
                  <div>
                    <img
                      src={value.img}
                      height={80}
                      width={100}
                      className="m-2"
                    />
                    <div className="ml-3 w-100">
                      <h1>{value.name}</h1>
                      <h2 className="mb-0 mt-0 textLeft">{value.rupe}</h2>
                      <span className="textLeft"></span>
                      <button
                        onClick={(e) => del(Product)}
                        className="btn btn-primary"
                      >
                        Remove to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Addtocart;
