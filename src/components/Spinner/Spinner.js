import React from "react";

const Spinner = () => {
  return (
    <div className="text-center  fs-6  d-flex justify-content-center align-items-center">
      <div
        className="spinner-border spinner d-flex justify-content-center align-items-center"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
