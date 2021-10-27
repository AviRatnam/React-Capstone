import SideMenu from "../SideMenu/SideMenu";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const CallSideMenu = () => {
    return(
        <div class="md:col-span-1 bg-yellow-300 h-screen">
        <div class="px-10 py-10 bg-yellow-300">
          <Link to="/dashboard">
            <Header> Capstone 2021</Header>
          </Link>
        </div>
        <div id="menu">
          <SideMenu target="/profile">Profile</SideMenu>
          <SideMenu target="/newquiz">Testing</SideMenu>
          <SideMenu target="/dashboard">Learning</SideMenu>
          <SideMenu target="/">Logout</SideMenu>
        </div>
        
      </div>
    )
}

export default CallSideMenu;