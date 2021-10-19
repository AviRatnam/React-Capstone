import { useState } from "react";
import Header from "../Header/Header";

const PopupQuizForm = () => {
  const quizformstyle = `rounded-lg shadow-lg text-gray-700 px-10 py-10 flex-initial flex items-center object-right-top transition `;
  const borderstyle = `border-2 border-gray-200 rounded-md`;
  const apipath = "https://capstone.rithik.xyz/api/getquiz?quizname=";

  const [quizName, setQuizName] = useState("");
  const [chapter, setchapter] = useState("");
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(1);
  const [pdf, setpdf] = useState("");

  const submitQuiz = (e) => {
    e.preventDefault();
    const quizDetails = {
      quizName,
      chapter,
      minutes,
      seconds,
      pdf,
    };

    fetch("https://capstone.rithik.xyz/api/getquizcards", {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify(quizDetails),
    }).then(() => {
      console.log("new quiz added");
    });

    fetch(apipath + pdf, {
      method: "POST",
    })
      .then(console.log(apipath + pdf))
      .catch((e) => {
        console.error(e);
      });
  };

  const getpdfname = (path) => {
    setpdf(path.replace(/^.*[\\\/]/, ""));
    //console.log(path.replace(/^.*[\\\/]/, ''));
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
        <h3>chapter</h3>
        <input
          class={borderstyle}
          type="text"
          required
          value={chapter}
          onChange={(e) => setchapter(e.target.value)}
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
        <input type="file" onChange={(e) => getpdfname(e.target.value)} />
        <button>Create Quiz</button>
      </form>
    </div>
  );
};

export default PopupQuizForm;
