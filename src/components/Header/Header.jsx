import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./Header.scss";

function Header() {
  const makeBold = {
    fontWeight: "bold",
  };

  return (
    <div className="header">
      <div className="left">
        <h1>Witch Cauldron</h1>
      </div>
      <div className="center">
        <ProgressBar progress={30} bgcolor={"#a460ed"} />
        <p>Level : 1</p>
      </div>
      <div className="right">
        <p style={makeBold} className="rightMenu-item">
          Money: 0$
        </p>
        <hr />
        <p style={makeBold} className="rightMenu-item">
          Class: 1
        </p>
        <hr />
        <p style={makeBold} className="rightMenu-item">
          Debt: 100$
        </p>
        <hr />
        <p style={makeBold} className="rightMenu-item">
          Game Info
        </p>
      </div>
    </div>
  );
}

export default Header;
