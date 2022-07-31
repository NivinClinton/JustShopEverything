import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.css";
// import data from "../data.js";
import { FaCartPlus } from "react-icons/fa";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Products() {
  const [productList, setProductsList] = useState();
  const [searchKey, setSearchKey] = useState("");

  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:5000/api/products")
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setProductsList(data.products));
  }, []);
  console.log(productList);

  const { totalItems } = useCart();
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="Top">
        <div className="heading">
          <h1 className="text-center mt-3">Products</h1>
        </div>
        <div className="cart">
          <FaCartPlus size={30} onClick={() => navigate("/cart")} />
          {totalItems}
        </div>
      </div>

      <div className="row justify-content-center">
        <form className="d-flex col-md-6 col-10 ">
          <input
            className="form-control me-2"
            type="search"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            placeholder="Search"
            aria-label="Search"
          />
          
        </form>
      </div>

      <div className="container py-3">
        <div className="row justify-content-center">
          {productList &&
            productList
              .filter((obj) => obj.title.toLowerCase().includes(searchKey))
              .map((item, index) => {
                return (
                  <ProductCard
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    item={item}
                    key={index}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default Products;
