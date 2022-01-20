import React from "react";
import classes from "./Answer.module.css";
import Photo from "../../assets/png/photo_hero.png";

import { useSelector } from "react-redux";

const Answer = () => {
  const showAnswer = useSelector((state) => state.question.showAnswer);
  const initialJokeId = useSelector((state) => state.question.initialJokeId);
  const allJokes = useSelector((state) => state.question.allJokes);

  return (
    <>
      {showAnswer && (
        <div className={classes.answer}>
          <div className={classes.quoteWrapper}>
            <div className={classes.text}>
              <div className={classes.triangleWrapper}>
                <div className={classes.triangle}></div>
              </div>
              <p>{allJokes[initialJokeId].answer}</p>
            </div>
          </div>
          <div className={classes.photo}>
            <img src={Photo} alt="photo_hero" />
          </div>
        </div>
      )}
    </>
  );
};

export default Answer;
