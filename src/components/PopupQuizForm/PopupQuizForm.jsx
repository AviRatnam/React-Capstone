import { useState } from "react";
import Header from "../Header/Header";

const PopupQuizForm = () => {
  const quizformstyle = `rounded-lg shadow-lg text-gray-700 px-10 py-10 flex-initial flex items-center object-right-top transition `;
  const borderstyle = `border-2 border-gray-200 rounded-md`;
  const apipath = "https://capstone.rithik.xyz/api/gettext?src=";

  const [quizName, setQuizName] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [topic, setTopic] = useState("");
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(1);
  const [questions, setQuestions] = useState(1);
  const [pdf, setpdf] = useState(null);

  const submitQuiz = (e) => {
    e.preventDefault();
    const quizDetails = {
      quizName,
      subjectName,
      topic,
      minutes,
      seconds,
      questions,
      pdf,
    };

    fetch("https://capstone.rithik.xyz/qjson/quizzes", {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify(quizDetails),
    }).then(() => {
      console.log("new quiz added");
      console.log(pdf);
    });

    fetch(apipath+pdf,{
      method: "POST"
    })
    .then(
      console.log(apipath+pdf)
    )
    .catch((e=>{
      console.error(e);
    }))
  };

  //npx json-server --watch data/quiz.json --port 8000

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
        <h3>Topic</h3>
        <input
          class={borderstyle}
          type="text"
          required
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
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
        <span>Enter pdf</span>
        <input type="file" onChange={(e) => setpdf(e.target.value)} />
        <button>Create Quiz</button>
      </form>
    </div>
  );
};

export default PopupQuizForm;
