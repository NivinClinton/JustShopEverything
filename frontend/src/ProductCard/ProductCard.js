import React from "react";
import "./ProductCard.css";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";

function ProductCard(props) {
  const navigate = useNavigate();
  const { addItem } = useCart();
  return (
    <div className="cardComponent col-10 col-md-4 col-lg-3 text-center">
      <div className="childComponent row shadow justify-content-center bg-white ">
        <div className="card-image col-md-10 col-6">
          <img
            onClick={() => navigate(`/products/${props.item._id}`)}
            src={props.image}
            className="card-img-top "
            alt="..."
          />
        </div>
        <div className="card-body ">
          <h5 className="card-title">{props.title}</h5>
          <br />
          <p className="card-text description">{props.description}</p>
          <h5 className="card-text price ">Rs.{props.price}</h5>
          <button
            className="btn btn-primary c"
            onClick={() => addItem(props.item)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
