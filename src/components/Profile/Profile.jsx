import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RoleContext } from "../../RoleContext";
import { UserContext } from "../../UserContext";
import CallSideMenu from "../CallSideMenu/CallSideMenu";
import Header from "../Header/Header";
import Title from "../Title/Title";
import Exclaim from "./Exclaim";
import Progressbar from "./progressbar";
import StudentProfile from "./StudentProfile";
import Tickmark from "./Tickmark";
import Star from "./Star";

const Profile = () => {
  const [profile, setprofile] = useState(null);
  const [showprofile, setshowprofile] = useState(false);

  const [name, setname] = useContext(UserContext);
  const [userrole, setuserrole] = useContext(RoleContext);

  const API1 = "https://rithik-capstone.herokuapp.com/api/student";

  console.log(name);
  // if (userrole === "student") {
  //   fetch(API1 + "?name=" + name)
  //     .then((data) => data.json())
  //     .then((res) => {
  //       setprofile(res);
  //       setshowprofile(true);
  //     });
  // } else {
  // }

  useEffect(
    () =>
      fetch(API1)
        .then((data) => data.json())
        .then((res) => {
          setprofile(res);
          setshowprofile(true);
        }),
    []
  );

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

  function getLevel(val) {
    const value = val;

    return (
      <div className="text-lg text-indigo-500 font-semibold flex items-center gap-3">
        <div>Level: </div>
        <div className="flex items-center gap-1">
          <Star />
          {Math.round(value / 3, 2)}
        </div>
      </div>
    );
  }

  return (
    <div class="grid md:grid-cols-5 ">
      <CallSideMenu />
      <div class="col-span-4 px-5 py-5 gap-x-10 gap-y-10 ">
        <div class="mb-5 ml-2">
          <Title>Profile</Title>
        </div>
        {userrole === "teacher" ? (
          <div class="grid md:grid-cols-3 gap-5">
            {!showprofile ? (
              <div>Loading</div>
            ) : (
              profile.students.map((data) => (
                <div class="p-5 text-left shadow-lg rounded-lg ">
                  <div className="flex items-center gap-2 justify-between">
                    <div>
                      <span>Student Name: </span>
                      <span class="font-bold border-b-2 border-black">
                        {data.name}
                      </span>
                    </div>
                    <div>{getLevel(data.total_score)}</div>
                  </div>
                  <div class="pt-5">
                    {checkProgress(
                      Math.round((data.total_score / data.max_score) * 100, 2)
                    )}
                    {data.total_score ? (
                      <span class="font-bold text-md">
                        Total Score : {data.total_score} / {data.max_score}{" "}
                      </span>
                    ) : (
                      <span class="font-bold text-md">No Score Available</span>
                    )}
                  </div>
                  <div class="py-3 font-semibold">Quizzes Complete: </div>
                  <div class="max-h-l overflow-auto">
                    {data.taken.map((completed) => (
                      <Link to={`/showreport/${data.name}/${completed}`}>
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
                  {userrole === "teacher" ? (
                    <div>
                      {data.not_taken.map((incomplete) => (
                        <div class="p-2">
                          <div class="inline-flex items-center bg-gray-100 rounded-md hover:bg-gray-200 p-2 max-w-xs gap-3 ">
                            <div>{incomplete}</div>
                            <Exclaim />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      {data.not_taken.map((incomplete) => (
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
                </div>
              ))
            )}
          </div>
        ) : (
          <StudentProfile studentname={name} />
        )}
      </div>
    </div>
  );
};

export default Profile;
