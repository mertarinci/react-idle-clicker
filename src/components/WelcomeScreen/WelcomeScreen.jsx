import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./WelcomeScreen.scss";
import { changeUsername } from "../../features/product/coreSlice";

function WelcomeScreen() {
  const handleClick = () => {
    const market = document.querySelector(".welcomeScreen");
    market.style.opacity = 0;
    market.style.visibility = "hidden";
    const game = document.querySelector(".game").style;
    game.opacity = 1;
    dispatch(changeUsername(username));
  };

  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  console.log(username);

  return (
    <div className="welcomeScreen">
      <h1 className="welcomeTitle">WELCOME ALCHEMIST!</h1>
      <p className="welcomeText">
        Once upon a time, on the realm of Aringrad, wizards and witches were
        living in harmony with the creatures of the realm. One day, an evil
        creature <b style={{ color: "red" }}>Ngrzhat</b> has started to conquare
        the realm. Some of the survivals became slaves of{" "}
        <b style={{ color: "red" }}>Ngrzhat</b> or retreat in to{" "}
        <i>
          <b style={{ color: "lightgreen" }}>Nogwarts, School of Alchemy.</b>
        </i>{" "}
        You are a new student in{" "}
        <b>
          <i style={{ color: "lightgreen" }}>Nogwarts</i>
        </b>{" "}
        and you will try to stop this evil with your potion-making skills.
        <hr />
        The adventures of young alchemist starts now! You have to collect
        ingrediants and make potions to stop evil{" "}
        <b style={{ color: "red" }}>Ngrzhat</b>. You can either{" "}
        <span style={{ color: "yellow", fontWeight: "bold" }}>CLICK</span> to
        ingrediants or{" "}
        <span style={{ color: "green", fontWeight: "bold" }}>BUY WORKERS</span>{" "}
        for automated gathering.
      </p>

      <div className="input">
        <div>
          <input
            maxLength="10"
            type="text"
            name="name"
            id="name"
            placeholder="Your name..."
            value={username}
            onChange={handleChange}
          />
        </div>

        <button onClick={() => handleClick()} className="welcomeButton">
          Start Your Journey
        </button>
      </div>
    </div>
  );
}

export default WelcomeScreen;
