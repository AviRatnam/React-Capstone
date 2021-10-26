import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./Pages";
import LoginCard from "./components/LoginCard/LoginCard";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Pages />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
