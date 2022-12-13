import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  buyWorker,
  clickToGather,
  sellOneProduct,
  sellProdByPerc,
  unlockProduct,
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

  const handleBuyWorker = (count) => {
    dispatch(buyWorker([product.id, count]));
  };

  const disabled = {
    cursor: "not-allowed",
    backgroundColor: "gray",
  };

  const active = {
    cursor: "pointer",
  };

  return (
    <div style={border} className="product">
      {product?.isOpen ? (
        <>
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
                className="sell"
                onClick={() => dispatch(sellProdByPerc([product.id, 4]))}
              >
                Sell 25%
                <span>
                  +
                  {numberFormatter(
                    Math.floor((product.count * product.sellPrice) / 4)
                  )}{" "}
                  <i
                    style={{ color: "gold" }}
                    className="fa-solid fa-coins"
                  ></i>
                </span>
              </button>
              <button
                className="sell"
                onClick={() => dispatch(sellProdByPerc([product.id, 2]))}
              >
                Sell 50%
                <span>
                  +
                  {numberFormatter(
                    Math.floor((product.count * product.sellPrice) / 2)
                  )}{" "}
                  <i
                    style={{ color: "gold" }}
                    className="fa-solid fa-coins"
                  ></i>
                </span>
              </button>
              <button
                onClick={() => dispatch(sellProdByPerc([product.id, 1]))}
                className="sell"
              >
                Sell All
                <span>
                  +
                  {numberFormatter(
                    Math.floor(product.count * product.sellPrice)
                  )}{" "}
                  <i
                    style={{ color: "gold" }}
                    className="fa-solid fa-coins"
                  ></i>
                </span>
              </button>
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
              <button
                style={product.workerPrice > user.totalGold ? disabled : active}
                onClick={() => handleBuyWorker(1)}
              >
                +1 {"=>"} {numberFormatter(product.workerPrice)}{" "}
                <i style={{ color: "gold" }} className="fa-solid fa-coins"></i>
              </button>
              <button
                style={
                  product.workerPrice * 10 > user.totalGold ? disabled : active
                }
                onClick={() => handleBuyWorker(10)}
              >
                +10 {"=>"} {numberFormatter(product.workerPrice * 10)}{" "}
                <i style={{ color: "gold" }} className="fa-solid fa-coins"></i>
              </button>
              <button
                style={
                  product.workerPrice * 100 > user.totalGold ? disabled : active
                }
                onClick={() => handleBuyWorker(100)}
              >
                +100 {"=>"} {numberFormatter(product.workerPrice * 100)}{" "}
                <i style={{ color: "gold" }} className="fa-solid fa-coins"></i>
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="disabled">
          <h2 style={{ color: product.color }}>
            <span>
              <i class="fa-solid fa-lock"></i>
            </span>{" "}
            {product.name}
          </h2>
          <button
            onClick={() => dispatch(unlockProduct(product.id))}
            style={
              user.totalGold >= product.openPrice
                ? { backgroundColor: product.color }
                : { backgroundColor: "gray", cursor: "not-allowed" }
            }
          >
            Unlock for {numberFormatter(product.openPrice)}{" "}
            <i style={{ color: "gold" }} className="fa-solid fa-coins"></i>
          </button>
        </div>
      )}
    </div>
  );
}

export default Product;
