import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RoleContext } from "../../RoleContext";
import { UserContext } from "../../UserContext";
import CallSideMenu from "../CallSideMenu/CallSideMenu";
import Header from "../Header/Header";
import Title from "../Title/Title";
import Exclaim from "./Exclaim";
import Progressbar from "./progressbar";
import Tickmark from "./Tickmark";

const StudentProfile = ({ studentname }) => {
  const API = "https://rithik-capstone.herokuapp.com/api/student?name=";
  const [profile, setprofile] = useState(null);
  const [showprofile, setshowprofile] = useState(false);

  useEffect(() => {
    fetch(API + studentname)
      .then((profile) => profile.json())
      .then((res) => {
        setprofile(res);
        setshowprofile(true);
      });
  }, []);

  function checkProgress(param) {
    const value = param;

    if (value < 25)
      return <Progressbar bgcolor="red" progress={value} height={10} />;
    else if (value >= 25 && value < 50)
      return <Progressbar bgcolor="orange" progress={value} height={10} />;
    else if (value >= 50 && value < 75)
      return <Progressbar bgcolor="green" progress={value} height={10} />;
    else if (value >= 75 && value < 100)
      return <Progressbar bgcolor="purple" progress={value} height={10} />;
    else if (Number.isNaN(NaN))
      return <Progressbar bgcolor="blue" progress="1" height={10} />;
    else return <Progressbar bgcolor="red" progress={value} height={10} />;
  }

  return (
    <>
      {!showprofile ? (
        <div>Loading</div>
      ) : (
        <div class="p-5 text-left shadow-lg rounded-lg w-1/2 ">
          <span>Student Name: </span>
          <span class="font-bold border-b-2 border-black">{profile.name}</span>
          <div class="pt-5">
            {checkProgress(
              Math.round((profile.total_score / profile.max_score) * 100, 2)
            )}
            {profile.total_score ? (
              <span class="font-bold text-md">
                Total Score : {profile.total_score} / {profile.max_score}{" "}
              </span>
            ) : (
              <span class="font-bold text-md">No Score Available</span>
            )}
          </div>
          <div class="py-3 font-semibold">Quizzes Complete: </div>
          <div class="max-h-l overflow-auto">
            {profile.taken?.map((completed) => (
              <Link to={`/showreport/${profile.name}/${completed}`}>
                <div class="p-2">
                  <div class="inline-flex items-center bg-gray-100 rounded-md hover:bg-gray-200 p-2 max-w-xs gap-3 ">
                    <div>{completed}</div>
                    <Tickmark />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div class="border-b-2 border-gray-100 w-32 py-2"></div>
          <span class="font-semibold">Quizzes Incomplete: </span>
          <br />
          {profile.not_taken?.map((incomplete) => (
            <Link to={`/takequiz/${incomplete}`}>
              <div class="p-2">
                <div class="inline-flex items-center bg-gray-100 rounded-md hover:bg-gray-200 p-2 max-w-xs gap-3 ">
                  <div>{incomplete}</div>
                  <Exclaim />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default StudentProfile;
