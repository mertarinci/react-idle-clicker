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

  const potionWindow = () => {
    const potionScreen = document.querySelector(".potionScreen").style;
    potionScreen.opacity = 1;
    potionScreen.visibility = "visible";
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
          <button>Market</button>
          <button onClick={() => potionWindow()}>Potion Making</button>
        </div>
        <div className="bottom"></div>

        <Market />
      </div>
    </div>
  );
}

export default RightMenu;
