import axios from "axios";
import { useEffect, useState } from "react";
import ShowQuiz from "./ShowQuiz";
import Header from "../Header/Header";
import Timer from "../Timer/Timer";
import Title from "../Title/Title";
import quizClass from "./Quiz.styles";
import Button from "../Button/Button";

const QuizNew = (props) => {
  const [userData, getUserData] = useState("");

  useEffect(() => {
    getAllUserdata();
  }, []);

  const getAllUserdata = () => {
    axios
      .get("https://official-joke-api.appspot.com/jokes/ten")
      .then((response) => {
        const allUserData = response.data;
        getUserData(allUserData);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  return (
    <div class="bg-gray-100 px-10 py-10">
      <div class={quizClass}>
        <div class="text-left px-5">
          <Title>{props.title}</Title>
          <Header>{props.subtitle}</Header>
        </div>
        <Timer initialMinute="5" initialSeconds="30" />
      </div>
      <ShowQuiz user={userData} numberofquestions="6" />
      <Button>End Quiz</Button>
    </div>
  );
};

export default QuizNew;
