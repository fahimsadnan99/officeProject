import React, { useEffect, useState } from "react";
import AddProduct from "../Components/AddProduct";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../Redux/productReducer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.item.Product);
  const navigate = useNavigate();
  const [inputSrc, setInputSrc] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [dec, setDec] = useState([]);

  const handleSrc = () => {
    let data = allProducts?.filter((item) => item.name == inputSrc);
    setAllProducts(data);
  };

  const handleDec = () => {
    let dec = allProducts?.sort((a, b) => a.price - b.price);

    setDec(dec);
  };

  useEffect(() => {
    setAllProducts(product);
  }, [product]);

  useEffect(() => {
    if (dec.length !== 0) {
      setAllProducts(dec);
    }
  }, [dec]);
  return (
    <div>
      <AddProduct></AddProduct>
       
      <div className="space-x-3 space-y-8">
        <input
          placeholder="src name"
          className="ring-1"
          onChange={(e) => setInputSrc(e.target.value)}
        ></input>{" "}
        <button className="bg-slate-950 text-white" onClick={handleSrc}>
          Search By Name
        </button>
      </div>
      <button onClick={handleDec} className="bg-slate-950 text-white my-10">
        Descending price Filter
      </button>

      
      <div>
        {allProducts?.map((item, index) => {
          return (
            <div key={index} className="flex space-x-5 text-lg space-y-4">
              <img src={item.img} />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <button className="bg-slate-400" onClick={() => navigate(`/${item.id}`)}>
                View
              </button>
              <button className="bg-red-500" onClick={() => dispatch(deleteProduct(item.id))}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
