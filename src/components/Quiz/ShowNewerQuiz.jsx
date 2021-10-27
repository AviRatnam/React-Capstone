import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import Timer from "../Timer/Timer";
import Title from "../Title/Title";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Tickmark from "../Profile/Tickmark";
import Cross from "../Profile/Cross";

const ShowNewerQuiz = () => {
  const cardstyles =
    "flex flex-col justify-center gap-3 cursor-pointer items-center rounded-lg shadow-lg max-w-3xl p-5 ";
  const defaultbutton = `p-2 bg-gray-100 hover:bg-gray-200 rounded-lg max-w-lg`;
  const explanationbutton = `p-2 hover:bg-gray-100 rounded-lg max-w-lg`;

  const [username, setusername] = useContext(UserContext);

  const [info, setinfo] = useState(null);
  const [showinfo, setshowinfo] = useState(false);

  const [score, setscore] = useState(0);
  const [activeindex, setactiveindex] = useState(0);

  const [showloading, setshowloading] = useState(true);
  const [showbutton, setshowbutton] = useState(false);
  const [showreport, setshowreport] = useState(false);

  const [selectedoption, setselectedoption] = useState([]);

  const [questionscorrect, setquestionscorrect] = useState([]);
  const [questionsincorrect, setquestionsincorrect] = useState([]);

  const [isanswercorrect, setisanswercorrect] = useState(false);

  const quiz_api =
    "https://rithik-capstone.herokuapp.com/api/getquiz?quizname=";
  const { quizname } = useParams();

  useEffect(() => {
    fetch(quiz_api + quizname)
      .then((res) => res.json())
      .then((data) => {
        setinfo(data);
        setshowinfo(true);
        setshowloading(false);
      });
  }, []);

  const checkanswer = (value, answer, question) => {
    if (value.distractor === answer) {
      setisanswercorrect(true);
      setscore(score + 1);
      setquestionscorrect([...questionscorrect, question]);
    } else {
      setisanswercorrect(false);
      setquestionsincorrect([...questionsincorrect, question]);
    }

    setselectedoption([
      ...selectedoption,
      {
        answer: answer,
        question: question.question,
        selected: value,
      },
    ]);

    setshowbutton(true);
  };

  useEffect(() => {
    setshowbutton(false);
    if (activeindex === info?.questions?.length - 1) {
      setshowreport(true);
      setshowinfo(false);
    }
  }, [activeindex]);

  const sendreport = () => {
    const data = {
      name: username,
      quizzes: [
        {
          quizname: quizname,
          score: score,
          questions: [selectedoption],
        },
      ],
    };

    fetch(
      "https://rithik-capstone.herokuapp.com/api/addreport?name=" + username,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    ).then(() => {
      console.log("Report added");
    });
  };

  return (
    <div>
      {showloading && <h2>Loading...</h2>}
      {showreport && (
        <div>
          <div class="p-5">
            <Title>Your Score: {score}</Title>
          </div>
          <Header>Questions you got right:</Header>
          {questionscorrect.map((data, i) => (
            <div key={i} class="m-5 text-left">
              {data.question}
            </div>
          ))}

          <Header>Questions you got wrong:</Header>
          {questionsincorrect.map((data, i) => (
            <div key={i} class="m-5 text-left">
              {data.question}
            </div>
          ))}

          <Link to={`/newquiz`}>
            <div
              class="rounded-lg shadow-sm hover:shadow-md p-5 max-w-xs align-middle bg-gray-100 "
              onClick={sendreport}
            >
              Exit Quiz
            </div>
          </Link>
        </div>
      )}
      {showinfo && (
        <div>
          <div class="w-screen h-screen flex justify-center overflow-hidden items-center">
            <div class=" absolute top-5 flex items-center justify-between gap-96">
              <Title>{info.quizname}</Title>
              <Timer initialMinute="5" initialSeconds="5" />
            </div>
            <div class={cardstyles}>
              <span>
                <b>Question {activeindex + 1}: </b>
                {info.questions[activeindex].question}
              </span>

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
                  {showbutton && (
                    <div class={explanationbutton}>
                      <b>Meaning: </b>
                      {distractor.meaning}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {showbutton &&
              (isanswercorrect ? (
                <div class="mx-2">
                  <Tickmark />
                </div>
              ) : (
                <div class="mx-2">
                  <Cross />
                </div>
              ))}

            {showbutton && (
              <button
                class="justify-end mx-5 border-b-2 border-black"
                onClick={() => setactiveindex(activeindex + 1)}
              >
                Next Question
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowNewerQuiz;
