import React from "react";
import "./Market.scss";

function Market() {
  const handleClick = () => {
    const market = document.querySelector(".market");
    market.style.opacity = 0;
    market.style.visibility = "hidden";
  };
  return (
    <div className="market">
      <div className="closeBtn" onClick={() => handleClick()}>
        X
      </div>
      <h1 className="marketTitle">MARKET</h1>
      <div className="menu">
        <div className="item">
          <h4>Product #1</h4>
          <p>Increase the production speed of workers.</p>
          <span>Price : 30$</span>
          <button>BUY</button>
        </div>

        <div className="item">
          <h4>Product #2</h4>
          <button>BUY</button>
        </div>

        <div className="item">
          <h4>Product #3</h4>
          <button>BUY</button>
        </div>

        <div className="item">
          <h4>Product #4</h4>
          <button>BUY</button>
        </div>

        <div className="item">
          <h4>Product #4</h4>
          <button>BUY</button>
        </div>

        <div className="item">
          <h4>Product #4</h4>
          <button>BUY</button>
        </div>

        <div className="item">
          <h4>Product #4</h4>
          <button>BUY</button>
        </div>

        <div className="item">
          <h4>Product #4</h4>
          <p>Increase the production speed of workers.</p>
          <button>BUY</button>
        </div>

        <div className="item">
          <h4>Product #4</h4>
          <button>BUY</button>
        </div>

        <div className="item">
          <h4>Product #4</h4>
          <button>BUY</button>
        </div>
      </div>
    </div>
  );
}

export default Market;
