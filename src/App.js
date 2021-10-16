import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./Pages";
import QuizNew from "./components/Quiz/QuizNew";
import ShowNewerQuiz from "./components/Quiz/ShowNewerQuiz";

function App() {

  return (
    <Router>
      <div className="App">
        <ShowNewerQuiz />
      </div>
    </Router>
  );
}

export default App;
