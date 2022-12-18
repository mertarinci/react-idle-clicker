import React from "react";
import { useSelector } from "react-redux";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./Exams.scss";

function Exams() {
  const user = useSelector((state) => state.core.user);

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
            <div className="quiz">
              <h2>Midterm #1</h2>
              <span>Needed Potions : 100x X - 200x Y</span>
              <ProgressBar progress={30} width={60} bgcolor={"#a460ed"} />
              <div className="buttons">
                <button>Give Potion #1</button>
                <button>Give Potion #2</button>
              </div>
            </div>
            <div className="quiz">
              <h2>Midterm #2</h2>
              <span>Needed Potions : 100x X - 200x Y</span>
              <ProgressBar progress={30} width={60} bgcolor={"#a460ed"} />
              <div className="buttons">
                <button>Give Potion #1</button>
                <button>Give Potion #2</button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="quiz">
              <h2>Final Exam #1</h2>
              <span>Needed Potions : 100x X - 200x Y</span>
              <ProgressBar progress={30} width={60} bgcolor={"#a460ed"} />
              <div className="buttons">
                <button>Give Potion #1</button>
                <button>Give Potion #2</button>
              </div>
            </div>
            <div className="quiz">
              <h2>Final Exam #2</h2>
              <span>Needed Potions : 100x X - 200x Y</span>
              <ProgressBar progress={30} width={60} bgcolor={"#a460ed"} />
              <div className="buttons">
                <button>Give Potion #1</button>
                <button>Give Potion #2</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exams;
