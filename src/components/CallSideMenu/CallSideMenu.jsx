import SideMenu from "../SideMenu/SideMenu";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const CallSideMenu = () => {
    return(
        <div class="md:col-span-1 bg-gray-100 ">
        <div class="px-10 py-10 bg-gray-100 ">
          <Link to="/">
            <Header> Capstone 2021</Header>
          </Link>
        </div>
        <div id="menu">
          <SideMenu target="#">Profile</SideMenu>
          <SideMenu target="/newquiz">Testing</SideMenu>
          <SideMenu target="#">Learning</SideMenu>
          <SideMenu target="#">Logout</SideMenu>
        </div>
        <div class="px-10 py-10 bg-gray-100"></div>
        <div class="px-10 py-12 bg-gray-100"></div>
      </div>
    )
}

export default CallSideMenu;