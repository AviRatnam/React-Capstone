import Button from "../Button/Button";
import logincardclass from "./LoginCard.styles";
import { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import { useHistory } from "react-router-dom";
import { RoleContext } from "../../RoleContext";

const LoginCard = (props) => {
  const [value, setvalue] = useContext(UserContext);
  const [user_role, setuser_role] = useContext(RoleContext);

  const API = "https://rithik-capstone.herokuapp.com/api/login";

  const history = useHistory();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [userrole, setuserrole] = useState("");

  console.log(value);
  console.log(userrole);
  setuser_role(userrole);

  const adduser = (e) => {
    e.preventDefault();
    setvalue(username);

    const finalname = {
      "name": username,
    };

    if(userrole === "student"){
      fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalname),
      }).catch((e) => console.error(e));  
    }

    history.push("/dashboard");
  };

  return (
    <div class="w-screen h-screen flex justify-center items-center bg-blue-200">
      <div class={logincardclass}>
        <form onSubmit={adduser}>
          <span class="text-md font-semibold">Username: </span>
          <input
            type="text"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            required
            class="border border-gray-200 rounded-lg"
          />
          <span class="text-md font-semibold px-2">Password: </span>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            class="border border-gray-200 rounded-lg"
          />
          <div class="flex gap-5 justify-center pt-5 items-center">
            <div class="text-lg font-semibold">Are you a..</div>
            <div
              onClick={() => setuserrole("student")}
              class="bg-black text-white px-5 py-3 rounded-lg hover:bg-white hover:text-black border hover:border-black cursor-pointer "
            >
              Student
            </div>
            <div
              onClick={() => setuserrole("teacher")}
              class="bg-white text-black border border-black px-5 py-3 rounded-lg hover:bg-black hover:text-white cursor-pointer"
            >
              Teacher
            </div>
          </div>
          <div className="py-5" />
          <button
            type="submit"
            class="border-b-2 border-black text-black text-lg"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginCard;
