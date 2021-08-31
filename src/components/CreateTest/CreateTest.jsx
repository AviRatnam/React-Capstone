import { useState } from "react";
import CallSideMenu from "../CallSideMenu/CallSideMenu";
import Header from "../Header/Header";
import Title from "../Title/Title";
import PopupQuizForm from "../PopupQuizForm/PopupQuizForm";

const CreateTest = () => {
  const newtestclass = `rounded-lg shadow-md text-gray-700 px-5 py-5 flex-initial hover:shadow-lg hover:pointer flex items-center object-right-top transition duration-500 ease-in-out`;

  const [createNewQuiz, setCreateNewQuiz] = useState(false);

  const newQuizTime = () => {
    setCreateNewQuiz(!createNewQuiz);
  };

  return (
    <div class=" grid md:grid-cols-5 ">
      <CallSideMenu />
      <div class="col-span-4 px-5 py-5 w-80 gap-x-10 gap-y-10">
        <Title>Add Quiz</Title>
        <div class={newtestclass} onClick={newQuizTime}>
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
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span class="px-10">Create New Test</span>
        </div>
        {createNewQuiz ? <PopupQuizForm /> : null}
      </div>
    </div>
  );
};

export default CreateTest;
