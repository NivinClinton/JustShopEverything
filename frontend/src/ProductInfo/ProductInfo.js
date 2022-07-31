import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import { useCart } from "react-use-cart";
import "./ProductInfo.css";

function ProductInfo() {
  const [singleProduct, setSingleProduct] = useState("");
  // const navigate = useNavigate();
  const { addItem } = useCart();

  const id = useParams().id;

  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/products/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    // console.log(data);
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setSingleProduct(data));
  }, []);
  console.log(singleProduct);

  const { totalItems } = useCart();
  const navigate = useNavigate();

  return (
    <div className="container  " style={{ marginTop: 50 }}>
        <div className="productTop">
        <div className="heading1">
          <h1 className="text-center mt-3">Product</h1>
        </div>
        <div className="cart1">
          <FaCartPlus size={30} onClick={() => navigate("/cart")} />
          {totalItems}
        </div>
        </div>
      <div className="row justify-content-center  ">
        <div className="col-8 col-md-6 ">
          {singleProduct && (
            <div>
              <div className="cardComponent text-center col-12">
                <div className=" row shadow justify-content-center bg-white ">
                  <div className="card-image col-6 col-md-8 " style={{ marginTop: 50 }}>
                    <img
                      src={singleProduct.Product.image}
                      className="card-img-top "
                      alt="..."
                    />
                  </div>
                  <div className="card-body ">
                    <h5 className="card-title">
                      {singleProduct.Product.title}
                    </h5>
                    <br />
                    <p className="card-text description">
                      {singleProduct.Product.description}
                    </p>
                    <h5 className="card-text price ">
                      Rs.{singleProduct.Product.price}
                    </h5>
                    <button
                      className="btn btn-primary c"
                      onClick={() => addItem(singleProduct.Product)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
