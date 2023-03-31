import React from "react";

const Sort = ({ sortBy }) => {
  return (
    <div className="d-flex flex-lg-column flex-sm-row flex-wrap left-btn ">
      <button
        className="btn btn-primary m-1 p-2 px-2"
        onClick={() => sortBy("title", "asc")}
      >
        A to Z
      </button>
      <button
        className="btn btn-primary m-1 py-2 px-2"
        onClick={() => sortBy("title", "desc")}
      >
        Z to A
      </button>
      <button
        className="btn btn-primary m-1 p-2 px-2"
        onClick={() => sortBy("price", "asc")}
      >
        Lowest to Highest
      </button>

      <button
        className="btn btn-primary m-1 p-2 px-2"
        onClick={() => sortBy("price", "desc")}
      >
        Highest to Lowest
      </button>
    </div>
  );
};

export default Sort;
