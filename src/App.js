import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./Pages";
import LoginCard from "./components/LoginCard/LoginCard";
import { UserProvider } from "./UserContext";
import { RoleProvider } from "./RoleContext";

function App() {
  return (
    <RoleProvider>
      <UserProvider>
        <Router>
          <div className="App">
            <Pages />
          </div>
        </Router>
      </UserProvider>
    </RoleProvider>
  );
}

export default App;
