import React from "react";

const Filter = ({ items, setCategory }) => {
  return (
    <div className="d-flex flex-lg-column flex-sm-row flex-wrap left-btn">
      <hr />
      <button
        className="btn btn-primary m-1 p-2 px-2"
        onClick={() => setCategory("")}
      >
        Clear
      </button>
      <button
        className="btn btn-primary m-1 p-2 px-2 "
        onClick={() => setCategory("jewelery")}
      >
        Jewelery
      </button>
      <button
        className="btn btn-primary m-1 p-2 px-2"
        onClick={() => setCategory("electronics")}
      >
        Electronics
      </button>
      <button
        className="btn btn-primary m-1 p-2 px-2"
        onClick={() => setCategory("men's clothing")}
      >
        Mens Clothing
      </button>
      <button
        className="btn btn-primary  m-1 p-2 px-2"
        onClick={() => setCategory("women's clothing")}
      >
        Womens Clothing
      </button>
    </div>
  );
};

export default Filter;
