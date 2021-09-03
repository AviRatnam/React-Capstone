import Header from "../Header/Header";
import Title from "../Title/Title";

const AddQuizCard = ({ quizdata }) => {
  console.log(quizdata);
  const newquizstyles = `rounded-lg shadow-md text-gray-700 px-5 py-5 flex-initial hover:shadow-lg hover:pointer flex items-center object-right-top transition duration-500 ease-in-out`;

  return (
    <div className="quiz-list" class={newquizstyles}>
      {quizdata.map((data) => {
        <div className="quiz-preview" id={data.id}>
          <Title>{data.quizName}</Title>
          <Header>{data.subjectName}</Header>
          <ul>
            <li>
              Time allocated: {data.minutes} minutes {data.seconds} seconds
            </li>
            <li>No. of Questions: {data.questions}</li>
          </ul>
        </div>
      })}
    </div>
  );
};

export default AddQuizCard;
