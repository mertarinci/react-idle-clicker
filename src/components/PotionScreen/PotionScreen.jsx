import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makePotion } from "../../features/product/coreSlice";
import { numberFormatter } from "../NumberFormatter/numberFormatter";
import "./PotionScreen.scss";

function PotionScreen() {
  const potionScreenClose = () => {
    const potionScreen = document.querySelector(".potionScreen");
    potionScreen.style.opacity = 0;
    const market = document.querySelector(".market");
    market.style.opacity = 0;
    market.style.visibility = "hidden";
    potionScreen.style.visibility = "hidden";
    const game = document.querySelector(".game").style;
    game.opacity = 1;
  };

  const potions = useSelector((state) => state.core.potions);
  const product = useSelector((state) => state.core.product);

  const dispatch = useDispatch();

  const [selectedPot, setSelectedPot] = useState(0);

  document.onkeydown = (e) => {
    if (e.key === "Escape") {
      potionScreenClose();
    }
  };

  return (
    <div className="potionScreen">
      <div className="closeBtn" onClick={() => potionScreenClose()}>
        <i className="fa-solid fa-circle-xmark"></i>
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
                <i
                  style={{ color: item.color }}
                  className="fa-solid fa-flask"
                ></i>
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
              className="fa-solid fa-flask"
            ></i>
            <p className="desc">{potions[selectedPot].desc}</p>
            <p className="icons">
              Materials needed:{" "}
              {potions[selectedPot].ingsToMake.map((item, index) => (
                <span key={index}>
                  {numberFormatter(potions[selectedPot].materialNeed[index])}{" "}
                  <i
                    style={{ color: product[item].color, fontSize: "20px" }}
                    className={product[item].icon}
                  ></i>
                </span>
              ))}
            </p>
            <div className="buttons">
              <button
                onClick={() =>
                  dispatch(makePotion([potions[selectedPot].id, 1]))
                }
                className="makePotion"
              >
                Make 1 Potion
              </button>
              <button
                onClick={() =>
                  dispatch(makePotion([potions[selectedPot].id, 10]))
                }
                className="makePotion"
              >
                Make 10 Potion
              </button>
              <button
                onClick={() =>
                  dispatch(makePotion([potions[selectedPot].id, 100]))
                }
                className="makePotion"
              >
                Make 100 Potion
              </button>
            </div>
            <p>
              You Have:{" "}
              {potions[selectedPot].ingsToMake.map((item, index) => (
                <span key={index}>
                  {numberFormatter(product[item].count)}{" "}
                  {
                    <i
                      style={{ color: product[item].color, fontSize: "20px" }}
                      className={product[item].icon}
                    ></i>
                  }{" "}
                </span>
              ))}
            </p>
            <p style={{ fontWeight: "bold" }}>
              Total Count: {potions[selectedPot].count}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PotionScreen;
