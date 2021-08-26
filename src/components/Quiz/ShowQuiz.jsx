import Title from "../Title/Title";
import Header from "../Header/Header";
import quizClass from "./Quiz.styles";
import QuizCard from "../QuizCard/QuizCard";
import { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";

const ShowQuiz = (props) => {
  console.log(props);

  const ShowData = (props) => {
    const data = props;
    console.log(data.user.length);

    const [activeIndex, setActiveIndex] = useState(0);

    const nextQuestion = () => {
      if (activeIndex >= props.numberofquestions) {
        console.log("quiz done");
      } else {
        console.log("no: of ueiosm", props.numberofquestions);
        setActiveIndex(activeIndex + 1);
      }
    };

    const prevQuestion = () => {
      if (activeIndex >= props.numberofquestions) {
        console.log("dont be here");
      } else {
        setActiveIndex(activeIndex - 1);
      }
    };

    if (data.user.length > 0) {
      return (
        <div class="bg-gray-100 px-10 py-10">
          <div key={activeIndex} class={quizClass}>
            <QuizCard
              question={data.user[activeIndex].setup}
              optiona={data.user[activeIndex].punchline}
            />
          </div>
          <div class="justify-between">
            <button onClick={prevQuestion}>Prev Question</button>
            <button onClick={nextQuestion}>Next Question</button>
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
