import React from "react";

const ProductCard = ({data}) => {

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://picsum.photos/200?random=1"
          className="card-img-top"
          alt="Product Image"
        />
        <div className="card-body">
          <h5 className="card-title"></h5>
          <h6 className="card-subtitle mb-2 text-muted">Brand: Roadster</h6>
          <p className="card-text">Comfortable and stylish</p>
          <p className="mb-1">
            <strong>Price:</strong> ₹499
          </p>
          <p className="mb-0">
            <strong>Rating:</strong>
            <span className="text-warning">★★★★☆</span>
            <span className="text-muted">(4.2)</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
