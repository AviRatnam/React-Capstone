import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Title from "../Title/Title";
import lessonstyles from "./Lesson.styles";

const Lesson = () => {
  const { lessonname } = useParams();
  const [info, setinfo] = useState();
  const [showinfo, setshowinfo] = useState(false);

  const API =
    "https://rithik-capstone.herokuapp.com/api/getquizcards?quizname=";

  useEffect(() => {
    fetch(API + lessonname)
      .then((res) => res.json())
      .then((data) => {
        setinfo(data);
        setshowinfo(true);
      });
  }, []);

  return (
    <div class="p-5">
      {showinfo && (
        <div class="p-3 my-2 gap-3">
          <div class={lessonstyles}>
            <Title>{info.chapter}</Title>
            <Header>{info.quizname}</Header>
            <span>{info.summarized_text}</span>
          </div>

          <div class="my-5">
          <Link to={`/takequiz/${info.quizname}`}>
            <div class="rounded-lg shadow-md bg-blue-100 hover:shadow-lg hover:bg-blue-200 p-3 max-w-xs ">
              Take the quiz!
            </div>
          </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lesson;
