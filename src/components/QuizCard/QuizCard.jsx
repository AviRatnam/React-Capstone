import { useState } from "react";
import Header from "../Header/Header";
import quizcardclass from "./QuizCard.styles";

export const CalculateScore = (props) => {
  const [score, setScore] = useState(0);
  var radios = document.getElementsByTagName("input");
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === "radio" && radios[i].checked) {
      let value = radios[i].value;
      if (value === props.answer) {
        setScore(score + 1);
      }
    }
  }

  return (
    <div>
      <Header>Your score:</Header>
      <p>{score}</p>
    </div>
  );
};

const QuizCard = (props) => {
  console.log(props);

  /*
  const [optionSelected, setOptionSelected] = useState(null);
  const [question, setQuestion] = useState("");

  const submitAnswer = (e) => {
    e.preventDefault();
    const answerDetails = {optionSelected, question};

    fetch("http://localhost:8000/answers",{
      method:'POST',
      headers: {"Content-Type":"application/JSON"},
      body: JSON.stringify(answerDetails)
    }).then(()=>{
      console.log("answer inputted");
    })
  }*/

  
  return (
    <div class={quizcardclass}>
      <Header>{props.questionasked}</Header>
      <div>{props.questionnumber}</div>
      <form>
        <input
          id="op1"
          type="radio"
          value={props.optiona}
        />
        <label>{props.optiona}</label>
        <input
          id="op2"
          type="radio"
          value={props.optionb}
        />
        <label>{props.optionb}</label>
        <input
          id="op3"
          type="radio"
          value={props.optionc}
        />
        <label>{props.optionc}</label>
        <input
          id="op4"
          type="radio"
          value={props.optiond}
        />
        <label>{props.optiond}</label>
      </form>
      <Header>{props.answer}</Header>
    </div>
  );
};

export default QuizCard;
