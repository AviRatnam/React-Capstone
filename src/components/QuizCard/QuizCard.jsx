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

  //const checkedValue = $("input[type='radio'][name='rate']:checked").val();

  return (
    <div class={quizcardclass}>
      <Header>{props.questionasked}</Header>
      <div>{props.questionnumber}</div>
      <form>
        <input id="op1" type="radio" name={props.optiona} />
        <label>{props.optiona}</label>
        <input id="op2" type="radio" name={props.optionb} />
        <label>{props.optionb}</label>
        <input id="op3" type="radio" name={props.optionc} />
        <label>{props.optionc}</label>
        <input id="op4" type="radio" name={props.optiond} />
        <label>{props.optiond}</label>
      </form>
      <Header>{props.answer}</Header>
    </div>
  );
};

export default QuizCard;
