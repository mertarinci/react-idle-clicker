import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  buyWorker,
  clickToGather,
  sellOneProduct,
} from "../../features/product/coreSlice";
import "./Product.scss";
import { numberFormatter } from "../NumberFormatter/numberFormatter";

function Product({ prd }) {
  const product = useSelector((state) => state.core.product[prd]);
  const user = useSelector((state) => state.core.user);
  const dispatch = useDispatch();

  const border = {
    border: `2px solid ${product.color}`,
  };

  const handleBuyWorker = () => {
    dispatch(buyWorker(product.id));
  };

  const disabled = {
    cursor: "not-allowed",
    backgroundColor: "gray",
  };

  const active = {
    cursor: "pointer",
  };

  const isDisabled10 = () => {
    if (product.workerPrice * 10 > user.totalGold) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div style={border} className="product">
      <div className="left">
        <div className="top">
          <span
            className="span"
            style={{
              color: `${product.color}`,
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            Count : {numberFormatter(product.count)}
          </span>
        </div>

        <div className="bottom">
          <button
            onClick={() => dispatch(sellOneProduct(product.id))}
            className="sell"
          >
            Sell 1
          </button>
          <button style={disabled} className="sell">
            Sell 100
          </button>
          <button className="sell">Sell All</button>
        </div>
      </div>
      <div className="center">
        <h3 style={{ color: `${product.color}` }}>{product.name}</h3>
        <i
          onClick={() => dispatch(clickToGather(product.id))}
          style={{ color: `${product.color}` }}
          className={product.icon}
        ></i>
      </div>

      <div className="right">
        <div className="top">
          <span>Workers : {numberFormatter(product.worker)}</span>
        </div>
        <div className="bottom">
          <button onClick={() => handleBuyWorker()}>
            1x Worker {numberFormatter(product.workerPrice)}{" "}
            <i style={{ color: "gold" }} class="fa-solid fa-coins"></i>
          </button>
          <button
            style={
              product.workerPrice * 10 > user.totalGold ? disabled : active
            }
            onClick={() => handleBuyWorker()}
          >
            10x Worker {numberFormatter(product.workerPrice * 10)}{" "}
            <i style={{ color: "gold" }} class="fa-solid fa-coins"></i>
          </button>
          <button style={disabled} onClick={() => handleBuyWorker()}>
            100x Worker {numberFormatter(product.workerPrice * 100)}{" "}
            <i style={{ color: "gold" }} class="fa-solid fa-coins"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
