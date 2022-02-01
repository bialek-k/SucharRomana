import React from "react";
import Button from "../UI/Button/Button";

import classes from "./Final.module.css";
import { useSelector, useDispatch } from "react-redux";
import { questionActions } from "../../store/question-slice";

const Final = () => {
  const seenJokesCount = useSelector((state) => state.question.seenJokesCount);
  const dispatch = useDispatch();

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.head}>
          <h1>😊</h1>
          <h1>Dobrnąłeś do końca sucharów!</h1>
          <p>
            Dziękuję Ci za poswięcony czas, przebrnąłeś przez{" "}
            <strong>{seenJokesCount}</strong> sucharów, gdy tylko Roman wymyśli
            nowego - ja go tutaj dodam👌
          </p>
        </div>
        <div className={classes.buttons}>
          <Button name={"Mój Github"} href={"https://github.com/bialek-k"} />
          <Button
            name={"Kanał HelloRoman"}
            href={"https://www.youtube.com/c/helloroman"}
          />
          <Button
            name={"Jeszcze raz!"}
            onClick={() => dispatch(questionActions.reload())}
          />
        </div>
      </div>
    </div>
  );
};

export default Final;
