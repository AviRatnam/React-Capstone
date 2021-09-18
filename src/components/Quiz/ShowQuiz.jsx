import quizClass from "./Quiz.styles";
import QuizCard from "../QuizCard/QuizCard";
import { useState } from "react";

const ShowQuiz = (props) => {
  const ShowData = (props) => {
    const data = props;

    const [activeIndex, setActiveIndex] = useState(0);

    const changeActiveIndex = (e) => {
      const next = document.querySelector("#next");
      const prev = document.querySelector("#prev");

      e.currentTarget.id === "next"
        ? setActiveIndex((activeIndex) => activeIndex + 1)
        : setActiveIndex((activeIndex) => activeIndex - 1);

      if (activeIndex > 0 && activeIndex < props.numberofquestions) {
        next.classList.add("hidden");
      }
      if (
        activeIndex !== props.numberofquestions - 2 &&
        next.classList.contains("hidden")
      ) {
        next.classList.remove("hidden");
      }
      if (activeIndex !== 1) {
        prev.classList.remove("hidden");
      }
    };

    if (data.user.length > 0) {
      return (
        <div class="bg-gray-100 px-10 py-10">
          <div key={activeIndex} class={quizClass}>
            <QuizCard
              questionnumber={activeIndex}
              question={data.user[activeIndex].setup}
              optiona={data.user[activeIndex].punchline}
            />
          </div>
          <div class="justify-between">
            <button onClick={changeActiveIndex} id="prev" class="hidden">
              Prev Question
            </button>

            <button onClick={changeActiveIndex} id="next" class="">
              Next Question
            </button>
          </div>
        </div>
      );
    } else {
      return <div>No quiz :(</div>;
    }
  };
  return <>{ShowData(props)}</>;
};

export default ShowQuiz;
