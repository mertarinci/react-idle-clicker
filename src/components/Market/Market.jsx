import React from "react";
import { useSelector } from "react-redux";
import { numberFormatter } from "../NumberFormatter/numberFormatter";
import "./Market.scss";

function Market() {
  const handleClick = () => {
    const market = document.querySelector(".market");
    market.style.opacity = 0;
    market.style.visibility = "hidden";
    const game = document.querySelector(".game").style;
    game.opacity = 1;
  };

  const upgrades = useSelector((state) => state.core.upgrades);

  return (
    <div className="market">
      <div className="closeBtn" onClick={() => handleClick()}>
        <i class="fa-solid fa-circle-xmark"></i>
      </div>
      <h1 className="marketTitle">UPGRADES</h1>
      <div className="menu">
        {upgrades?.map((item) => (
          <div key={item.id} className="item">
            <h4>
              <i style={{ color: item.color }} className={item.parentIcon}></i>{" "}
              {item.name}
            </h4>

            <p>{item.desc}</p>
            <span>
              Price : {numberFormatter(item.price)}{" "}
              <i style={{ color: "gold" }} className="fa-solid fa-coins"></i>
            </span>
            <button>BUY</button>
          </div>
        ))}

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
