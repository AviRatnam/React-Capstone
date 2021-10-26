import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CallSideMenu from "../CallSideMenu/CallSideMenu";
import Header from "../Header/Header";
import Title from "../Title/Title";
import Cross from "./Cross";
import Tickmark from "./Tickmark";

const QuizReport = () => {
  const { username, quizname } = useParams();

  const [reportdata, setreportdata] = useState(null);
  const [showreport, setshowreport] = useState(false);

  const API = "https://rithik-capstone.herokuapp.com/api/report?name=";

  useEffect(() => {
    fetch(API + username + "&quizname=" + quizname)
      .then((info) => info.json())
      .then((data) => {
        console.log(data);
        setreportdata(data);
        setshowreport(true);
      });
  }, []);

  return (
    <div class="grid md:grid-cols-5 ">
      <CallSideMenu />
      <div class="col-span-4 px-5 py-5 gap-x-10 gap-y-10">
        <Title>Report</Title>
        {showreport && (
          <div>
            <Header>{reportdata.quizname}</Header>
            <h1 class="text-left p-5"><b>Total Score: </b>{reportdata.score}</h1>
            {reportdata.questions[0].map((info) => (
              <div class="p-5">
                <div class="border-l-2 border-black text-left my-2">
                  <div class="px-2">{info.question}</div>
                </div>
                <div class="text-left mx-2 my-3">
                  {info.selected.distractor === info.answer ? <Tickmark/> : <Cross /> }
                  <div>
                    <b>Selected Answer:</b> {info.selected.distractor}
                  </div>
                  <div>
                    <b>Answer:</b> {info.answer}{" "}
                  </div>
                </div>
                <div class="border-b-2 border-gray-400 w- w-32" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizReport;
