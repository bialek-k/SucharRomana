import { useEffect } from "react";

import Header from "./components/Header/Header";
import Question from "./components/Question/Question";
import Answer from "./components/Answer/Answer";
import Faq from "./components/Faq/Faq";
import classes from "./App.module.css";

import { useSelector } from "react-redux";
import useFetch from "./hooks/use-fetch";

function App() {
  const faqIsVisible = useSelector((state) => state.faq.faqIsVisible);
  const { fetchJoke } = useFetch();

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className={classes.wrapper}>
      {faqIsVisible && <Faq />}
      <>
        <Header />
        <Question />
        <Answer />
      </>
    </div>
  );
}

export default App;
