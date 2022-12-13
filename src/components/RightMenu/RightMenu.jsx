import React from "react";
import "./RightMenu.scss";
import Market from "../Market/Market";

function RightMenu() {
  const marketWindow = () => {
    const market = document.querySelector(".market").style;
    market.opacity = 1;
    market.visibility = "visible";
    const game = document.querySelector(".game").style;
    game.opacity = 0.2;
  };

  return (
    <div className="rightMenu">
      <div className="container">
        <div className="top">
          <h1>Right Menu</h1>
        </div>
        <div className="center">
          <button className="btn" onClick={() => marketWindow()}>
            Upgrades
          </button>
        </div>
        <div className="bottom"></div>

        <Market />
      </div>
    </div>
  );
}

export default RightMenu;
