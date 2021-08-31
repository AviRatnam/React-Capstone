import quizClass from "./Quiz.styles";
import QuizCard from "../QuizCard/QuizCard";
import { useEffect, useState } from "react";

const Prev = (props) => {
  return (
    <button onClick={props.toggle} disabled={props.active} class="">
      Previous
    </button>
  );
};

const Next = (props) => {
  return (
    <button onClick={props.toggle} disabled={props.active}>
      Next
    </button>
  );
};

const ShowQuiz = (props) => {
  const ShowData = (props) => {
    const data = props;
    const noofquestions = props.numberofquestions;

    const [disabledNext, toggleNext] = useState(false);
    const [disabledPrev, togglePrev] = useState(false);
    const [activeIndex, setActiveIndex] = useState(1);

    const clickPrev = (e) => {
      setActiveIndex(activeIndex - 1);
      togglePrev(activeIndex === 0);
      toggleNext(false);
    };

    const clickNext = (e) => {
      setActiveIndex(activeIndex + 1);
      toggleNext(activeIndex === noofquestions - 1);
      togglePrev(false);
    };

    //console.log(data);
    //console.log(data.user[5].question);
    console.log(props.statusCode);
    console.log(props.statusCode === 200);


    if (props.statusCode === 200) {
      return (
        <div class="bg-gray-100 px-10 py-10">
          <div key={activeIndex} class={quizClass}>
            <QuizCard
              questionnumber={activeIndex}
              questionasked={data.user[activeIndex].question}
              optiona={data.user[activeIndex].distractors.a}
              optionb={data.user[activeIndex].distractors.b}
              optionc={data.user[activeIndex].distractors.c}
              optiond={data.user[activeIndex].distractors.d}
              answer={data.user[activeIndex].answer}
            />
          </div>
          <div class="justify-between">
            <Prev toggle={(e) => clickPrev(e)} active={disabledPrev} />
            <Next toggle={(e) => clickNext(e)} active={disabledNext} />
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
