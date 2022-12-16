import React from "react";
import "./RightMenu.scss";
import Market from "../Market/Market";
import { useSelector } from "react-redux";
import { numberFormatter } from "../NumberFormatter/numberFormatter";

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

  const potions = useSelector((state) => state.core.potions);

  const user = useSelector((state) => state.core.user);
  return (
    <div className="rightMenu">
      <div className="container">
        <div className="top">
          <div className="inventory">
            <h3>Potion Inventory</h3>

            <div className="items">
              {potions?.map((item) => (
                <div key={item.id} className="item">
                  <i
                    style={{ color: item.color }}
                    className="fa-solid fa-flask"
                  ></i>{" "}
                  : {numberFormatter(item.count)}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="center">
          <div className="notifications">
            <h3>Notifications</h3>

            <div className="items">
              {user.notifications.map((item, index) => (
                <p key={index} style={{ color: item.color }} className="item">
                  {item.not}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="bottom">
          <button className="btn" onClick={() => marketWindow()}>
            <i className="fa-solid fa-angles-up"></i>
            Upgrades
          </button>

          <button onClick={() => potionWindow()}>
            <i className="fa-solid fa-flask"></i>
            Potion Craft
          </button>
          <button>
            <i className="fa-solid fa-store"></i>
            Market
          </button>
        </div>

        <Market />
      </div>
    </div>
  );
}

export default RightMenu;
