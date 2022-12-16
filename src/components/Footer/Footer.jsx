import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="left">Game by Mert A.</div>
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
      <div className="right">Day : 1</div>
    </div>
  );
}

export default Footer;
