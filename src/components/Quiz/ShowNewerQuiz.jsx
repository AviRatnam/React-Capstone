import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Timer from "../Timer/Timer";

const ShowNewerQuiz = () => {
  const [info, setinfo] = useState(null);
  const [showinfo, setshowinfo] = useState(false);

  const [score, setscore] = useState(0);
  const [activeindex, setactiveindex] = useState(0);

  const [showloading, setshowloading] = useState(true);
  const [showbutton, setshowbutton] = useState(false);
  const [showreport, setshowreport] = useState(false);

  const [questionscorrect, setquestionscorrect] = useState([]);
  const [optionscorrect, setoptionscorrect] = useState([]);

  const [questionsincorrect, setquestionsincorrect] = useState([]);
  const [optionsincorrect, setoptionsincorrect] = useState([]);


  const defaultbutton = `p-2 bg-gray-100 hover:bg-gray-200 rounded-lg max-w-lg`;
  const explanationbutton = `p-2 hover:bg-gray-100 rounded-lg max-w-lg`;

  // const correctanswerbutton = `p-2 bg-green-200 rounded-lg max-w-lg`;
  // const wronganswerbutton = `p-2 bg-red-200 rounded-lg max-w-lg`;

  const { quizname } = useParams();

  useEffect(() => {
    fetch("https://capstone.rithik.xyz/api/getquiz?quizname="+quizname)
      .then((res) => res.json())
      .then((data) => {
        setinfo(data);
        setshowinfo(true);
        setshowloading(false);
      });
  }, []);

  const checkanswer = (value, answer, question) => {
    if (value.distractor === answer) {
      console.log("correct");
      setscore(score + 1);
      setquestionscorrect([...questionscorrect, question]);
      setoptionscorrect([...optionscorrect,answer])
    } else {
      console.log("incorrect");
      setquestionsincorrect([...questionsincorrect, question]);
      setoptionsincorrect([...optionsincorrect,answer])
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

  console.log("Correct Questions: ",questionscorrect);
  console.log("Incorrect Questions: ",questionsincorrect);
  console.log("Correct options: ",optionscorrect);
  console.log("Incorrect options: ",optionsincorrect);


  return (
    <div className="App">
      {showloading && <div>Loading...</div>}
      {/* {showreport && <QuizReport score={score} correctquestions={questionscorrect} wrongquestions={questionsincorrect} />} */}
      {showreport && (
        <div>
          <h2>
            <b>Your Score:</b>
            {score}
          </h2>
          <h2>Questions you got right:</h2>
          {questionscorrect.map((data, i) => (
            <div key={i} class={defaultbutton}>{data.question}</div>
          ))}
          <h2>List of answers</h2>
          {optionscorrect.map((data, i) => (
            <div key={i} class={defaultbutton}>{data}</div>
          ))}

          <h2>Questions you got wrong:</h2>
          {questionsincorrect.map((data, i) => (
            <div key={i} class={defaultbutton}>{data.question}</div>
          ))}
          <h2>List of answers</h2>
          {optionsincorrect.map((data, i) => (
            <div key={i} class={defaultbutton}>{data}</div>
          ))}
        </div>
      )}
      {showinfo && (
        <div>
          <h1>{info.quizname}</h1>
          {/* <Timer initialMinute={info.quizcards[activeindex].time.minutes} initialSeconds={info.quizcards[activeindex].time.seconds} /> */}
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
                  info.questions[activeindex].correct_answer,
                  info.questions[activeindex]
                )
              }
            >
              {distractor.distractor}
              {showbutton && <div class={explanationbutton}>Meaning: {distractor.meaning}</div>}
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
