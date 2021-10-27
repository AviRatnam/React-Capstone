import { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";

const PopupQuizForm = () => {
  const quizformstyle = `max-w-lg rounded-lg shadow-lg text-gray-700 px-10 py-10 flex-initial flex items-center object-right-top transition `;
  const borderstyle = `border-2 border-gray-200 rounded-md`;

  const history = useHistory();

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
    console.log(quizDetails);

    const data = new FormData();
    data.append("quizname", quizName);
    data.append("chapter", chapter);
    data.append("minutes", minutes);
    data.append("seconds", seconds);
    data.append("file", pdf.files[0]);

    alert("Quiz added!");
    // fetch("https://capstone.rithik.xyz/api/makequiz", {
    //   method: "POST",
    //   body: data,
    // }).then(() => {
    //   alert("Quiz added!");
    //   window.location.reload();
    // });
  };

  return (
    <div class="mx-5">
      <div class={quizformstyle}>
        <form onSubmit={submitQuiz}>
          <div class="px-3">
            <Header>Quiz Details</Header>
            <div>
              <h3>Quiz Name</h3>
              <input
                class={borderstyle}
                type="text"
                required
                value={quizName}
                onChange={(e) => setQuizName(e.target.value)}
              />
            </div>

            <div>
              <h3>Chapter</h3>
              <input
                class={borderstyle}
                type="text"
                required
                value={chapter}
                onChange={(e) => setchapter(e.target.value)}
              />
            </div>

            <div>
              <h3>Time Limit</h3>
              <input
                class={borderstyle}
                type="number"
                min="1"
                max="10"
                defaultValue={minutes}
                onChange={(e) => setMinutes(e.target.value)}
              />
              <span>Minutes </span>
              <input
                class={borderstyle}
                type="number"
                min="1"
                max="60"
                defaultValue={seconds}
                onChange={(e) => setSeconds(e.target.value)}
              />
              <span>Seconds </span>
            </div>
            <br />
            <div>
              <span>Enter pdf </span>
              <input
                type="file"
                //onChange={(e) => setpdf(e.target.value)}
                ref={(ref) => {
                  setpdf(ref);
                }}
              />
            </div>
            <br />
            <button class="rounded-lg shadow-md bg-green-100 px-3 py-2 hover:bg-green-200 hover:shadow-lg">
              Create Quiz
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupQuizForm;
