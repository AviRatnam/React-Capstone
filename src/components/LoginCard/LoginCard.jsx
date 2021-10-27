import Button from "../Button/Button";
import logincardclass from "./LoginCard.styles";
import { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import { useHistory } from "react-router-dom";

const LoginCard = (props) => {
  const [value, setvalue] = useContext(UserContext);

  const history = useHistory();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  console.log(value);

  const adduser = (e) => {
    e.preventDefault();
    //const temp = { username: username, password: password };
    setvalue(username);
    history.push("/dashboard");
  };

  return (
    <div class="w-screen h-screen flex justify-center items-center bg-blue-200">
      <div class={logincardclass}>
        <form onSubmit={adduser}>
          <span>Username: </span>
          <input
            type="text"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            required
          />
          <span>Password: </span>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button class="border-b-2 border-gray-300 text-gray-400">
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginCard;
