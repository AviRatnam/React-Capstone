import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./Pages";

function App() {

  return (
    <Router>
      <div className="App">
        <Pages />
      </div>
    </Router>
  );
}

export default App;
