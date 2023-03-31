import React, { useState } from "react";
import "./Card.css";

const Card = ({ product, addItem, removeItem }) => {
  const [isAdded, setIsAdded] = useState(true);

  return (
    <div className="col add-product-hei ">
      <div className="card shadow-sm card-product h-100 d-flex justify-content-between flex-column">
        <img
          className="img-fluid object-fit-contain "
          src={product.image}
          alt="list-Img"
        />
        <div className="card-body d-flex justify-content-between flex-column">
          <div>
            <h5>{product.title}</h5>
            <h6 className="text-decoration-underline">{product.category}</h6>
            <p className="card-text my-2 text-secondary">
              {product.description.substr(0, 200)}...
            </p>
          </div>
          <div>
            <p className="card-text my-2 fw-medium  ">RS {product.price}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group w-100 ">
                <button
                  type="button"
                  className="btn btn btn-primary  "
                  onClick={() => {
                    isAdded ? addItem(product) : removeItem(product);
                    setIsAdded(!isAdded);
                  }}
                >
                  {isAdded ? (
                    <p className="m-0 p-0  ">Add to Cart</p>
                  ) : (
                    <p className="m-0 p-0 ">Remove</p>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
