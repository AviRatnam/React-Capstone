import { useEffect, useState } from "react";
import CallSideMenu from "../CallSideMenu/CallSideMenu";
import Header from "../Header/Header";
import Title from "../Title/Title";
import PopupQuizForm from "../PopupQuizForm/PopupQuizForm";
import AddQuizCard from "../AddQuizCards/AddQuizCard";
import newtestclass from "./CreateTest.styles";

const CreateTest = () => {

  const [createNewQuiz, setCreateNewQuiz] = useState(false);
  const [fetchquizdata, setfetchquizdata] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    const api_endpoint = 'https://rithik-capstone.herokuapp.com/getquizcards'

    fetch(api_endpoint, { signal: abortCont.signal })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setfetchquizdata(data);
      })
      .catch(err => {
        if(err.name === "AbortError"){
          console.log("Fetch error");
        }

      })
      return () => {abortCont.abort();}
  }, []);

  const newQuizTime = () => {
    setCreateNewQuiz(!createNewQuiz);
  };

  console.log(fetchquizdata);

  return (
    <>
      <div class=" grid md:grid-cols-5 ">
        <CallSideMenu />
        <div class=" col-span-4px-5 py-5 w-max gap-x-10 gap-y-10">
        <div class="text-left px-5 py-3">
          <Title>Add Quiz</Title>
        </div>
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
          {fetchquizdata && <AddQuizCard quizdata={fetchquizdata} />}
        </div>
      </div>
    </>
  );
};

export default CreateTest;

/*
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
*/
