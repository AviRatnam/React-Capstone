import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import CreateTest from "./components/CreateTest/CreateTest";
import ShowNewerQuiz from "./components/Quiz/ShowNewerQuiz";
import Lesson from "./components/Lesson/Lesson";
import Profile from "./components/Profile/Profile";
import QuizReport from "./components/Profile/QuizReport";
import LoginCard from "./components/LoginCard/LoginCard";

const Pages = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <LoginCard />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/newquiz">
          <CreateTest />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/takequiz/:quizname">
          <ShowNewerQuiz />
        </Route>
        <Route path="/showreport/:username/:quizname">
          <QuizReport />
        </Route>
        <Route path="/readlesson/:lessonname">
          <Lesson />
        </Route>
      </Switch>
    </div>
  );
};

export default Pages;
