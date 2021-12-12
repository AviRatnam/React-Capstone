import Card from "../Card/Card";
import SideMenu from "../SideMenu/SideMenu";
import Title from "../Title/Title";
import Header from "../Header/Header";
//import Hamburger from "./Hamburger";
import Timer from "../Timer/Timer";
import CallSideMenu from "../CallSideMenu/CallSideMenu";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import { AnimatePresence, Motion } from "framer-motion";

const Dashboard = () => {
  const [subjects, setsubjects] = useState(null);
  const [showsubjects, setshowsubjects] = useState(false);
  const api_endpoint = "https://rithik-capstone.herokuapp.com/api/getquizcards";

  useEffect(() => {
    fetch(api_endpoint)
      .then((data) => data.json())
      .then((res) => {
        setsubjects(res);
        setshowsubjects(true);
        console.log(res);
      });
  }, []);

  return (
    <div class=" grid md:grid-cols-5 ">
      <CallSideMenu />
      <div class="col-span-4 px-5 py-5 gap-x-10 gap-y-10 ">
        <div class="text-left px-5 py-3">
          <Title>Begin Learning</Title>
          <Header>New Lessons</Header>
        </div>
        <div class="md:grid	grid-cols-2 gap-3">
          {showsubjects &&
            subjects.quizcards.map((info) => (
              <Link to={`/readlesson/${info.quizname}`}>
                <Card title={info.chapter} content={info.summarized_text} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
