import React from "react";
import { useDispatch } from "react-redux";
import { isEndGame } from "../../features/product/coreSlice";
import "./EndScreen.scss";

function EndScreen() {
  const handleClick = () => {
    const endScreen = document.querySelector(".endScreen");
    endScreen.style.opacity = 0;
    endScreen.style.visibility = "hidden";
    const game = document.querySelector(".game").style;
    game.opacity = 1;
    dispatch(isEndGame(false));
  };

  const dispatch = useDispatch();

  return (
    <div className="endScreen">
      <h1 className="endTitle">WELL DONE MASTER ALCHEMIST!</h1>
      <p className="endText">
        You successfully finished school and become a{" "}
        <b style={{ color: "red" }}>MASTER ALCHEMIST. </b>You are the guardian
        of the realm now. Only worthy alchemists can graduate from
        <i>
          <b style={{ color: "lightgreen" }}> Nogwarts, School of Alchemy.</b>
        </i>{" "}
        and you are one of them. Your school journey ends here but your duties
        to protect this realm from future evils continues.
        <hr />
        Ofcourse with great power comes with responsibility. The realm of{" "}
        <b style={{ color: "teal" }}>Aringrad</b> believes in you. Now make your
        potions and protect the people of yours! You can still make potions but
        remember school is over!
        <hr />
        Notes from Author <span style={{ color: "#40e0d0" }}>(Mert A.)</span> :
        Thanks for playing my game. This was my reactJS practice project. I hope
        you enjoyed the game. You can always reach me via{" "}
        <span style={{ color: "#a460ed" }}>admin@mertarinci.com</span>
      </p>
      <button onClick={() => handleClick()} className="endButton">
        Thanks For Playing
      </button>
    </div>
  );
}

export default EndScreen;
