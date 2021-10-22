import { Route, Switch } from "react-router-dom";
import QuizNew from "./components/Quiz/QuizNew";
import ShowQuiz from "./components/Quiz/ShowQuiz";
import Dashboard from "./components/Dashboard/Dashboard";
import CreateTest from "./components/CreateTest/CreateTest";
import ShowNewerQuiz from "./components/Quiz/ShowNewerQuiz";
import Lesson from "./components/Lesson/Lesson";

const Pages = () =>{
    return(
        <div>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/newquiz">
              <CreateTest />
            </Route>
            <Route path="/takequiz/:quizname">
              <ShowNewerQuiz />
            </Route>
            <Route path="/readlesson/:lessonname">
              <Lesson />
            </Route>
          </Switch>
        </div>
    )
}

export default Pages;