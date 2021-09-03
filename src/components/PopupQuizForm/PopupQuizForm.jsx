import { useState } from "react";
import Header from "../Header/Header";

const PopupQuizForm = () => {
  const quizformstyle = `rounded-lg shadow-lg max-w-full text-gray-700 px-10 py-10 flex-initial flex items-center object-right-top transition `;
  const borderstyle = `border-2 border-gray-200 rounded-md`;

  const [quizName, setQuizName] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(1);
  const [questions, setQuestions] = useState(1);

  const submitQuiz = (e) => {
    e.preventDefault();
    const quizDetails = { quizName, subjectName, minutes, seconds, questions };
    console.log(quizDetails);
  };

  return (
    <div class={quizformstyle}>
      <form onSubmit={submitQuiz}>
        <Header>Quiz Details</Header>
        <h3>Quiz Name</h3>
        <input
          class={borderstyle}
          type="text"
          required
          value={quizName}
          onChange={(e) => setQuizName(e.target.value)}
        />
        <h3>Subject</h3>
        <input
          class={borderstyle}
          type="text"
          required
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
        />
        <h3>Number of Questions</h3>
        <input
          class={borderstyle}
          type="number"
          min="1"
          max="10"
          defaultValue={questions}
          onChange={(e) => setQuestions(e.target.value)}
          required
        />
        <h3>Time Limit</h3>
        <input
          class={borderstyle}
          type="number"
          min="1"
          max="10"
          defaultValue={minutes}
          onChange={(e) => setMinutes(e.target.value)}
        />
        <span>Minutes</span>
        <input
          class={borderstyle}
          type="number"
          min="1"
          max="60"
          defaultValue={seconds}
          onChange={(e) => setSeconds(e.target.value)}
        />
        <span>Seconds</span>
        <button>Create Quiz</button>
      </form>
    </div>
  );
};

export default PopupQuizForm;
