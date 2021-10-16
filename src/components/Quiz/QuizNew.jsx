import axios from "axios";
import { useEffect, useState } from "react";
import ShowQuiz from "./ShowQuiz";
import Header from "../Header/Header";
import Timer from "../Timer/Timer";
import Title from "../Title/Title";
import quizClass from "./Quiz.styles";
import Button from "../Button/Button";
import ShowQuizNew from "./ShowQuizNew";
import { usePromiseTracker, trackPromise } from "react-promise-tracker";
import { CalculateScore } from "../QuizCard/QuizCard";

const QuizNew = (props) => {
  const [questionData, getquestionData] = useState("");
  const [status, getresponse] = useState(0);

  const LoadingIndicator = (props) => {
    const { promiseInProgress } = usePromiseTracker();

    //return promiseInProgress && <Header>Loading Quiz...</Header>;
    if (promiseInProgress) {
      return <Header>Loading...</Header>;
    } else {
      console.log(questionData);
      return (
        <ShowQuizNew
          user={questionData}
          numberofquestions="6"
          showQuestions={false}
          statusCode={status}
        />
      );
    }
  };

  useEffect(() => {
    trackPromise(
      axios
        .get("http://localhost:8080/quizzes")
        .then((response) => {
          const allquestionData = response.data;
          getresponse(response.status);
          getquestionData(allquestionData);
        })
        .catch((error) => console.log(`Error: ${error}`))
    );
  }, []);

  return (
    <div class="bg-gray-100 px-10 py-10">
      <div class={quizClass}>
        <div class="text-left px-5">
          <Title>{props.title}</Title>
          <Header>{props.subtitle}</Header>
        </div>
        <Timer initialMinute="5" initialSeconds="30" />
      </div>
      <LoadingIndicator />

      <Button>End Quiz</Button>
      <CalculateScore />
    </div>
  );
};

export default QuizNew;
