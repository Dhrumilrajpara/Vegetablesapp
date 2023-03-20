import React, { useEffect, useState } from "react";

const Dataadd = () => {
  const [data, setData] = useState([
    {
      id: 1,
      img: "/Vegetables/A.webp",
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
      img: "vegetables/mango.webp",
      name: "mango",
      rupe: "$20",
    },
    {
      id: 7,
      img: "vegetables/orange.jpg",
      name: "Orange",
      rupe: "$3",
    },
    {
      id: 8,
      img: "vegetables/poteto.jpeg",
      name: "Poteto",
      rupe: "$9",
    },
    {
      id: 9,
      img: "vegetables/tometo.jpg",
      name: "Tometo",
      rupe: "$90",
    },
  ]);
  const [name, setName] = useState("");
  const [rupe, setRupe] = useState("");
  const [img, setImg] = useState(null);
  const dataadd = () => {
    data.push({
      id: data.length + 1,
      img: img,
      name: name,
      rupe: rupe,
    });
    localStorage.setItem("adddata", JSON.stringify(data));
  };

  const handal = (e) => {
    setImg(URL.createObjectURL(e.target.files[0]));
  };

  console.log(img);

  useEffect(() => {
    const data = localStorage.getItem("adddata");
    if (data !== null) setData(JSON.parse(data));
  }, []);

  return (
    <div>
      <div>
        <form className=" mx-auto w-25 mt-5 border p-5">
          <div className="form ">
            <label for="exampleInputEmail1"> Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Price</label>
            <input
              type="text"
              className="form-control"
              placeholder="price"
              value={rupe}
              onChange={(e) => setRupe(e.target.value)}
            />
          </div>
          <form>
            <div class="form-group">
              <label for="exampleFormControlFile1">Example file input</label>
              <input
                type="file"
                class="form-control-file"
                id="exampleFormControlFile1"
                accept="vegetables/*"
                onChange={handal}
              />
              <img alt="preview image" src={img} height={20} />
            </div>
          </form>
          <button
            type="submit"
            className="btn btn-primary mt-2"
            onClick={(e) => dataadd(e.target.value)}
          >
            Dataadd
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dataadd;
