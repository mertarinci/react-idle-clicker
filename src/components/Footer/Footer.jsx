import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { devTools } from "../../features/product/coreSlice";
import "./Footer.scss";

function Footer() {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  const dispatch = useDispatch();

  const handleClick = () => {
    setNum((prev) => (prev += 1));
    if (num > 50 && num2 > 50) {
      dispatch(devTools());
    }
  };

  return (
    <div className="footer">
      <div onClick={() => handleClick()} className="left">
        Game by Mert A.
      </div>
      <div className="center">
        <div className="icons">
          <a href="http://google.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="http://google.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>

          <a href="http://google.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
      <div onClick={() => setNum2((prev) => prev + 1)} className="right">
        Server Time:{" "}
        <span style={{ color: "#a460ed" }}>
          {new Date().getHours()}:
          {new Date().getMinutes() < 10
            ? `0${new Date().getMinutes()}`
            : new Date().getMinutes()}
        </span>
      </div>
    </div>
  );
}

export default Footer;
