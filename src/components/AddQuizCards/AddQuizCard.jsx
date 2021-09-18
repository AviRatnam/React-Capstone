import Header from "../Header/Header";
import Title from "../Title/Title";
import { Link } from "react-router-dom";

const AddQuizCard = ({ quizdata }) => {
  console.log(quizdata);
  const newquizstyles = `rounded-lg shadow-md text-gray-700 px-5 py-5 flex-initial hover:shadow-lg hover:pointer transition duration-500 ease-in-out`;
  return (
    <div class="grid md:grid-columns-3 py-5">
      <Header>Available Quizzes</Header>
      <div class="md:grid grid-cols-3 gap-10 py-5">
        {quizdata.map((quiz) => (
          <div class={newquizstyles} key={quiz.id}>
            <Link to="/takequiz">
              <Title>{quiz.quizName}</Title>
              <Header>{quiz.subjectName}</Header>
              <ul>
                <li>
                  <span class="font-bold">Time allocated:</span> {quiz.minutes}{" "}
                  minutes {quiz.seconds} seconds
                </li>
                <li>
                  <span class="font-bold">No. of Questions: </span>
                  {quiz.questions}
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
