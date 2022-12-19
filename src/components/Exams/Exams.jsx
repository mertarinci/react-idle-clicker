import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkUserClass,
  finalGivePot,
  midtermGivePot,
} from "../../features/product/coreSlice";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./Exams.scss";

function Exams() {
  const user = useSelector((state) => state.core.user);
  const midterms = useSelector((state) => state.core.midterms);
  const finals = useSelector((state) => state.core.finals);
  const potions = useSelector((state) => state.core.potions);

  const dispatch = useDispatch();
  dispatch(checkUserClass());

  const examsScreenClose = () => {
    const potionScreen = document.querySelector(".potionScreen");
    potionScreen.style.opacity = 0;
    const market = document.querySelector(".market");
    market.style.opacity = 0;
    const exam = document.querySelector(".examScreen");
    exam.style.opacity = 0;
    exam.style.visibility = "hidden";
    market.style.visibility = "hidden";
    potionScreen.style.visibility = "hidden";
    const game = document.querySelector(".game").style;
    game.opacity = 1;
  };

  return (
    <div className="examScreen">
      <div className="closeBtn" onClick={() => examsScreenClose()}>
        <i className="fa-solid fa-circle-xmark"></i>
      </div>
      <div className="info">
        <h1>
          <i className="fa-solid fa-book"></i> Midterms and Final Exams
        </h1>
        <p className="infoText">
          <i style={{ color: "#75E6DA" }} className="fa-solid fa-info"></i>
          {user.class < 2
            ? `
               Welcome to the Midterms and Final Exams! You have to make certain potions and give it to the potion master to grade up!`
            : "Since you are a experienced student, you know how drill works right? Make the potions that potion master needs!"}
        </p>
      </div>

      <div className="content">
        <div className="title">
          <h2>Potion Exams of Class {user.class}</h2>
        </div>
        <div className="quizes">
          <div className="left">
            {midterms.map((item, index) =>
              item.isOpen ? (
                <div key={index} className="quiz">
                  <h2>{item.name}</h2>
                  <span>
                    Needed Potions : {item.potionNeeds[0]}
                    <i
                      style={{ color: potions[item.potionNums[0]].color }}
                      className="fa-solid fa-flask"
                    ></i>{" "}
                    {item.potionNeeds[1]}
                    <i
                      style={{ color: potions[item.potionNums[1]].color }}
                      className="fa-solid fa-flask"
                    ></i>{" "}
                  </span>
                  <ProgressBar
                    progress={item.progress}
                    width={60}
                    bgcolor={"#a460ed"}
                  />
                  <div className="buttons">
                    <button
                      onClick={() => dispatch(midtermGivePot([0, item.id]))}
                    >
                      Give Potion #1
                    </button>
                    <button
                      onClick={() => dispatch(midtermGivePot([1, item.id]))}
                    >
                      Give Potion #2
                    </button>
                  </div>
                </div>
              ) : (
                <></>
              )
            )}
          </div>
          <div className="right">
            {finals.map((item, index) =>
              item.isOpen ? (
                <div key={index} className="quiz">
                  <h2>{item.name}</h2>
                  <span>
                    Needed Potions : {item.potionNeeds[0]}
                    <i
                      style={{ color: potions[item.potionNums[0]].color }}
                      className="fa-solid fa-flask"
                    ></i>{" "}
                    {item.potionNeeds[1]}
                    <i
                      style={{ color: potions[item.potionNums[1]].color }}
                      className="fa-solid fa-flask"
                    ></i>{" "}
                  </span>
                  <ProgressBar
                    progress={item.progress}
                    width={60}
                    bgcolor={"#a460ed"}
                  />
                  <div className="buttons">
                    <button
                      onClick={() => dispatch(finalGivePot([0, item.id]))}
                    >
                      Give Potion #1
                    </button>
                    <button
                      onClick={() => dispatch(finalGivePot([0, item.id]))}
                    >
                      Give Potion #2
                    </button>
                  </div>
                </div>
              ) : (
                <></>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exams;
