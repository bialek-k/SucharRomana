import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Howl, Howler } from "howler";

import Button from "../UI/Button/Button";

import classes from "./Question.module.css";
import Jingle from "../../assets/sound/jingle.mp3";
import { questionActions } from "../../store/question-slice";

const Question = () => {
  const allJokes = useSelector((state) => state.question.allJokes);
  const showAnswer = useSelector((state) => state.question.showAnswer);
  const initialJokeId = useSelector((state) => state.question.initialJokeId);
  const [jokeId, setJokeId] = useState(initialJokeId);
  const dispatch = useDispatch();

  const showAnswerHandler = () => {
    const sound = new Howl({
      src: Jingle,
    });
    Howler.volume(0.5);
    sound.play();
    setTimeout(() => {
      dispatch(questionActions.getAnswer());
    }, 1300);
  };

  useEffect(() => {
    console.log(jokeId);
  }, [jokeId]);

  // wygeneruj randomm number (Math.random) pomiedzy 1 a allJokes.length (move+1),
  // za kazdym kliknieciem w next joke dodaj numer do arraya(usestate)

  if (allJokes) {
    return (
      <div className={classes.question}>
        <h1>{allJokes[jokeId].question} </h1>
        <div className={classes.btn}>
          <Button name={"odpowiedź"} onClick={showAnswerHandler} size />
          {showAnswer && (
            <>
              <Button
                name={"(Next.js) suchar"}
                onClick={() => setJokeId(jokeId + 1)}
              />
              <Button
                href={allJokes[jokeId].url}
                name={`Odcinek ${allJokes[jokeId].answer ?? "hehe"} `}
              />
            </>
          )}
        </div>
      </div>
    );
  }
};

export default Question;
