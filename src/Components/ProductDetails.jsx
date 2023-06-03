import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productInfo, setProductInfo] = useState([]);
  console.log(productInfo);
  const { Product } = useSelector((state) => state.item);
  useEffect(() => {
    let findProductImte = Product?.filter((item) => item.id == id);

    setProductInfo(findProductImte);
  }, [Product, id]);
  return (
    <div>

        <button onClick={()=>navigate("/")} className="bg-gray-700 text-white p-2">Go Back</button>
      {
        productInfo?.map((item,ind)=>{
            return (
                <div key={ind}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
               </div>
            )
        })
      }
    </div>
  );
};

export default ProductDetails;
