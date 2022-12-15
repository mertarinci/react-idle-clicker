import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { numberFormatter } from "../NumberFormatter/numberFormatter";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./Header.scss";

function Header() {
  const makeBold = {
    fontWeight: "bold",
  };

  const user = useSelector((state) => state.core.user);

  return (
    <div className="header">
      <div className="left">
        <h1>Witch Cauldron</h1>
      </div>
      <div className="center">
        <ProgressBar progress={user.expProgress} bgcolor={"#a460ed"} />
        <p>Level : {user.level}</p>
      </div>
      <div className="right">
        <p style={makeBold} className="rightMenu-item">
          Gold: {numberFormatter(user.totalGold)}{" "}
          <i style={{ color: "gold" }} className="fa-solid fa-coins"></i>
        </p>
        <hr />
        <p style={makeBold} className="rightMenu-item">
          Class: {user.class}
        </p>
        <hr />
        <p style={makeBold} className="rightMenu-item">
          Debt: 100$
        </p>
        <hr />
        <p style={makeBold} className="rightMenu-item">
          {user.username.length < 3 ? "Unkown" : user.username}
        </p>
      </div>
    </div>
  );
}

export default Header;
