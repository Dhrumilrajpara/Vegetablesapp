import React, { useEffect, useState } from "react";
import "../assets/home.css";
import Header from "./Header";

const Home = () => {
  const [product] = useState([
    {
      id: 1,
      img: "Vegetables/A.webp",
      name: "Apples",
      rupe: "$10",
    },
    {
      id: 2,
      img: "Vegetables/banana.jpg",
      name: "Banana",
      rupe: "$12",
    },
    {
      id: 3,
      img: "Vegetables/brinjal.webp",
      name: "Brinijal",
      rupe: "$5",
    },
    {
      id: 4,
      img: "Vegetables/broccoli.webp",
      name: "Broccoli",
      rupe: "$20",
    },
    {
      id: 5,
      img: "vegetables/grepes.jpg",
      name: "Grepes",
      rupe: "$18",
    },
    {
      id: 6,
      img: "Vegetables/mango.webp",
      name: "mango",
      rupe: "$20",
    },
    {
      id: 7,
      img: "Vegetables/orange.jpg",
      name: "Orange",
      rupe: "$3",
    },
    {
      id: 8,
      img: "Vegetables/poteto.jpeg",
      name: "Poteto",
      rupe: "$9",
    },
    {
      id: 9,
      img: "Vegetables/tometo.jpg",
      name: "Tometo",
      rupe: "$90",
    },
  ]);
  const [Addtocart, setAddtocart] = useState([]);
  const [foverite, setFoverite] = useState([]);
  const [data, setData] = useState("");
  const [number, setNumber] = useState([]);

  const viewtocard = (value) => {
    let a = value;
    Addtocart.push(a);
    localStorage.setItem("Addtocart", JSON.stringify(Addtocart));
    setAddtocart(Addtocart);
  };

  const foverit = (value) => {
    let a = value;
    foverite.push(a);
    localStorage.setItem("Favorite", JSON.stringify(foverite));
    setFoverite(foverite);
  };
  useEffect(() => {
    if (data !== "") {
      var update = product.filter((item) => item.name.includes(data));
      setNumber(update);
    } else {
      setNumber(product);
    }

    const foverite = localStorage.getItem("Favorite");
    if (foverite !== null) setFoverite(JSON.parse(foverite));

    const add = localStorage.getItem("Addtocart");
    if (add !== null) setAddtocart(JSON.parse(add));
  }, [data]);

  return (
    <>
      <Header />
      <div className="container-fluid">
        <input
          type="search"
          placeholder="Search"
          aria-label="Search"
          className="text-primary text-outline-light p-2  m-2"
          onChange={(e) => setData(e.target.value)}
        />
        <div className="row text-center">
          {number.map((item, Product) => (
            <div className="col-12 col-md-3  mt-5 " key={Product}>
              <div className="card p-2 pt-0 bg-light ">
                <div className="align-items-center">
                  <div>
                    <img
                      src={item.img}
                      height={80}
                      width={100}
                      className="m-2"
                    />
                    <div className="ml-3 w-100">
                      <h1>{item.name}</h1>
                      <h2 className="mb-0 mt-0 textLeft">{item.rupe}</h2>
                      <span className="textLeft"></span>
                    </div>
                    <div className="d-flex justify-content-center ">
                      <button
                        className=" text-dark btn-outline-info m-2"
                        onClick={(e) => viewtocard(item, Product)}
                      >
                        Add to cart
                      </button>
                      <button
                        className=" text-dark btn-outline-info m-2"
                        onClick={(e) => foverit(item, Product)}
                      >
                        Favorite
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

export default Home;
