import Header from "../Header/Header";
import Title from "../Title/Title";
import { Link, useHistory } from "react-router-dom";

const AddQuizCard = ({ quizdata }) => {
  const newquizstyles = `rounded-lg shadow-md text-gray-700 px-5 py-5 flex-initial hover:shadow-lg cursor-pointer transition duration-500 ease-in-out max-w-lg`;
  const history = useHistory();
  const API = "https://rithik-capstone.herokuapp.com/api/deletequiz";

  const deleteQuiz = (id) => {
    const deletedata = new FormData();
    deletedata.append("quizname", id);
    fetch(API, {
      method: "POST",
      body: deletedata,
    }).then(() => {
      //history.push("/newquiz");
      window.location.reload();
    });
  };

  return (
    <div class="grid md:grid-columns-2 py-3">
      <Header>Available Quizzes</Header>
      <div class="md:grid grid-cols-2 gap-10 py-5 px-5">
        {quizdata.quizcards.map((quiz) => (
          <div class={newquizstyles} key={quiz.id}>
            <Link to={`/takequiz/${quiz.quizname}`}>
              <div class="relative" onClick={() => deleteQuiz(quiz.quizname)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="red"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <Title>{quiz.chapter}</Title>
              <Header>{quiz.quizname}</Header>
              <ul>
                <li>
                  <span class="font-bold">Time allocated:</span>{" "}
                  {quiz.time.minutes} minutes {quiz.time.seconds} seconds
                </li>
              </ul>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddQuizCard;
