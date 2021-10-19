import Header from "../Header/Header";
import Title from "../Title/Title";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";

const AddQuizCard = ({ quizdata }) => {
  console.log(quizdata.length);
  const newquizstyles = `rounded-lg shadow-md text-gray-700 px-5 py-5 flex-initial hover:shadow-lg hover:pointer transition duration-500 ease-in-out`;
  const history = useHistory();
  const API = "https://capstone.rithik.xyz/api/getquiz?quizname=";

  const deleteQuiz = (id) => {
    fetch(API + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div class="grid md:grid-columns-3 py-5">
      <Header>Available Quizzes</Header>
      <div class="md:grid grid-cols-3 gap-10 py-5 px-10">
        {quizdata.quizcards.map((quiz) => (
          <div class={newquizstyles} key={quiz.id}>
            <Link to={`/takequiz/${quiz.quizname}`}>
              <Title>{quiz.chapter}</Title>
              <Header>{quiz.quizname}</Header>
              <ul>
                <li>
                  <span class="font-bold">Time allocated:</span> {quiz.time.minutes}{" "}
                  minutes {quiz.time.seconds} seconds
                </li>
              </ul>
            </Link>
            <div onClick={() => deleteQuiz(quiz.quizname)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddQuizCard;
