import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./PotionScreen.scss";

function PotionScreen() {
  const handleClick = () => {
    const potionScreen = document.querySelector(".potionScreen");
    potionScreen.style.opacity = 0;
    potionScreen.style.visibility = "hidden";
    const game = document.querySelector(".game").style;
    game.opacity = 1;
  };

  const potions = useSelector((state) => state.core.potions);
  const product = useSelector((state) => state.core.product);

  const [selectedPot, setSelectedPot] = useState(0);

  return (
    <div className="potionScreen">
      <div className="closeBtn" onClick={() => handleClick()}>
        <i class="fa-solid fa-circle-xmark"></i>
      </div>
      <div className="container">
        <div className="potionTitle">POTION CRAFT</div>
        <div className="potionMaking">
          <div className="potionList">
            {potions?.map((item) => (
              <div
                style={{ borderColor: item.color }}
                key={item.id}
                className="item"
                onClick={() => setSelectedPot(item.id)}
              >
                <i style={{ color: item.color }} class="fa-solid fa-flask"></i>
                <span style={{ color: item.color }}>{item.name}</span>
              </div>
            ))}
          </div>

          <div className="potionDetail">
            <h2 style={{ color: potions[selectedPot].color }}>
              {potions[selectedPot].name}
            </h2>
            <i
              style={{ color: potions[selectedPot].color }}
              class="fa-solid fa-flask"
            ></i>
            <p className="desc">{potions[selectedPot].desc}</p>
            <p className="icons">
              Materials needed:{" "}
              {potions[selectedPot].ingsToMake.map((item) => (
                <div>
                  {potions[selectedPot].materialNeed[item]}{" "}
                  <i
                    style={{ color: product[item].color, fontSize: "20px" }}
                    class={product[item].icon}
                  ></i>
                </div>
              ))}
            </p>
            <div className="buttons">
              <button className="makePotion">Make 1 Potion</button>
              <button className="makePotion">Make 10 Potion</button>
              <button className="makePotion">Make 100 Potion</button>
            </div>
            <p style={{ fontWeight: "bold" }}>Total Count: 0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PotionScreen;
