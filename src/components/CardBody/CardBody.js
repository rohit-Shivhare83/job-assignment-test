import React from "react";
import Card from "../Card/Card";

const CardBody = ({ products, addItem, removeItem, itmesFilter }) => {
  products.map((product) => (product.isAdded = true));

  return (
    <div className="album py-4 bg-body-tertiary add-product">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 card-container">
          {/*  */}
          {products.map((product, i) => {
            return (
              <Card
                key={product.id}
                product={product}
                addItem={addItem}
                removeItem={removeItem}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardBody;
