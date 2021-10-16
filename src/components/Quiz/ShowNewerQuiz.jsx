import { useState, useEffect } from "react";
import QuizReport from "./QuizReport";

const ShowNewerQuiz = () => {
  const [info, setinfo] = useState(null);
  const [showinfo, setshowinfo] = useState(false);

  const [score, setscore] = useState(0);
  const [activeindex, setactiveindex] = useState(0);

  const [showloading, setshowloading] = useState(true);
  const [showbutton, setshowbutton] = useState(false);
  const [showreport, setshowreport] = useState(false);

  let questionscorrect = [];
  let questionsincorrect = [];

  const defaultbutton = `p-2 bg-gray-100 hover:bg-gray-200 rounded-lg max-w-lg`;

  useEffect(() => {
    fetch("http://localhost:8080/quizzes")
      .then((res) => res.json())
      .then((data) => {
        setinfo(data);
        setshowinfo(true);
        setshowloading(false);
      });
  }, []);

  const checkanswer = (value, answer) => {
    if (value === answer) {
      console.log("correct");
      setscore(score + 1);
    } else {
      console.log("incorrect");
    }
    setshowbutton(true);
  };

  useEffect(() => {
    setshowbutton(false);
    if (activeindex === 9) {
      setshowreport(true);
      setshowinfo(false);
    }
  }, [activeindex]);

  return (
    <div className="App">
      {showloading && <div>Loading...</div>}
      {showreport && <QuizReport score={score} />}
      {showinfo && (
        <div>
          <h1>{info.quizname}</h1>

          <div>
            {activeindex + 1} {info.questions[activeindex].question}
          </div>
          {info.questions[activeindex].distractors.map((distractor, i) => (
            <div
              class={defaultbutton}
              key={i}
              value={distractor}
              onClick={() =>
                checkanswer(
                  distractor,
                  info.questions[activeindex].correct_answer
                )
              }
            >
              {distractor}
            </div>
          ))}
          {showbutton && (
            <button onClick={() => setactiveindex(activeindex + 1)}>
              Next Question
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ShowNewerQuiz;
