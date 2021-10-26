import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import CallSideMenu from "../CallSideMenu/CallSideMenu";
import Header from "../Header/Header";
import Title from "../Title/Title";
import Exclaim from "./Exclaim";
import Tickmark from "./Tickmark";

const Profile = () => {
  const [profile, setprofile] = useState(null);
  const [showprofile, setshowprofile] = useState(false);

  const [name,setname] = useContext(UserContext);

  console.log(name);
  
  const API = "https://rithik-capstone.herokuapp.com/api/student";

  useEffect(() => {
    fetch(API)
      .then((data) => data.json())
      .then((res) => {
        setprofile(res);
        setshowprofile(true);
      });
  }, []);

  return (
    <div class="grid md:grid-cols-5 ">
      <CallSideMenu />
      <div class="col-span-4 px-5 py-5 gap-x-10 gap-y-10 ">
        <Title>Profile</Title>
        <div class="grid md:grid-cols-3 gap-5">
          {showprofile &&
            profile.students.map((data) => (
              <div class="p-5 text-left shadow-lg rounded-lg ">
                <span>Student Name: </span>
                <span class="font-bold border-b-2 border-black">
                  {data.name}
                </span>
                <br />
                <br />
                <span class="font-semibold">Quizzes Complete: </span>
                <br />
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
            ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
