import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyWorker } from "../../features/product/productSlice";
import "./Product.scss";

function Product({ prd }) {
  const numberFormatter = (number) => {
    if (number >= 1000 && number <= 1000000 - 1) {
      return `${(number / 1000).toFixed(1)}k`;
    }
    if (number >= 1000000 && number <= 1000000000 - 1) {
      return `${(number / 1000000).toFixed(1)}m`;
    }
    if (number >= 1000000000) {
      return `${(number / 1000000000).toFixed(1)}b`;
    } else {
      return `${number}`;
    }
  };

  const productName = () => {
    if (prd === 0) {
      return "lemon";
    }
    if (prd === 1) {
      return "bone";
    }
  };

  const product = useSelector((state) => state.product[prd]);
  const dispatch = useDispatch();

  return (
    <div className="product">
      <div className="left">
        <div className="data">
          <span>
            Total {productName()}: {numberFormatter(product.count)}
          </span>
        </div>
      </div>
      <div className="right">
        <button onClick={() => dispatch(buyWorker(prd))}>Add Worker</button>
        <p>Total Workers : {product.worker}</p>
      </div>
    </div>
  );
}

export default Product;
