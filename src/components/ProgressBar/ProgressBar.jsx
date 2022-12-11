import React from "react";

function ProgressBar({ progress, bgcolor, width }) {
  const containerStyles = {
    height: 20,
    width: width ? `${width}%` : "80%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "center",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles} className="progressBar">
      <div style={fillerStyles} className="filler">
        <span style={labelStyles} className="innerText">
          {progress}%
        </span>
      </div>
    </div>
  );
}

export default ProgressBar;
