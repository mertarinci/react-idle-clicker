import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { upgradeGather } from "../../features/product/coreSlice";
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
  const user = useSelector((state) => state.core.user);
  const dispatch = useDispatch();

  return (
    <div className="market">
      <div className="closeBtn" onClick={() => handleClick()}>
        <i class="fa-solid fa-circle-xmark"></i>
      </div>
      <h1 className="marketTitle">UPGRADES</h1>
      <div className="menu">
        {upgrades?.map((item) =>
          item.isPurchased ? (
            <></>
          ) : (
            <div key={item.id} className="item">
              <h4>
                <i
                  style={{ color: item.color }}
                  className={item.parentIcon}
                ></i>{" "}
                {item.name}
              </h4>

              <p>{item.desc}</p>
              <span>
                Price : {numberFormatter(item.price)}{" "}
                <i style={{ color: "gold" }} className="fa-solid fa-coins"></i>
              </span>
              <button
                style={
                  user.totalGold >= item.price
                    ? { backgroundColor: "#a460ed", color: "white" }
                    : {
                        backgroundColor: "gray",
                        cursor: "not-allowed",
                        color: "white",
                      }
                }
                onClick={() => dispatch(upgradeGather([item.id, item.target]))}
              >
                BUY
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Market;
