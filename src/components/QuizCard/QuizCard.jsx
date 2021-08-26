import Header from "../Header/Header";
import quizcardclass from "./QuizCard.styles";

const QuizCard = (props) => {
  console.log(props);
  return (
    <div class={quizcardclass}>
      <Header>{props.question}</Header>
      <div>{props.questionnumber}</div>
      <form>
        <input id="op1" type="radio" name="radio" />
        <label>{props.optiona}</label>
      </form>
    </div>
  );
};

export default QuizCard;
